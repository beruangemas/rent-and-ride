import Card from '../components/shared/Card'
import FleetBrowser from '../components/shared/FleetBrowser'

export default function UserPage() {
    return (
        
        <div className="flex flex-col flex-1 gap-5 p-10">
            {/* Main container: Swapped inline styles for Tailwind utility classes */}
            
            {/* Notification banner */}
            <div className="w-full p-4 bg-error-container text-on-error-container rounded-lg text-center font-bold shadow-sm">
                Action Required: Upload your IC & Driving License to start booking.
            </div>
            
            {/* Welcome message */}
            <div className="w-full p-5 bg-surface-variant rounded-lg text-center shadow-sm">
                <h2 className="font-headline-md text-[24px] font-bold text-on-surface">
                    Welcome to Rent & Ride, Customer
                </h2>
                <p className="text-body-md italic text-on-surface-variant mt-2">
                    Book the perfect motorbike for your next adventure!
                </p>
            </div>

            <FleetBrowser />
        </div>
    )
}