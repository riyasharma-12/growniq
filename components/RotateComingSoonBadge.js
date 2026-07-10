'use client';

/**
 * Animated "Coming Soon" badge — replaces the static comingsoon.png.
 * Circular text ring rotates continuously (like a stamp spinning slowly),
 * with a small sprout icon pulsing gently in the center.
 *
 * Usage:
 *   <RotatingComingSoonBadge className="w-[84px] md:w-[125px]" />
 */
export default function RotatingComingSoonBadge({ className = '' }) {
    const text = 'COMING SOON • COMING SOON • ';
    const chars = text.split('');

    return (
        <div className={`relative aspect-square ${className}`}>
            {/* Rotating circular text ring */}
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-spin-slow"
            >
                <defs>
                    <path
                        id="badge-circle-path"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                </defs>
                <circle cx="50" cy="50" r="38" fill="white" fillOpacity="0.9" />
                <text fontSize="7.2" fontWeight="700" fill="#164925" letterSpacing="1">
                    <textPath href="#badge-circle-path" startOffset="0%">
                        {text}
                    </textPath>
                </text>
            </svg>

            {/* Center sprout icon, gently pulsing (counter-rotation isn't needed since it's centered) */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[46%] h-[46%] rounded-full bg-[#164925] flex items-center justify-center animate-pulse-scale shadow-md">
                    <svg viewBox="0 0 24 24" className="w-[60%] h-[60%]" fill="none">
                        <path
                            d="M12 22V13M12 13C12 13 6 12.5 6 6.5C12 6.5 12 13 12 13ZM12 13C12 13 18 12.5 18 6.5C12 6.5 12 13 12 13Z"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.2s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}