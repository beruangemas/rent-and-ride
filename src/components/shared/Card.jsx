export default function Card({ 
    variant = "stat", // Defaults to "stat" if nothing is passed
    title, 
    subtitle, 
    value, 
    image, 
    badgeText,
    badgeColor = "bg-primary-container",
    specs = [], // Array for the bike details (e.g., [{ icon: "speed", text: "998cc" }])
    buttonText = "Book Now",
    onButtonClick
}) {

    // -----------------------------------------------------------------
    // ADMIN VARIANT: Clean, minimal stat boxes for the dashboard
    // -----------------------------------------------------------------
    if (variant === "stat") {
        return (
            <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/50 p-6 shadow-[0_4px_20px_rgba(31,41,55,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
                    {title}
                </h3>
                <span className="font-display-lg text-[48px] font-bold text-primary-container">
                    {value}
                </span>
            </div>
        );
    }

    // -----------------------------------------------------------------
    // VEHICLE VARIANT: Complex layout for the Customer storefront
    // -----------------------------------------------------------------
    return (
        <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/50 overflow-hidden shadow-[0_4px_20px_rgba(31,41,55,0.08)] hover:shadow-[0_8px_25px_rgba(31,41,55,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden bg-surface-container">
                <img 
                    alt={title} 
                    src={image}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Dynamic Badge (e.g., "Available" or "Rented") */}
                {badgeText && (
                    <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-primary-container font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
                        <div className={`w-2 h-2 rounded-full ${badgeColor}`}></div> 
                        {badgeText}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                            {subtitle}
                        </p>
                        <h3 className="font-headline-md text-[20px] font-bold text-on-surface leading-tight">
                            {title}
                        </h3>
                    </div>
                    <div className="text-right">
                        <span className="font-headline-md text-[22px] font-bold text-primary-container">
                            RM{value}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            /day
                        </span>
                    </div>
                </div>

                {/* Dynamic Specs Grid (Maps through the array passed in) */}
                {specs.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-6 mt-4 pt-4 border-t border-outline-variant/30">
                        {specs.map((spec, index) => (
                            <div key={index} className="flex items-center gap-2 text-on-surface-variant">
                                <span className="material-symbols-outlined text-[18px]">{spec.icon}</span>
                                <span className="font-label-sm text-label-sm">{spec.text}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Action Button */}
                <button 
                    onClick={onButtonClick}
                    className="mt-auto w-full py-3 bg-surface border border-outline-variant text-on-surface font-label-md text-label-md uppercase rounded hover:bg-primary-container hover:text-white hover:border-primary-container transition-all duration-200"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}