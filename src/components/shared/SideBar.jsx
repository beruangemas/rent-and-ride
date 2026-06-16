export default function SideBar({ isAdminView, isOpen }) {
    return (
        /* The Wrapper: Dynamically handles the open/close state for mobile */
        <aside className={`${isOpen ? 'flex' : 'hidden'} flex-col py-8 border-r border-outline-variant bg-surface-container-lowest dark:bg-surface-dim shadow-md fixed left-0 top-20 h-[calc(100vh-80px)] w-[280px] z-40 flex-shrink-0`}>
            
            {isAdminView ? (
                /* ----------------- ADMIN NAVIGATION ----------------- */
                <>
                    {/* Header */}
                    <div className="px-6 mb-6">
                        <h2 className="font-headline-md text-primary text-[20px] font-bold">Fleet Admin</h2>
                        <p className="font-body-md text-on-surface-variant mt-1 text-sm">Management Console</p>
                    </div>

                    {/* Scrollable Links */}
                    <div className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col gap-1">
                            {/* ACTIVE STATE: Dashboard */}
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-primary font-bold border-l-4 border-primary pl-4 bg-primary-container/10">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                                    <span className="font-label-md text-sm">Dashboard</span>
                                </a>
                            </li>
                            {/* INACTIVE STATES */}
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">motorcycle</span>
                                    <span className="font-label-md text-sm">All Bikes</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">moped</span>
                                    <span className="font-label-md text-sm">Moped</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">speed</span>
                                    <span className="font-label-md text-sm">Sport (Coming soon)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">airline_seat_recline_extra</span>
                                    <span className="font-label-md text-sm">Cruiser (Coming soon)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">map</span>
                                    <span className="font-label-md text-sm">Touring (Coming soon)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">terrain</span>
                                    <span className="font-label-md text-sm">Off-Road (Coming soon)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Bottom Actions */}
                    <div className="px-6 pb-6 mt-auto">
                        <div className="border-t border-outline-variant pt-4 mb-4">
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <a href="#" className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">event_available</span>
                                        <span className="font-label-md text-sm">My Bookings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">contact_support</span>
                                        <span className="font-label-md text-sm">Support</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-transparent text-primary font-bold tracking-wider text-sm border-2 border-primary py-3 rounded hover:bg-primary-container/10 transition-colors uppercase">
                            Apply Filters
                        </button>
                    </div>
                </>
            ) : (
                /* ----------------- USER / PUBLIC NAVIGATION ----------------- */
                <>
                    {/* Header */}
                    <div className="px-6 mb-6">
                        <h2 className="font-headline-md text-primary text-[20px] font-bold">Categories</h2>
                        <p className="font-body-md text-on-surface-variant mt-1 text-sm">Find your ride</p>
                    </div>

                    {/* Scrollable Links */}
                    <div className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col gap-1">
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-primary font-bold border-l-4 border-primary pl-4 bg-primary-container/10 transition-all">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>motorcycle</span>
                                    <span className="font-label-md text-sm">All Bikes</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">speed</span>
                                    <span className="font-label-md text-sm">Sport</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 py-3 text-on-surface-variant pl-5 hover:bg-secondary-container/50 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">airline_seat_recline_extra</span>
                                    <span className="font-label-md text-sm">Cruiser</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Bottom Actions */}
                    <div className="px-6 pb-6 mt-auto">
                        <div className="border-t border-outline-variant pt-4 mb-4">
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <a href="#" className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">event_available</span>
                                        <span className="font-label-md text-sm">My Bookings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">contact_support</span>
                                        <span className="font-label-md text-sm">Support</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </aside>
    );
}