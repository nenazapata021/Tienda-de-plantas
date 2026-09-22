import SearchBar from "../SearchBar";
import { useCartContext } from "../../context/CartContext";

export default function Navbar() {
  const { items } = useCartContext();

  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-stone-900">
              VerdeVivo
            </span>
            <span className="text-[11px] tracking-wide text-stone-500">
              Vivero boutique
            </span>
          </a>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 md:hidden"
          >
            Cesta ({items.length})
          </button>
        </div>

        <div className="w-full md:max-w-md">
          <SearchBar />
        </div>

        <button
          type="button"
          className="hidden items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 hover:border-emerald-600 hover:text-emerald-700 md:flex"
        >
          Cesta ({items.length})
        </button>
      </div>
    </header>
  );
}
