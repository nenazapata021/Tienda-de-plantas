import Hero from "../components/layout/Hero";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

export default function Home() {
  const { products, loading } = useProducts();
  const { addItem } = useCart();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-xl font-semibold text-stone-900">
          Destacados de la colección
        </h2>

        {loading ? (
          <p className="text-stone-500">Cargando plantas...</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
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
    </>
  );
}
