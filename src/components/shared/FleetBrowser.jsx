import Card from './Card';

export default function FleetBrowser(){

    return (
        <div className="flex flex-col w-full max-w-container-max mx-auto gap-8">
            {/* The two big category boxes */}
            {/* Switched to a CSS Grid for perfect side-by-side responsive alignment */}
            {/* 1. HERO SECTION */}
                        <section className="relative rounded-xl overflow-hidden shadow-md h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 to-transparent z-10"></div>
                            <img 
                                alt="Hero Motorcycle" 
                                className="w-full h-full object-cover object-center absolute inset-0" 
                                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop" 
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm rounded uppercase tracking-wider mb-4 w-max">
                                    New Arrivals
                                </span>
                                <h1 className="font-display-lg text-[48px] md:text-[56px] text-white font-bold leading-tight mb-4 tracking-tight">
                                    Command the Concrete.
                                </h1>
                                <p className="font-body-lg text-lg text-surface-variant mb-8 max-w-md">
                                    Experience the thrill of urban agility with our latest fleet of high-performance sportbikes. Engineered for precision.
                                </p>
                                <button className="w-max px-8 py-3 bg-primary-container text-white font-label-md text-label-md uppercase rounded shadow-lg hover:bg-inverse-primary hover:-translate-y-1 transition-all duration-300">
                                    Explore Fleet
                                </button>
                            </div>
                        </section>
            
                        {/* 2. ACTIVE FILTERS */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="font-label-md text-label-md text-on-surface-variant mr-2">Active Filters:</span>
                            
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ECFDF5] text-surface-tint rounded-full border border-outline-variant/30 text-sm">
                                <span className="font-label-sm">Location: Downtown</span>
                                <button className="hover:text-primary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px]">close</span>
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ECFDF5] text-surface-tint rounded-full border border-outline-variant/30 text-sm">
                                <span className="font-label-sm">Type: Sport</span>
                                <button className="hover:text-primary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px]">close</span>
                                </button>
                            </div>
                            
                            <button className="font-label-sm text-label-sm text-primary-container hover:text-primary transition-colors ml-2 font-semibold">
                                Clear All
                            </button>
                        </div>
            
                        {/* 3. FLEET GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            
                            <Card 
                                variant="vehicle"
                                title="RSX 150"
                                subtitle="Honda"
                                value="65"
                                image="/src/assets/moped/honda-rsx-150.jpeg"
                                badgeText="Available"
                                badgeColor="bg-primary-container"
                                buttonText="Book Now"
                                specs={[
                                    { icon: "speed", text: "149cc" },
                                    { icon: "settings", text: "Manual 6-Spd" },
                                    // { icon: "airline_seat_recline_normal", text: "860mm Seat" },
                                    // { icon: "weight", text: "202 kg" }
                                ]}
                            />
            
                            <Card 
                                variant="vehicle"
                                title="Panigale V4"
                                subtitle="Ducati"
                                value="220"
                                image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop"
                                badgeText="Until Tomorrow"
                                badgeColor="bg-[#D97706]"
                                buttonText="Reserve"
                                specs={[
                                    { icon: "speed", text: "1103cc" },
                                    { icon: "settings", text: "Manual 6-Spd" },
                                    { icon: "airline_seat_recline_normal", text: "835mm Seat" },
                                    { icon: "weight", text: "198 kg" }
                                ]}
                            />
            
                            <Card 
                                variant="vehicle"
                                title="Ninja ZX-10R"
                                subtitle="Kawasaki"
                                value="175"
                                image="https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=800&auto=format&fit=crop"
                                badgeText="Available"
                                badgeColor="bg-primary-container"
                                buttonText="Book Now"
                                specs={[
                                    { icon: "speed", text: "998cc" },
                                    { icon: "settings", text: "Manual w/ QS" },
                                    { icon: "airline_seat_recline_normal", text: "835mm Seat" },
                                    { icon: "weight", text: "207 kg" }
                                ]}
                            />
            
                            <Card 
                                variant="vehicle"
                                title="S 1000 RR"
                                subtitle="BMW"
                                value="195"
                                image="https://images.unsplash.com/photo-1599819811279-d5ad9ce18251?q=80&w=800&auto=format&fit=crop"
                                badgeText="Available"
                                badgeColor="bg-primary-container"
                                buttonText="Book Now"
                                specs={[
                                    { icon: "speed", text: "999cc" },
                                    { icon: "settings", text: "Pro Shift" },
                                    { icon: "airline_seat_recline_normal", text: "824mm Seat" },
                                    { icon: "weight", text: "197 kg" }
                                ]}
                            />
            
                        </div>
        </div>
    )
}