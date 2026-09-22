import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import Button from "../components/ui/Button";

export default function Carrito() {
  const { items, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <p className="mx-auto max-w-6xl px-6 py-12 text-stone-500">
        Tu cesta está vacía.
      </p>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-semibold text-stone-900">Tu cesta</h1>

      <ul className="divide-y divide-stone-200">
        {items.map((item, i) => (
          <li key={`${item.id}-${i}`} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium text-stone-900">{item.name}</p>
                <p className="text-sm text-stone-500">{formatPrice(item.price)}</p>
              </div>
            </div>
            <Button variant="ghost" onClick={() => removeItem(item.id)}>
              Quitar
            </Button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
        <span className="font-medium text-stone-900">Total</span>
        <span className="text-lg font-semibold text-stone-900">
          {formatPrice(total)}
        </span>
      </div>
    </section>
  );
}
