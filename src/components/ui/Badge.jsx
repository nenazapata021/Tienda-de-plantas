export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ${className}`}
    >
      {children}
    </span>
  );
}