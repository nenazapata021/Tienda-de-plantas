import { formatPrice } from "../utils/formatPrice";
import Button from "./ui/Button";

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, image, tag } = product;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-stone-700">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-medium text-stone-900">{name}</h3>
        <p className="text-sm text-stone-500">{formatPrice(price)}</p>
        <Button
          variant="secondary"
          className="mt-auto w-full"
          onClick={() => onAddToCart?.(product)}
        >
          Añadir a la cesta
        </Button>
      </div>
    </article>
  );
}
