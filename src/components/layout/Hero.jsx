import Badge from "../ui/Badge";
import Button from "../ui/Button";
import ReviewAvatars from "../ReviewAvatars";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Badge>Nueva colección otoño · Stock 3</Badge>

      <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
        Plantas con alma y{" "}
        <span className="italic font-serif">diseño</span>
      </h1>

      <p className="mt-4 max-w-xl text-stone-600">
        Curamos cada especie como una pieza de diseño: desde suculentas
        minimalistas hasta ficus escultóricos. Con guía de cuidado artesanal
        y garantía verde.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button variant="primary">Explorar catálogo</Button>
        <Button variant="secondary">Guía de cuidado</Button>
      </div>

      <div className="mt-8">
        <ReviewAvatars />
      </div>
    </section>
  );
}
