export function Noise() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-5 h-full w-full opacity-[0.035] mix-blend-overlay"
      aria-hidden
    >
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}

