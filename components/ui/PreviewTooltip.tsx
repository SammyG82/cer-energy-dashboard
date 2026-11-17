import type { CSSProperties } from "react";
import ForecastBadge from "@/components/ui/ForecastBadge";

export interface PreviewTooltipEntry {
  key: string;
  label: string;
  value: string;
  unit?: string;
  color: string;
}

interface Props {
  year: number;
  isForecast: boolean;
  entries: PreviewTooltipEntry[];
  footer?: string;
  style?: CSSProperties;
}

export default function PreviewTooltip({ year, isForecast, entries, footer, style }: Props) {
  return (
    <div
      aria-hidden="true"
      className="absolute rounded-xl px-3 py-2.5 flex flex-col gap-1.5 pointer-events-none shadow-sm border bg-white border-slate-200"
      style={style}
    >
      <div className="flex items-center gap-2 border-b pb-1.5 mb-0.5 border-slate-100">
        <p className="text-xs font-mono font-bold text-slate-500">{year}</p>
        <ForecastBadge isForecast={isForecast} />
      </div>
      {entries.map(({ key, label, value, unit, color }) => (
        <div key={key} className="flex items-center gap-2">
          <span aria-hidden="true" className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
          <span className="text-xs flex-1 text-slate-700">{label}</span>
          <span className="text-xs font-mono font-semibold text-slate-900">
            {value}
            {unit && <span className="font-normal ml-0.5 text-slate-400">{unit}</span>}
          </span>
        </div>
      ))}
      {footer && (
        <p className="text-xs border-t pt-1.5 mt-0.5 text-slate-400 border-slate-100">{footer}</p>
      )}
    </div>
  );
}
