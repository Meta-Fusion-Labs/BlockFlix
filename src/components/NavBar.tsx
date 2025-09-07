import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/series", label: "Series" },
  { href: "/my-list", label: "My List" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--panel)]/90 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <span className="text-[var(--accent)]">Block</span>Flix
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--accent)]">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <input
            placeholder="Search…"
            className="hidden sm:block bg-[#0b0e12] border border-white/10 rounded px-3 py-1.5 text-sm"
          />
          <button className="bg-[var(--accent)]/90 hover:bg-[var(--accent)] text-white text-sm px-3 py-1.5 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
