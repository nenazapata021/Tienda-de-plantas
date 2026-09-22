import { useState, useMemo, useEffect } from 'react'

const plantas = [
  {
    id: 1,
    nombre: 'Monstera Deliciosa',
    categoria: 'Interior',
    precio: 34.99,
    precioOriginal: 42.0,
    imagen: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Icónica, escultural y purificadora. Crece rápido con luz indirecta.',
    stock: true,
    tag: 'Más vendida',
    rating: 4.9,
    reviews: 342,
    cuidados: 'Fácil',
  },
  {
    id: 2,
    nombre: 'Sansevieria Trifasciata',
    categoria: 'Purificadoras',
    precio: 22.5,
    imagen: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Indestructible. Ideal dormitorio, purifica el aire de noche.',
    stock: true,
    tag: null,
    rating: 4.8,
    reviews: 189,
    cuidados: 'Muy fácil',
  },
  {
    id: 3,
    nombre: 'Ficus Lyrata',
    categoria: 'Interior',
    precio: 45.0,
    imagen: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Statement plant de hojas violín. Altura 80-100cm.',
    stock: true,
    tag: 'Nuevo',
    rating: 4.7,
    reviews: 96,
    cuidados: 'Medio',
  },
  {
    id: 4,
    nombre: 'Echeveria Elegans',
    categoria: 'Suculentas',
    precio: 12.99,
    imagen: 'https://images.unsplash.com/photo-1459411552884-521ffdd7c59e?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Roseta azulada aterciopelada. Perfecta para principiantes.',
    stock: true,
    tag: null,
    rating: 4.9,
    reviews: 210,
    cuidados: 'Muy fácil',
  },
  {
    id: 5,
    nombre: 'Lavanda Augustifolia',
    categoria: 'Exterior',
    precio: 18.0,
    imagen: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Aromática provenzal. Florece todo el verano.',
    stock: false,
    tag: null,
    rating: 4.8,
    reviews: 74,
    cuidados: 'Fácil',
  },
  {
    id: 6,
    nombre: 'Pothos Golden',
    categoria: 'Interior',
    precio: 16.5,
    imagen: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Colgante dorada de crecimiento explosivo. Macramé ready.',
    stock: true,
    tag: null,
    rating: 4.9,
    reviews: 412,
    cuidados: 'Muy fácil',
  },
  {
    id: 7,
    nombre: 'Cactus Saguaro',
    categoria: 'Suculentas',
    precio: 29.99,
    imagen: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Escultura desértica. Luz directa y riego mensual.',
    stock: true,
    tag: null,
    rating: 4.6,
    reviews: 88,
    cuidados: 'Muy fácil',
  },
  {
    id: 8,
    nombre: 'Calathea Orbifolia',
    categoria: 'Interior',
    precio: 38.0,
    precioOriginal: 45.0,
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Follaje rayado XXL. Amante de la humedad tropical.',
    stock: true,
    tag: 'Últimas',
    rating: 4.7,
    reviews: 129,
    cuidados: 'Avanzado',
  },
  {
    id: 9,
    nombre: 'Olivo Ornamental',
    categoria: 'Exterior',
    precio: 52.0,
    imagen: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b6?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Mediterráneo centenario en miniatura. Terraza o jardín.',
    stock: true,
    tag: null,
    rating: 5.0,
    reviews: 61,
    cuidados: 'Fácil',
  },
  {
    id: 10,
    nombre: 'Areca Palma',
    categoria: 'Purificadoras',
    precio: 41.5,
    imagen: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Palmera tropical que humidifica y alegra cualquier rincón.',
    stock: true,
    tag: null,
    rating: 4.8,
    reviews: 153,
    cuidados: 'Fácil',
  },
  {
    id: 11,
    nombre: 'Aloe Vera Bio',
    categoria: 'Suculentas',
    precio: 14.99,
    imagen: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Medicinal + decor. Gel puro para piel. Muy resistente.',
    stock: true,
    tag: null,
    rating: 4.9,
    reviews: 298,
    cuidados: 'Muy fácil',
  },
  {
    id: 12,
    nombre: 'Bugambilia Rosa',
    categoria: 'Exterior',
    precio: 27.0,
    imagen: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=600&h=700&fit=crop&crop=center',
    descripcion: 'Cascada fucsia solar. Balcones y pérgolas a pleno sol.',
    stock: true,
    tag: null,
    rating: 4.7,
    reviews: 102,
    cuidados: 'Fácil',
  },
]

const categorias = [
  { id: 'Todas', label: 'Todas', icon: '✦' },
  { id: 'Interior', label: 'Interior', icon: '◐' },
  { id: 'Exterior', label: 'Exterior', icon: '☀' },
  { id: 'Suculentas', label: 'Suculentas', icon: '⬢' },
  { id: 'Purificadoras', label: 'Purificadoras', icon: '◎' },
]

function App() {
  const [filtro, setFiltro] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')
  const [carrito, setCarrito] = useState([])
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [orden, setOrden] = useState('default')
  const [favoritos, setFavoritos] = useState(new Set())
  const [toast, setToast] = useState(null)

  // Toast auto hide
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2400)
    return () => clearTimeout(t)
  }, [toast])

  const productosFiltrados = useMemo(() => {
    let r = [...plantas]
    if (filtro !== 'Todas') r = r.filter(p => p.categoria === filtro)
    if (busqueda.trim()) {
      const q = busqueda.toLowerCase()
      r = r.filter(p => p.nombre.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q))
    }
    if (orden === 'precio-asc') r.sort((a, b) => a.precio - b.precio)
    if (orden === 'precio-desc') r.sort((a, b) => b.precio - a.precio)
    if (orden === 'nombre') r.sort((a, b) => a.nombre.localeCompare(b.nombre))
    if (orden === 'rating') r.sort((a, b) => b.rating - a.rating)
    return r
  }, [filtro, busqueda, orden])

  const agregarAlCarrito = (planta) => {
    setCarrito(prev => {
      const ex = prev.find(p => p.id === planta.id)
      if (ex) return prev.map(p => p.id === planta.id ? { ...p, cantidad: p.cantidad + 1 } : p)
      return [...prev, { ...planta, cantidad: 1 }]
    })
    setCarritoAbierto(true)
    setToast(`${planta.nombre} añadida ✓`)
  }

  const toggleFav = (id) => {
    setFavoritos(prev => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  }

  const cambiarCantidad = (id, delta) => {
    setCarrito(prev => prev.map(p => p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + delta) } : p))
  }
  const eliminarDelCarrito = (id) => setCarrito(prev => prev.filter(p => p.id !== id))
  const total = carrito.reduce((a, p) => a + p.precio * p.cantidad, 0)
  const totalItems = carrito.reduce((a, p) => a + p.cantidad, 0)

  return (
    <div className="min-h-screen bg-cream text-zinc-900 selection:bg-emerald-600 selection:text-white">
      {/* Top bar */}
      <div className="bg-zinc-900 text-stone-200 text-xs font-medium">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <p className="tracking-wide hidden sm:block">ENVÍO GRATIS 48H — GARANTÍA VERDE 30 DÍAS — PAGO SEGURO</p>
          <p className="sm:hidden">Envío gratis 48h • Garantía verde</p>
          <div className="hidden md:flex items-center gap-4 text-zinc-400">
            <span>✉ hola@verdevivo.es</span>
            <span className="w-px h-3 bg-zinc-700" />
            <span>↻ Devoluciones gratuitas</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur-xl border-b border-stone-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-white shadow-soft">
              <span className="font-display text-[22px] leading-none translate-y-[1px]">V</span>
            </div>
            <div className="leading-none">
              <p className="font-display text-[22px] tracking-tight">VerdeVivo</p>
              <p className="text-[11px] tracking-[0.18em] font-semibold text-emerald-700 -mt-1">VIVERO BOUTIQUE</p>
            </div>
            <span className="hidden xl:inline-flex ml-2 items-center gap-1.5 text-xs font-medium bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Boutique en Madrid
            </span>
          </div>

          {/* Search desktop */}
          <div className="hidden lg:flex flex-1 max-w-[520px] mx-auto">
            <div className="relative w-full group">
              <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-100 group-focus-within:bg-emerald-600 flex items-center justify-center transition-colors duration-200">
                <svg className="w-[18px] h-[18px] text-zinc-500 group-focus-within:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0a7.5 7.5 0 1 0-10.606-10.606 7.5 7.5 0 0 0 10.606 10.606Z" />
                </svg>
              </div>
              <input
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                placeholder="Buscar monstera, suculenta, exterior..."
                className="w-full pl-12 pr-[110px] py-3 rounded-full bg-white border border-stone-200 shadow-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm placeholder:text-zinc-400 transition"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                {busqueda ? (
                  <button onClick={() => setBusqueda('')} aria-label="Limpiar búsqueda" className="w-8 h-8 rounded-full bg-zinc-900 text-white hover:bg-black flex items-center justify-center transition">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                  </button>
                ) : (
                  <span className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 bg-stone-50 border border-stone-200 px-2.5 py-1.5 rounded-full">
                    ⌘ K
                  </span>
                )}
                <button
                  onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hidden sm:inline-flex w-8 h-8 rounded-full bg-zinc-900 text-white items-center justify-center hover:bg-black transition"
                  aria-label="Buscar"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-1 sm:gap-2 ml-auto">
            <a href="#catalogo" className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-200 transition">Catálogo</a>
            <a href="#cuidados" className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-200 transition">Cuidados</a>

            <button className="hidden sm:flex w-10 h-10 rounded-full bg-white border border-stone-200 items-center justify-center hover:border-stone-300 hover:shadow-sm transition text-zinc-700" aria-label="Favoritos">
              ♥<span className="sr-only">Fav</span>
            </button>

            <button
              onClick={() => setCarritoAbierto(true)}
              className="relative inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-black text-white pl-2 pr-4 py-2 rounded-full font-medium text-sm shadow-soft transition"
            >
              <span className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center text-sm">◑</span>
              Cesta
              <span className={`min-w-[22px] h-[22px] px-1 rounded-full text-xs font-bold flex items-center justify-center transition ${totalItems ? 'bg-emerald-500 text-white' : 'bg-zinc-800 text-zinc-400'}`}>{totalItems}</span>
            </button>
          </nav>
        </div>

        {/* Search mobile */}
        <div className="lg:hidden px-4 pb-3">
          <div className="relative group">
            <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-stone-100 group-focus-within:bg-emerald-600 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0a7.5 7.5 0 1 0-10.606-10.606 7.5 7.5 0 0 0 10.606 10.606Z" />
              </svg>
            </div>
            <input
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              placeholder="Buscar plantas..."
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white border border-stone-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm shadow-sm placeholder:text-zinc-400 transition"
            />
            {busqueda && (
              <button onClick={() => setBusqueda('')} aria-label="Limpiar" className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
        <div className="relative overflow-hidden rounded-[32px] lg:rounded-[40px] bg-white border border-stone-200 shadow-soft">
          {/* blobs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] bg-emerald-100 rounded-full blur-[80px] opacity-60" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[640px] h-[640px] bg-amber-100 rounded-full blur-[90px] opacity-50" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sage/50 rounded-full blur-[100px]" />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 p-6 sm:p-8 lg:p-12 items-center">
            {/* copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-900 text-emerald-50 text-xs font-bold tracking-wide px-3.5 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                NUEVA COLECCIÓN OTOÑO — 20% PACK 3
              </div>

              <h1 className="font-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[0.9] tracking-[-0.02em] mt-5">
                Plantas con
                <br />
                <span className="italic font-normal text-emerald-700">alma</span> y diseño.
              </h1>

              <p className="text-zinc-500 text-[17px] leading-relaxed mt-4 max-w-[52ch]">
                Curamos cada especie como una obra. Desde suculentas minimal hasta ficus esculturales. Con guía de cuidados, maceta artesanal y garantía verde.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a href="#catalogo" className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-black text-white px-7 py-4 rounded-full font-semibold shadow-soft hover:shadow-soft-lg transition">
                  Explorar catálogo
                  <span className="w-6 h-6 rounded-full bg-white text-zinc-900 flex items-center justify-center text-sm">→</span>
                </a>
                <a href="#cuidados" className="inline-flex items-center gap-2 bg-white border border-stone-200 hover:border-stone-300 px-6 py-4 rounded-full font-semibold shadow-sm hover:shadow transition">
                  Guía de cuidados
                </a>
              </div>

              <div className="flex items-center gap-4 mt-7">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/80?img=32" className="w-9 h-9 rounded-full border-[3px] border-white object-cover" alt="" />
                  <img src="https://i.pravatar.cc/80?img=14" className="w-9 h-9 rounded-full border-[3px] border-white object-cover" alt="" />
                  <img src="https://i.pravatar.cc/80?img=45" className="w-9 h-9 rounded-full border-[3px] border-white object-cover" alt="" />
                  <div className="w-9 h-9 rounded-full border-[3px] border-white bg-amber-400 flex items-center justify-center text-xs font-bold">+2k</div>
                </div>
                <div className="text-sm leading-tight">
                  <p className="font-semibold flex items-center gap-1">★★★★★ <span className="font-bold">4.9/5</span></p>
                  <p className="text-zinc-500 text-xs">12.847 hogares felices — reseñas verificadas</p>
                </div>
              </div>

              <div id="cuidados" className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { t: 'Envío protegido', d: 'Embalaje acolchado', e: '◈' },
                  { t: 'Asesoría botánica', d: 'Chat con expertos', e: '✦' },
                  { t: 'Maceta artesana', d: 'Barro & reciclado', e: '⬙' },
                ].map(b => (
                  <div key={b.t} className="bg-stone-50 border border-stone-100 rounded-2xl p-3.5">
                    <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm">{b.e}</div>
                    <p className="text-xs font-bold mt-2 leading-none">{b.t}</p>
                    <p className="text-[11px] text-zinc-500 leading-none mt-1">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* visual */}
            <div className="relative lg:h-[520px] flex items-center">
              <div className="relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&h=900&fit=crop&crop=center"
                  alt="Plantas hero"
                  className="w-full h-[380px] lg:h-[520px] object-cover rounded-[28px] shadow-soft-lg"
                />
                {/* floating card */}
                <div className="absolute -bottom-6 -left-2 sm:bottom-6 sm:-left-6 bg-white rounded-3xl shadow-soft-lg border border-stone-200 p-3 pr-6 flex gap-3 items-center animate-float max-w-[78%]">
                  <img src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&h=200&fit=crop" className="w-16 h-16 rounded-2xl object-cover" alt="" />
                  <div>
                    <p className="text-xs font-bold tracking-widest text-emerald-700">BEST SELLER</p>
                    <p className="font-display text-lg leading-none -mt-0.5">Monstera Deliciosa</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-amber-500 text-xs">★★★★★</span>
                      <span className="text-xs font-semibold">4.9</span>
                      <span className="text-xs text-zinc-400">(342)</span>
                    </div>
                    <p className="text-sm font-bold mt-0.5">34,99 € <span className="text-xs font-normal text-zinc-400 line-through">42,00 €</span></p>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-3 -right-3 bg-zinc-900 text-white rounded-full pl-3 pr-1 py-1 items-center gap-2 shadow-soft animate-float-delayed">
                  <span className="text-xs font-bold tracking-wide">PACK AHORRO -20%</span>
                  <span className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center text-sm">↗</span>
                </div>

                <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-soft border border-white">
                  <div className="text-center">
                    <p className="text-[11px] font-bold tracking-widest text-zinc-400">CUIDADOS</p>
                    <p className="text-sm font-bold text-emerald-700">Muy fácil</p>
                    <p className="text-xs text-zinc-500">Riego cada 10 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* trust strip */}
          <div className="relative border-t border-stone-100 bg-stone-50/70 px-6 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <p className="font-semibold tracking-widest text-zinc-500">COMO VISTO EN</p>
            <div className="flex items-center gap-6 sm:gap-8 font-display text-zinc-400 text-base sm:text-lg">
              <span>AD • Architectural Digest</span>
              <span className="hidden sm:inline">ELLE DECOR</span>
              <span>VOGUE Living</span>
              <span className="hidden lg:inline">Kinfolk</span>
            </div>
            <p className="hidden md:block text-zinc-500">↻ Entrega 48h península</p>
          </div>
        </div>
      </section>

      {/* Catalogo */}
      <section id="catalogo" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-emerald-700">CATÁLOGO CURADO</p>
              <h2 className="font-display text-4xl lg:text-5xl leading-none tracking-[-0.02em] mt-1">Encuentra tu <span className="italic font-normal">próxima</span> planta</h2>
              <p className="text-zinc-500 mt-2 max-w-[56ch]">Todas vienen con sustrato premium, guía de cuidados y maceta a juego. Selecciona por estancia, luz y dificultad.</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold bg-white border border-stone-200 rounded-full p-1">
                <span className="px-3 text-zinc-500">{productosFiltrados.length} resultados</span>
                <span className="w-px h-5 bg-stone-200" />
                <select value={orden} onChange={e => setOrden(e.target.value)} className="bg-transparent pr-8 pl-2 py-1.5 focus:outline-none cursor-pointer">
                  <option value="default">Destacados</option>
                  <option value="rating">Mejor valoradas</option>
                  <option value="precio-asc">Precio ↑</option>
                  <option value="precio-desc">Precio ↓</option>
                  <option value="nombre">Nombre A-Z</option>
                </select>
              </div>
              <select value={orden} onChange={e => setOrden(e.target.value)} className="sm:hidden bg-white border border-stone-200 rounded-full px-4 py-2.5 text-sm font-medium shadow-sm">
                <option value="default">Destacados</option>
                <option value="rating">Mejor valoradas</option>
                <option value="precio-asc">Precio ↑</option>
                <option value="precio-desc">Precio ↓</option>
                <option value="nombre">Nombre A-Z</option>
              </select>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex items-center gap-2 overflow-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-none">
            <div className="flex gap-2 p-1.5 bg-white border border-stone-200 rounded-full shadow-sm shrink-0">
              {categorias.map(c => {
                const active = filtro === c.id
                return (
                  <button
                    key={c.id}
                    onClick={() => setFiltro(c.id)}
                    className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${active ? 'bg-zinc-900 text-white shadow' : 'text-zinc-600 hover:bg-stone-50'}`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${active ? 'bg-white text-zinc-900' : 'bg-stone-100'}`}>{c.icon}</span>
                    {c.label}
                  </button>
                )
              })}
            </div>
            {(filtro !== 'Todas' || busqueda) && (
              <button onClick={() => { setFiltro('Todas'); setBusqueda('') }} className="shrink-0 text-sm font-semibold text-zinc-600 hover:text-zinc-900 px-3">Limpiar ✕</button>
            )}
          </div>

          {/* Grid */}
          {productosFiltrados.length === 0 ? (
            <div className="bg-white border border-dashed border-stone-300 rounded-[32px] p-12 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center mx-auto text-xl">⌕</div>
              <p className="font-display text-2xl mt-4">Sin resultados</p>
              <p className="text-sm text-zinc-500 mt-1">Prueba con otra búsqueda o categoría</p>
              <button onClick={() => { setBusqueda(''); setFiltro('Todas') }} className="mt-5 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-semibold">Limpiar filtros</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {productosFiltrados.map(p => (
                <article key={p.id} className="group relative bg-white rounded-[28px] border border-stone-200 overflow-hidden shadow-sm hover:shadow-soft-lg hover:border-stone-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-stone-50 aspect-[4/4.2]">
                    <img src={p.imagen} alt={p.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.06] transition duration-700 ease-out" />
                    {/* gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    {/* top pills */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/95 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">{p.categoria}</span>
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                      {p.tag && (
                        <span className={`text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm border ${p.tag === 'Más vendida' ? 'bg-amber-400 border-amber-500 text-zinc-900' : p.tag === 'Nuevo' ? 'bg-emerald-600 border-emerald-700 text-white' : 'bg-orange-500 border-orange-600 text-white'}`}>
                          {p.tag}
                        </span>
                      )}
                      <button
                        onClick={() => toggleFav(p.id)}
                        className={`w-9 h-9 rounded-full backdrop-blur flex items-center justify-center border shadow-sm transition ${favoritos.has(p.id) ? 'bg-rose-500 border-rose-600 text-white' : 'bg-white/90 border-white text-zinc-700 hover:bg-white'}`}
                        aria-label="Favorito"
                      >
                        {favoritos.has(p.id) ? '♥' : '♡'}
                      </button>
                    </div>

                    {/* cuidados badge */}
                    <div className="absolute bottom-3 left-3 bg-zinc-900/90 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> {p.cuidados}
                    </div>

                    {!p.stock && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2">
                        <span className="bg-zinc-900 text-white text-xs font-bold px-4 py-2 rounded-full">AGOTADO</span>
                        <span className="text-xs font-medium text-zinc-600">Avísame cuando vuelva</span>
                      </div>
                    )}

                    {/* quick add on hover desktop */}
                    <div className="hidden lg:flex absolute bottom-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                      <button
                        disabled={!p.stock}
                        onClick={() => agregarAlCarrito(p)}
                        className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-stone-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition flex items-center gap-1.5 disabled:opacity-50"
                      >
                        + Añadir
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-500 text-xs tracking-widest">★★★★★</span>
                      <span className="text-xs font-bold">{p.rating}</span>
                      <span className="text-xs text-zinc-400">({p.reviews})</span>
                    </div>
                    <h3 className="font-display text-[19px] leading-tight mt-1 line-clamp-1">{p.nombre}</h3>
                    <p className="text-sm text-zinc-500 mt-1 line-clamp-2 leading-relaxed flex-1">{p.descripcion}</p>

                    <div className="flex items-end justify-between mt-4 pt-4 border-t border-stone-100">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <p className="text-[22px] font-extrabold leading-none tracking-tight">{p.precio.toFixed(2)} €</p>
                          {p.precioOriginal && <p className="text-xs text-zinc-400 line-through">{p.precioOriginal.toFixed(2)} €</p>}
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">IVA incl. • Envío 48h</p>
                      </div>

                      <button
                        disabled={!p.stock}
                        onClick={() => agregarAlCarrito(p)}
                        className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold shadow-sm border transition active:scale-95 ${p.stock ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-black' : 'bg-stone-100 text-zinc-400 border-stone-200 cursor-not-allowed'}`}
                      >
                        +
                      </button>

                      <button
                        disabled={!p.stock}
                        onClick={() => agregarAlCarrito(p)}
                        className={`hidden lg:flex w-11 h-11 rounded-full items-center justify-center text-lg font-bold shadow-sm border transition active:scale-95 ${p.stock ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-black' : 'bg-stone-100 text-zinc-400 border-stone-200 cursor-not-allowed'}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Beneficios banda */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { k: '01', t: 'Garantía Verde 30 días', d: 'Si tu planta no prospera, te la reponemos sin preguntas. Con asesoría personalizada.', c: 'bg-emerald-50 border-emerald-200' },
            { k: '02', t: 'Packaging 100% vivo', d: 'Embalaje plástico cero, acolchado con fibra de coco y cartón reciclado.', c: 'bg-amber-50 border-amber-200' },
            { k: '03', t: 'Club VerdeVivo', d: 'Acceso a talleres mensuales, descuentos y nuestra comunidad de 20k plant lovers.', c: 'bg-stone-50 border-stone-200' },
          ].map(x => (
            <div key={x.k} className={`rounded-[28px] border p-6 ${x.c}`}>
              <p className="text-xs font-bold tracking-widest text-zinc-400">— {x.k}</p>
              <h4 className="font-display text-xl mt-2">{x.t}</h4>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carrito */}
      {carritoAbierto && (
        <div className="fixed inset-0 z-50 flex">
          <div onClick={() => setCarritoAbierto(false)} className="flex-1 bg-zinc-900/50 backdrop-blur-sm animate-fadeIn" />
          <div className="w-full max-w-[440px] bg-[#fdfcf8] h-full shadow-2xl flex flex-col animate-slideIn border-l border-stone-200">
            <div className="px-6 pt-6 pb-4 bg-white border-b border-stone-200">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">Tu cesta</h3>
                <button onClick={() => setCarritoAbierto(false)} className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 flex items-center justify-center transition">✕</button>
              </div>
              <p className="text-sm text-zinc-500 mt-1">{totalItems ? `${totalItems} plantas • Envío gratis` : 'Añade vida a tu hogar'}</p>
            </div>

            <div className="flex-1 overflow-auto">
              {carrito.length === 0 ? (
                <div className="text-center py-16 px-6">
                  <div className="w-20 h-20 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center mx-auto text-3xl">🪴</div>
                  <p className="font-display text-xl mt-4">Tu cesta está vacía</p>
                  <p className="text-sm text-zinc-500 mt-1 max-w-[28ch] mx-auto">Descubre plantas que transforman tu espacio y añádelas aquí.</p>
                  <button onClick={() => setCarritoAbierto(false)} className="mt-6 bg-zinc-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">Explorar catálogo</button>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {carrito.map(item => (
                    <div key={item.id} className="flex gap-4 p-3 pr-2 bg-white border border-stone-200 rounded-3xl shadow-sm">
                      <img src={item.imagen} alt={item.nombre} className="w-20 h-20 rounded-2xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-tight truncate">{item.nombre}</p>
                        <p className="text-xs text-zinc-500">{item.categoria} • {item.cuidados}</p>
                        <p className="font-extrabold mt-1">{item.precio.toFixed(2)} €</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-full p-1">
                            <button onClick={() => cambiarCantidad(item.id, -1)} className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-stone-300 transition">−</button>
                            <span className="text-sm font-bold w-7 text-center">{item.cantidad}</span>
                            <button onClick={() => cambiarCantidad(item.id, 1)} className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-stone-300 transition">+</button>
                          </div>
                          <button onClick={() => eliminarDelCarrito(item.id)} className="ml-auto text-xs font-semibold text-rose-600 hover:text-rose-700 px-2">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex gap-3 items-center text-sm">
                    <span className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center">🎁</span>
                    <p className="leading-tight"><span className="font-bold">¡Tienes envío gratis!</span><br /><span className="text-zinc-600 text-xs">Añade 15 € más y llévate sustrato premium de regalo</span></p>
                  </div>
                </div>
              )}
            </div>

            {carrito.length > 0 && (
              <div className="p-6 bg-white border-t border-stone-200 space-y-3">
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Subtotal</span><span className="font-semibold">{total.toFixed(2)} €</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Envío</span><span className="font-bold text-emerald-700">Gratis</span></div>
                  <div className="h-px bg-stone-200 my-1" />
                  <div className="flex justify-between text-lg font-extrabold"><span>Total</span><span>{total.toFixed(2)} €</span></div>
                </div>
                <button
                  onClick={() => { setToast(`Pedido confirmado · ${total.toFixed(2)} € 🌿`); setCarrito([]); setCarritoAbierto(false) }}
                  className="w-full bg-zinc-900 hover:bg-black text-white py-4 rounded-full font-bold text-[15px] shadow-soft transition flex items-center justify-center gap-2"
                >
                  Pagar ahora <span className="w-7 h-7 rounded-full bg-white text-zinc-900 flex items-center justify-center text-sm">→</span>
                </button>
                <div className="flex items-center justify-center gap-3 text-xs text-zinc-400">
                  <span>🔒 Pago seguro</span><span>•</span><span>↻ 30 días devolución</span><span>•</span><span>💳 Visa / PayPal</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 text-white px-5 py-3 rounded-full shadow-soft-lg flex items-center gap-3 text-sm font-medium animate-slideIn">
          <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">✓</span>
          {toast}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="grid lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-2xl bg-white text-zinc-900 flex items-center justify-center font-display text-xl">V</div>
                <div>
                  <p className="font-display text-xl leading-none">VerdeVivo</p>
                  <p className="text-[11px] tracking-[0.18em] font-semibold text-emerald-400">VIVERO BOUTIQUE • 2018</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 mt-4 max-w-[38ch]">Vivero boutique online. Curamos plantas con historia, sustrato vivo y diseño. Más de 60k pedidos cuidados a mano.</p>
              <div className="flex gap-2 mt-5">
                {['IG', 'TK', 'PT', 'YT'].map(s => (
                  <a key={s} href="#" className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold hover:bg-zinc-700 hover:text-white transition">{s}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white font-bold text-sm">Colecciones</p>
              <ul className="mt-3 space-y-2.5 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition">Interior statement</a></li>
                <li><a href="#" className="hover:text-white transition">Suculentas</a></li>
                <li><a href="#" className="hover:text-white transition">Exterior mediterráneo</a></li>
                <li><a href="#" className="hover:text-white transition">Purificadoras</a></li>
                <li><a href="#" className="hover:text-white transition">Raras & collector</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-bold text-sm">Ayuda</p>
              <ul className="mt-3 space-y-2.5 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition">Guía de cuidados</a></li>
                <li><a href="#" className="hover:text-white transition">Envíos 48h</a></li>
                <li><a href="#" className="hover:text-white transition">Devoluciones</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto & WhatsApp</a></li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-[24px] p-6 border border-zinc-700">
              <p className="text-white font-display text-xl leading-tight">10% en tu primera<br />planta 🌿</p>
              <p className="text-sm text-zinc-400 mt-2">Newsletter sin spam. Solo drops y cuidados.</p>
              <form onSubmit={e => { e.preventDefault(); setToast('¡Bienvenida al club! Revisa tu email ✉️'); e.target.reset() }} className="mt-4 flex gap-2">
                <input required type="email" placeholder="Tu email" className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-600" />
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 transition">→</button>
              </form>
              <p className="text-xs text-zinc-500 mt-2">✓ Sin spam • Cancela cuando quieras</p>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-500">
            <p>© 2026 VerdeVivo S.L. — Hecho con React + Vite + Tailwind CSS • Fotos Unsplash</p>
            <p className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> 1 planta vendida = 1 árbol reforestado • 23.412 árboles</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
