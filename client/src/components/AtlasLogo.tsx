/**
 * Operations Control Atlas design: compact turbine-aperture mark paired with precise industrial wordmark.
 */
type AtlasLogoProps = {
  compact?: boolean;
};

export function AtlasLogo({ compact = false }: AtlasLogoProps) {
  return (
    <div className="flex items-center gap-3" aria-label="Atlas DQ">
      <img
        src="/manus-storage/atlas-mark_b9010241.png"
        alt=""
        className="h-10 w-10 shrink-0 object-contain"
      />
      {!compact && (
        <div className="leading-none">
          <div className="font-display text-[15px] font-semibold tracking-[0.14em] text-white">
            ATLAS DQ
          </div>
          <div className="mt-1 text-[9px] font-semibold tracking-[0.24em] text-slate-500">
            DATA QUALITY
          </div>
        </div>
      )}
    </div>
  );
}
