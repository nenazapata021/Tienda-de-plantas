import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

export default function Catalogo() {
  const { products, loading } = useProducts();
  const { addItem } = useCart();

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-semibold text-stone-900">Catálogo</h1>

      {loading ? (
        <p className="text-stone-500">Cargando plantas...</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addItem}
            />
          ))}
        </div>
      )}
    </section>
  );
}
