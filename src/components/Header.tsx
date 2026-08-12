"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, UserIcon, ShieldCheckIcon, ClipboardCheckIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/safety-check", label: "Safety Check" },
];

const MOBILE_NAV_ITEMS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/training", label: "Training", icon: ShieldCheckIcon },
  { href: "/safety-check", label: "Safety Check", icon: ClipboardCheckIcon, highlight: true },
];

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileFloatingNav />
    </>
  );
}

function DesktopHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 hidden border-b border-white/10 bg-navy-950/95 backdrop-blur lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Peacemaker Safety Training" width={40} height={40} priority />
          <span className="text-lg font-semibold tracking-tight text-white">
            Peacemaker Safety Training
          </span>
        </Link>

        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
}

function MobileFloatingNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 lg:hidden"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-label="Primary"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-navy-950/95 p-1.5 shadow-xl shadow-black/40 backdrop-blur-md">
        {MOBILE_NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-[60px] flex-col items-center gap-0.5 rounded-full px-3 py-2 transition-colors ${
                item.highlight
                  ? "bg-red-600 text-white"
                  : active
                    ? "text-red-400"
                    : "text-navy-100/75 active:bg-white/10"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
