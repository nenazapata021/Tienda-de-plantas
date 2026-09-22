import { useCartContext } from "../context/CartContext";

// Envuelve el contexto del carrito para exponer solo lo que
// los componentes necesitan, y calcular datos derivados (total, cantidad).
export function useCart() {
  const { items, addItem, removeItem, clearCart } = useCartContext();

  const total = items.reduce((sum, item) => sum + item.price, 0);
  const count = items.length;

  return { items, addItem, removeItem, clearCart, total, count };
}