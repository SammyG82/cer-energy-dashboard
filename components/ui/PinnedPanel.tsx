import ForecastBadge from "@/components/ui/ForecastBadge";

export interface PinnedPanelEntry {
  key: string;
  label: string;
  value: string;
  unit?: string;
  color: string;
}

export interface PinnedPanelData {
  year: number;
  isForecast: boolean;
  entries: PinnedPanelEntry[];
}

interface Props {
  /** Pinned values to display, or null to show the empty prompt */
  data: PinnedPanelData | null;
  emptyText: string;
  /** Muted note beside the forecast badge, hidden on mobile — e.g. a unit description */
  headerNote?: string;
  /** Muted footer line — e.g. a unit-key legend */
  footer?: string;
}

/**
 * Frozen "pinned data panel" shown below time-series charts (the non-floating twin of
 * PreviewTooltip). Used by EvForecastChart and OilForecastChart. Callers pre-format each
 * entry's label/value strings so the panel stays presentation-only.
 */
export default function PinnedPanel({ data, emptyText, headerNote, footer }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden border-slate-200 bg-white">
      {data ? (
        <>
          <div className="px-4 py-2 border-b flex items-center justify-between border-slate-100">
            <span className="text-xs font-mono font-bold text-slate-500">{data.year}</span>
            <div className="flex items-center gap-2">
              <ForecastBadge isForecast={data.isForecast} />
              {headerNote && (
                <span className="text-xs hidden sm:inline text-slate-400">{headerNote}</span>
              )}
            </div>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: "clamp(120px, 25vh, 220px)" }}>
            {data.entries.map(({ key, label, value, unit, color }) => (
              <div key={key} className="flex items-center gap-3 px-4 py-2 border-b last:border-0 border-slate-50">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="text-sm flex-1 text-slate-700">{label}</span>
                <span className="text-sm font-mono font-semibold whitespace-nowrap text-slate-900">
                  {value}
                  {unit && <span className="text-xs font-normal ml-1 text-slate-400">{unit}</span>}
                </span>
              </div>
            ))}
          </div>
          {footer && (
            <p className="text-xs px-4 py-2 border-t text-slate-400 border-slate-100">{footer}</p>
          )}
        </>
      ) : (
        <p className="text-xs px-4 py-4 text-center text-slate-400">{emptyText}</p>
      )}
    </div>
  );
}
