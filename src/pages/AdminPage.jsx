import Card from '../components/shared/Card'
import UserTable from '../components/admin/UserTable'
import Button from '../components/Button'

export default function AdminPage() {
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
                    <button className="flex items-center gap-2 bg-primary-container text-white font-label-md uppercase px-4 py-2 rounded hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(31,41,55,0.08)] hover:-translate-y-0.5">
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
                        <span className="font-display-lg text-[48px] font-bold text-on-background leading-none">142</span>
                        <span className="font-body-md text-primary-container mb-1">+3 this month</span>
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
                        <span className="font-display-lg text-[48px] font-bold text-on-background leading-none">86</span>
                        <span className="font-body-md text-secondary mb-1">60% utilization</span>
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
                        <span className="font-display-lg text-[48px] font-bold text-on-background leading-none">12</span>
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
                        <span className="font-display-lg text-[48px] font-bold text-primary leading-none">$45.2k</span>
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
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="p-4 flex items-center gap-3">
                                        <div className="w-12 h-12 bg-secondary-container rounded overflow-hidden flex-shrink-0">
                                            <img alt="Ducati Panigale V4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhpj5T3QTC9T6gzh9c9DrQZug_vX5hf76ysZRvjb0TkTJ1l-kUSpSIsPZMwgMLLASSsSDuFmynurPhCCQcEqY3EtD5H_lId1kcAygZgj7AzLMRBN3RjYE4jApe9odtoBQ9ENTkU7s6PUwUQW2-JTeTAJEjM4K45Q6VAhYhg9_TtqXim8LHNYqg3lgAAuE_FUlp_f9FnI692FH2f-zE5HVF6jvdSrOXrFxFItlJug7Ykq0CHdE1PCmSip31et2S5u9cwiMZ_F4UQMHJ" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">Ducati Panigale V4</div>
                                            <div className="text-secondary font-label-sm">2023 Model</div>
                                        </div>
                                    </td>
                                    <td className="p-4 font-mono text-secondary">MTO-8492</td>
                                    <td className="p-4 text-secondary">Sport</td>
                                    <td className="p-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-container/10 text-primary border border-primary-container/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                                            Available
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-secondary hover:text-primary transition-colors rounded hover:bg-surface-container" title="Edit">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-secondary hover:text-error transition-colors rounded hover:bg-error-container/50" title="Delete">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="p-4 flex items-center gap-3">
                                        <div className="w-12 h-12 bg-secondary-container rounded overflow-hidden flex-shrink-0">
                                            <img alt="Harley Davidson Fat Boy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQyDylEiwNUa7JUmxXvJRgnMPk4CoT8l_k2EmrT82bNVNV-bJrVijnCBeaVMpX6xq-UO5oyfPVXOdG5UOINHIdk2hmrc_5mR9caoytrBut1vZ6ug07Iaj_GMSjo9TZV9L9g_rRFV_KSpLqtAa0JgZ2Lcop1627VgGLhLstd7NwzDPR3NchNAYdW3erCg7xGtUnX3h0tu1mwyCCEgsYduk9bzjqglZ3iA4syWV1jo6t0KrnMvoj596ALoNFoghTFIXppHLhj6-Fd4H4" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">Harley Davidson Fat Boy</div>
                                            <div className="text-secondary font-label-sm">2022 Model</div>
                                        </div>
                                    </td>
                                    <td className="p-4 font-mono text-secondary">MTO-1102</td>
                                    <td className="p-4 text-secondary">Cruiser</td>
                                    <td className="p-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-container-highest text-secondary border border-outline-variant">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            Rented
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-secondary hover:text-primary transition-colors rounded hover:bg-surface-container">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-secondary hover:text-error transition-colors rounded hover:bg-error-container/50">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="p-4 flex items-center gap-3">
                                        <div className="w-12 h-12 bg-secondary-container rounded overflow-hidden flex-shrink-0">
                                            <div className="w-full h-full bg-surface-dim flex items-center justify-center text-outline">
                                                <span className="material-symbols-outlined">image</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">BMW R 1250 GS</div>
                                            <div className="text-secondary font-label-sm">2024 Model</div>
                                        </div>
                                    </td>
                                    <td className="p-4 font-mono text-secondary">MTO-9934</td>
                                    <td className="p-4 text-secondary">Touring</td>
                                    <td className="p-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-error-container text-error border border-error/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                            Maintenance
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-secondary hover:text-primary transition-colors rounded hover:bg-surface-container">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-secondary hover:text-error transition-colors rounded hover:bg-error-container/50">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
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
        </div>
    );
}