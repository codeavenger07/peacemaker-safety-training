"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/safety-check", label: "Safety Check" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Peacemaker Safety Training" width={40} height={40} priority />
          <span className="text-lg font-semibold tracking-tight text-white">
            Peacemaker Safety Training
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  active ? "text-red-400" : "text-navy-100/85 hover:text-red-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/safety-check"
            className="rounded-full bg-red-600 px-5 py-2 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
          >
            Check Your Risk Level
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-x-0 top-full z-40 h-[100dvh] bg-navy-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`absolute inset-x-0 top-full z-50 flex origin-top flex-col gap-1 border-t border-white/10 bg-navy-950 px-6 py-4 shadow-lg transition-all duration-200 lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-2 py-2.5 text-sm font-medium text-navy-100/85 hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/safety-check"
          className="mt-2 rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
        >
          Check Your Risk Level
        </Link>
      </nav>
    </header>
  );
}
