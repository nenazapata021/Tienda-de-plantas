export default function Footer() {
    return(
        <footer className="border-t border-stone-200 bg-stone-50 py-8">
            <div className="mx-auto max-w-6xl px-6 text-stone-500">
                <p>© {new Date().getFullYear()} VerdeVivo. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}