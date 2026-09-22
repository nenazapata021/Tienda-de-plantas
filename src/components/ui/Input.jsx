export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 placeholder:text-stone-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100 ${className}`}
      {...props}
    />
  );
}
