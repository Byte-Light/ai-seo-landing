export function ActionButton({
    label,
    className = "",
}: {
    label: string;
    className?: string;
}) {
    return (
        <button
            className={`relative py-3 px-5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,105,180,0.6)] transition-transform transform hover:scale-105 active:scale-95 ${className}`}
        >
            <div className="absolute inset-0 rounded-full">
                <div
                    className="absolute inset-0 border rounded-full border-white/30 [mask-image:linear-gradient(to-bottom,black,transparent)]"
                />
                <div
                    className="absolute inset-0 border rounded-full border-white/50 [mask-image:linear-gradient(to-top,black,transparent)]"
                />
                <div
                    className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,105,180,0.6)]"
                />
            </div>
            <span>{label}</span>
        </button>
    );
}
