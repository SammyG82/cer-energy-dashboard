export default function LoadingPlaceholder({ text = "Loading…" }: { text?: string }) {
  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="flex items-center justify-center min-h-32 sm:min-h-48 text-sm text-slate-500">
      <span className="animate-pulse">{text}</span>
    </div>
  );
}
