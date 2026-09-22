import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlantById } from "../services/plantsService";
import { formatPrice } from "../utils/formatPrice";
import Button from "../components/ui/Button";
import { useCart } from "../hooks/useCart";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    getPlantById(id).then(setProduct);
  }, [id]);

  if (!product) {
    return (
      <p className="mx-auto max-w-6xl px-6 py-12 text-stone-500">
        Cargando producto...
      </p>
    );
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full rounded-lg object-cover"
      />

      <div>
        <h1 className="text-2xl font-semibold text-stone-900">
          {product.name}
        </h1>
        <p className="mt-2 text-lg text-stone-600">
          {formatPrice(product.price)}
        </p>
        <Button className="mt-6" onClick={() => addItem(product)}>
          Añadir a la cesta
        </Button>
      </div>
    </section>
  );
}
