import { useState, useEffect} from 'react';
import Card from '../components/shared/Card'
import UserTable from '../components/admin/UserTable'
import Button from '../components/Button'


export default function AdminPage() {

    const [fleet, setFleet] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newBike, setNewBike] = useState({
        make: '',
        model: '',
        plate_number: '',
        daily_rate: '',
        current_mileage: '',
    });

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editBike, setEditBike] = useState(null);
    
    useEffect (() => {
        const fetchFleet = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await fetch ('http://localhost:3000/api/motorbikes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ${token}'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setFleet(data);
                } else {
                    console.error("Failed to fetch fleet data");
                }
            } catch (error) {
                console.error("Network error: ", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFleet();
    }, []);

    const handleAddBike = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/motorbikes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newBike)
            });

            if (response.ok) {
                const addedBike = await response.json();
                setFleet([...fleet, addedBike]);
                setIsAddModalOpen(false); //close the popup
                setNewBike({make: '', model:'', plate_number:'', daily_rate: '', current_mileage: '' }); //clear the form
            } else {
                console.error("Failed to add bike!");
            }
        } catch (error) {
            console.error("Network error: ", error);
        }
    };

    const handleUpdateBike = async (e) => {
        e.preventDefault();

        try{
            const token = localStorage.getItem('token');
            const response = await fetch (`http://localhost:3000/api/motorbikes/${editBike.id}`, {
                method: `PUT`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editBike)
            });

            if (response.ok) {
                const updatedBike = await response.json();

                setFleet(fleet.map(bike => bike.id === updatedBike.id ? updatedBike : bike));
                setIsEditModalOpen(false);
                setEditBike(null);
            } else {
                console.error("Failed to update bike!")
            }
        } catch (error) {
            console.error("Network error: ", error);
        }
    };

    const handleDeleteBike = async (bikeId) => {
        //safety confirmation in case accidentally click delete
        if(!window.confirm("Are you sure you want to remove this motorbike from the active fleet?")) return;

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/motorbikes/${bikeId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if(response.ok){
                //filter the retired bike out
                setFleet(fleet.filter(bike => bike.id !== bikeId));
            } else {
                console.error("Failed to delete bike!");
            }
        } catch (error) {
            console.error("Network error: ", error);
        }
    }

    const rentedBikes = fleet.filter(bike => bike.status === 'Rented').length;
    const utilizedBikes = rentedBikes / fleet.length;
    const maintenanceBikes = fleet.filter(bike => bike.status === 'Maintenance').length;

    return (
        <div className="flex flex-col flex-1 w-full max-w-container-max mx-auto gap-stack-lg">
            
            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="font-display-lg text-headline-lg md:text-[48px] font-bold text-on-background leading-tight">Fleet Overview</h1>
                    <p className="font-body-lg text-secondary mt-2">Manage your inventory and monitor active rentals.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-transparent text-primary font-label-md uppercase px-4 py-2 border-2 border-primary rounded hover:bg-primary-container/5 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        Download Report
                    </button>
                    <button 
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 bg-primary-container text-white font-label-md uppercase px-4 py-2 rounded hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(31,41,55,0.08)] hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Add New Bike
                    </button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Metric 1 */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-label-md text-secondary uppercase tracking-wider">Total Bikes</span>
                        <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">motorcycle</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="font-display-lg text-[48px] font-bold text-on-background leading-none">{fleet.length}</span>
                        <span className="font-body-md text-primary-container mb-1">Live from Database</span>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-label-md text-secondary uppercase tracking-wider">Currently Rented</span>
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined">key</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="font-display-lg text-[48px] font-bold text-on-background leading-none">{rentedBikes}</span>
                        <span className="font-body-md text-secondary mb-1">{utilizedBikes.toFixed(2)}%</span>
                    </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#fc7c78]"></div>
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-label-md text-secondary uppercase tracking-wider">In Maintenance</span>
                        <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
                            <span className="material-symbols-outlined">build</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="font-display-lg text-[48px] font-bold text-on-background leading-none">{maintenanceBikes}</span>
                        <span className="font-body-md text-error mb-1">Action needed</span>
                    </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-label-md text-secondary uppercase tracking-wider">Monthly Revenue</span>
                        <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="font-display-lg text-[48px] font-bold text-primary leading-none">RM45.2k</span>
                        <span className="font-body-md text-primary-container mb-1">+12% vs last</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area: Table and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Inventory Table (Spans 2 columns) */}
                <div className="lg:col-span-2 bg-surface-container-lowest rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-bright">
                        <h2 className="font-headline-md text-[24px] font-bold text-on-background">Inventory Management</h2>
                        <div className="flex gap-2">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline text-[18px]">filter_list</span>
                                <select className="pl-9 pr-8 py-2 bg-surface border border-outline-variant rounded text-on-surface font-label-sm focus:ring-primary focus:border-primary appearance-none cursor-pointer">
                                    <option>All Statuses</option>
                                    <option>Available</option>
                                    <option>Rented</option>
                                    <option>Maintenance</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container text-on-surface-variant font-label-md uppercase tracking-wider border-b border-outline-variant">
                                    <th className="p-4 font-semibold">Bike</th>
                                    <th className="p-4 font-semibold">License Plate</th>
                                    <th className="p-4 font-semibold">Category</th>
                                    <th className="p-4 font-semibold">Status</th>
                                    <th className="p-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="font-body-md text-on-background divide-y divide-outline-variant/50">
                                {/* Row 1 */}
                                {fleet.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className= "p-8 text-center text-secondary">
                                            No motorbikes found in the database!
                                        </td>
                                    </tr>
                                ) : (
                                    fleet.map((bike) => (
                                        <tr key={bike.id} className ="hover:bg-surface-container-low transition-colors group">
                                            <td className="p-4 flex items-center gap-3">
                                                <div className="w-12 h-12 bg-secondary-container rounded overflow-hidden flex-shrink-0">
                                                    {/*Fallback icon */}
                                                    <div className="w-full h-full bg-surface-dim flex items-center justify-center text-outline">
                                                        <span className="mateial-symbols-outlined">motorcycle</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{bike.make} {bike.model}</div>
                                                    <div className="text-secondary font-label-sm">RM {bike.daily_rate}/day</div>
                                                </div>
                                            </td>
                                            <td className="p-4 font-mono text-secondary">{bike.plate_number}</td>
                                            <td className="p-4 text-secondary">Standard</td>
                                            <td className="p-4">
                                                {/*Dynamic status badge */}
                                                <span className = {`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${bike.status === 'Available' ? 
                                                'bg-primary-container/10 text-primary border-primary-container/20' :
                                                bike.status === 'Rented' ? 'bg-surface-container-highest text-secondary border-outline-variant' :
                                                'bg-error-container text-error border-error/20'}
                                            `}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    bike.status === 'Available' ? 'bg-primary-container' :
                                                    bike.status === 'Rented' ? 'bg-secondary' :
                                                    'bg-error'
                                                }`}></span>
                                                {bike.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button 
                                                        onClick= {() => {
                                                            setEditBike(bike);
                                                            setIsEditModalOpen(true);
                                                        }}
                                                        className="p-1.5 text-secondary hover:text-primary transition-colors rounded hover:bg-surface-container"
                                                    title="Edit">
                                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDeleteBike(bike.id)}
                                                        className="p-1.5 text-secondary hover:text-error transition-colors rounded hover:bg-error-container/50"
                                                    title="Delete">
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-outline-variant bg-surface-bright flex justify-between items-center text-sm text-secondary">
                        <span>Showing 1-3 of 142 bikes</span>
                        <div className="flex gap-1">
                            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container disabled:opacity-50" disabled>Prev</button>
                            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container">Next</button>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Timeline (Span 1 column) */}
                <div className="bg-surface-container-lowest rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-headline-md text-[24px] font-bold text-on-background">Recent Activity</h2>
                        <button className="text-primary font-label-sm hover:underline">View All</button>
                    </div>
                    
                    <div className="relative flex-1">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-4 top-2 bottom-2 w-px bg-outline-variant/50"></div>
                        <div className="flex flex-col gap-6 relative z-10">
                            
                            {/* Activity Item 1 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0 ring-4 ring-surface-container-lowest text-secondary">
                                    <span className="material-symbols-outlined text-[16px]">key</span>
                                </div>
                                <div>
                                    <p className="font-body-md text-on-background"><span className="font-semibold">Harley Davidson</span> rented by J. Smith</p>
                                    <p className="font-label-sm text-secondary mt-1">2 hours ago</p>
                                </div>
                            </div>
                            
                            {/* Activity Item 2 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0 ring-4 ring-surface-container-lowest text-primary">
                                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                                </div>
                                <div>
                                    <p className="font-body-md text-on-background"><span className="font-semibold">Ducati Panigale</span> returned</p>
                                    <p className="font-label-sm text-secondary mt-1">4 hours ago</p>
                                </div>
                            </div>
                            
                            {/* Activity Item 3 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center flex-shrink-0 ring-4 ring-surface-container-lowest text-error">
                                    <span className="material-symbols-outlined text-[16px]">build</span>
                                </div>
                                <div>
                                    <p className="font-body-md text-on-background"><span className="font-semibold">BMW R 1250 GS</span> status changed to Maintenance</p>
                                    <p className="font-label-sm text-secondary mt-1">Yesterday, 14:30</p>
                                </div>
                            </div>
                            
                            {/* Activity Item 4 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0 ring-4 ring-surface-container-lowest text-secondary">
                                    <span className="material-symbols-outlined text-[16px]">event</span>
                                </div>
                                <div>
                                    <p className="font-body-md text-on-background">New booking confirmed for <span className="font-semibold">KTM 450</span></p>
                                    <p className="font-label-sm text-secondary mt-1">Yesterday, 09:15</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Add new bike modal */}
            {isAddModalOpen && (
                <div className= "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-surface-container-lowest w-full max-w-md rounded-lg shadow-2xl border border-outline-variant/30 overflow-hidden">
                        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                            <h2 className="font-headline-md font-bold text-on-background">Add New Motorbikes</h2>
                            <button onClick={ () =>
                                setIsAddModalOpen(false)
                            } className="text-secondary hover:text-error transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <form onSubmit= {handleAddBike}
                            className="p-6 flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Make</label>
                                        <input type="text" required value = {newBike.make}
                                            onChange={(e) => setNewBike({...newBike, make: e.target.value})}
                                            placeholder="e.g. Yamaha"
                                            className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:border-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Model</label>
                                        <input type="text" required value = {newBike.model}
                                            onChange={(e) => setNewBike({...newBike, model: e.target.value})}
                                            placeholder="e.g. Y15ZR"
                                            className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-label-sm text-secondary mb-1">Plate Number</label>
                                    <input type="text" required value = {newBike.plate_number}
                                        onChange={(e) => setNewBike({...newBike, plate_number: e.target.value})}
                                        placeholder="e.g. VMU 1234"
                                        className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none"/>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Daily Rate (RM)</label>
                                        <input type="number" required value={newBike.daily_rate}
                                            onChange={(e) => setNewBike({...newBike, daily_rate: e.target.value})}
                                            placeholder="0.00"
                                            className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Current Mileage (km)</label>
                                        <input type="number" required value = {newBike.register_mileage}
                                            onChange={(e) => setNewBike({...newBike, register_mileage: e.target.value})}
                                            placeholder="e.g. 15000"
                                            className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-nont"/>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3 mt-4">
                                    <button type="button" onClick = {() => setIsAddModalOpen(false)}
                                        className="px-4 py-2 text-secondary hover:bg-surface-container rounded font-label-md transition-colors">Cancel</button>
                                    <button type="submit" 
                                        className=" px-4 py-2 bg-primary text-on-primary rounded font-label-md shadow hover:opacity-90 transition-opacity">Save Motorbike</button>
                                </div>
                            </form>
                    </div>
                </div>
            )}

            {/* Edit Bike Modal */}
            {isEditModalOpen && editBike && (
                <div className ="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-surface-container-lowest w-full max-w-md rounded-lg shadow-2xl border border-outline-variant/30 overflow-hidden">
                        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                            <h2 className="font-headline-md font-bold text-on-background">Edit Motorbike</h2>
                            <button onClick={() => setIsEditModalOpen(false)}
                                className="text-secondary hover:text-error transition-colors">
                                    <span className = "material-symbols-outlined">close</span>
                                </button>
                        </div>

                        <form onSubmit={handleUpdateBike}
                            className="p-6 flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Make</label>
                                        <input type="text" required value={editBike.make} onChange ={(e) => setEditBike({...editBike, make: e.target.value})} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Model</label>
                                        <input type="text" required value={editBike.model} onChange={(e) => setEditBike({...editBike, model: e.target.value})} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Plate Number</label>
                                        <input type="text" required value={editBike.plate_number} onChange={(e) => setEditBike({...editBike, plate_number: e.target.value})} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Status</label>
                                        <select value={editBike.status} onChange={(e) => setEditBike({...editBike, status: e.target.value})} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none cursor-pointer">
                                            <option value="Available">Available</option>
                                            <option value="Rented">Rented</option>
                                            <option value="Maintenance">Maintenance</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Daily Rate (RM)</label>
                                        <input type="number" required value={editBike.daily_rate} onChange={(e) => setEditBike({...editBike, daily_rate: e.target})} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block font-label-sm text-secondary mb-1">Current Mileage</label>
                                        <input type="number" required value={editBike.current_mileage} onChange={(e) => setEditBike({...editBike, current_mileage: e.target.value})} className="w-full px-3 py-2 bg-surface border border-outline-variant rounded focus:ring-primary focus:border-primary outline-none" />
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3 mt-4">
                                    <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-secondary hover:bg-surface-container rounded font-label-md transition-colors">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-primary text-on-primary rounded font-label-md shadow hover:opacity-90 transition-opacity">Update Bike</button>
                                </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}