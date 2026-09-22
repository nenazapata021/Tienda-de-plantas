export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-800",
    secondary:
      "bg-transparent text-emerald-800 border border-emerald-800 hover:bg-emerald-50",
    ghost: "bg-transparent text-emerald-800 hover:underline",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}