export default function Card({ cartCount, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="A developer working on a laptop"
        />
        <span className="absolute left-5 top-5 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">Featured</span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">Workspace essential</span>
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">4.8 / 5</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">The focused desk kit</h3>
        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300">A considered setup for long coding sessions, thoughtful breaks, and shipping good work.</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6 dark:border-slate-800">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Starting at</p>
            <p className="mt-1 text-3xl font-black text-slate-900 dark:text-white">$599</p>
          </div>
          <button type="button" onClick={onAddToCart} className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400">
            {cartCount > 0 ? `Added (${cartCount})` : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
