export interface Badge {
  label: string;
  color?: "teal" | "amber" | "blue";
}

export interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  badges?: Badge[];
}

const badgeColors = {
  teal:  "bg-teal-50 text-teal-700 border-teal-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  blue:  "bg-blue-50 text-blue-700 border-blue-200",
};

export default function PageHeader({ title, titleAccent, subtitle, badges }: PageHeaderProps) {
  return (
    <div className="border-b transition-colors duration-300 border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {title}{" "}
            {titleAccent && <span className="text-teal-600">{titleAccent}</span>}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{subtitle}</p>
        </div>
        {badges && badges.length > 0 && (
          <div role="list" aria-label="Page labels" className="flex flex-col gap-1.5 self-end">
            {badges.map(({ label, color = "blue" }) => (
              <span
                role="listitem"
                key={label}
                className={`text-xs font-mono uppercase tracking-wide px-2.5 py-1 rounded border ${badgeColors[color]}`}
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
