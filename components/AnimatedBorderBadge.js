"use client";

/**
 * AnimatedBorderBadge
 * ---------------------------------------------------------------------------
 * A pill-shaped badge with a continuously rotating rainbow gradient border,
 * clipped TIGHTLY to the pill edge — no gap, no blur/glow bleeding outside.
 *
 * The wrapper uses `width: fit-content` so it always hugs the icon + text
 * exactly, keeping the ring pinned right at the visible edge (matches the
 * Figma "Coming Soon" pill).
 *
 * Usage:
 *   <AnimatedBorderBadge>Coming Soon</AnimatedBorderBadge>
 *
 *   <AnimatedBorderBadge speed={4} borderWidth={2} onClick={() => {}}>
 *     AI Mode
 *   </AnimatedBorderBadge>
 */

export default function AnimatedBorderBadge({
  children,
  icon,
  spinIcon = false,
  speed = 3,
  borderWidth = 2,
  background = "#ffffff",
  className = "",
  textClassName = "text-orange-600",
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`aib-wrapper ${onClick ? "aib-clickable" : ""}`}
      style={{
        "--aib-speed": `${speed}s`,
        "--aib-border-width": `${borderWidth}px`,
      }}
    >
      <span className="aib-ring" />

      <span className={`aib-inner ${className}`} style={{ background }}>
        <span className={`aib-icon ${spinIcon ? "aib-icon-spin" : ""} ${textClassName}`}>
          {icon ?? <DefaultSparkle />}
        </span>
        <span className={`aib-text ${textClassName}`}>{children}</span>
      </span>

      <style jsx>{`
        .aib-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          border: none;
          padding: 0;
          background: transparent;
          cursor: default;
          border-radius: 9999px;
          isolation: isolate;
          width: fit-content;
        }
        .aib-clickable {
          cursor: pointer;
        }

        .aib-ring {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: var(--aib-border-width);
          overflow: hidden;
        }
        .aib-ring::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          transform: translate(-50%, -50%) rotate(0deg);
          background: conic-gradient(
            from 0deg,
            #ff5f6d,
            #ffc371,
            #f9f871,
            #7afcff,
            #7ac1ff,
            #a17aff,
            #ff7ae0,
            #ff5f6d
          );
          animation: aib-spin-ccw var(--aib-speed) linear infinite;
        }

        @keyframes aib-spin-ccw {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        .aib-inner {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: var(--aib-border-width);
          padding: 8px 18px;
          border-radius: 9999px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .aib-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .aib-icon-spin {
          animation: aib-spin-ccw calc(var(--aib-speed) * 1.5) linear infinite;
        }

        .aib-text {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .aib-ring::before,
          .aib-icon-spin {
            animation: none;
          }
        }
      `}</style>
    </button>
  );
}

function DefaultSparkle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2z" />
      <path d="M19 13l.9 2.6L22.5 16.5l-2.6.9L19 20l-.9-2.6-2.6-.9 2.6-.9L19 13z" opacity="0.7" />
    </svg>
  );
}

