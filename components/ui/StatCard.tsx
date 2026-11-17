export interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: "blue" | "teal" | "amber";
  size?: "xl" | "2xl";
}

export const accentMap = {
  blue:  "text-blue-600",
  teal:  "text-teal-600",
  amber: "text-amber-600",
};

export default function StatCard({ label, value, sub, accent = "blue", size = "2xl" }: StatCardProps) {
  return (
    <div className="rounded-xl p-4 border transition-colors bg-white border-slate-200 hover:border-slate-300">
      <p className="text-xs font-medium uppercase tracking-wider mb-1 text-slate-500">{label}</p>
      <p className={`${size === "xl" ? "text-base sm:text-xl" : "text-xl sm:text-2xl"} leading-none font-bold break-words ${accentMap[accent]}`}>{value}</p>
      {sub && <p className={`mt-1 ${size === "xl" ? "text-xs" : "text-sm"} text-slate-600`}>{sub}</p>}
    </div>
  );
}
