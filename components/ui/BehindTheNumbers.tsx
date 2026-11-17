import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function BehindTheNumbers({ children, className = "" }: Props) {
  return (
    <div className={`p-4 sm:p-5 rounded-xl border bg-slate-50 border-slate-200 ${className}`}>
      <h3 className="text-xs uppercase tracking-widest mb-4 text-blue-600">
        Behind the Numbers
      </h3>
      {children}
    </div>
  );
}
