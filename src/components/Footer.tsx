import Image from "next/image";
import Link from "next/link";
import { trainingOfferings } from "@/lib/trainingOfferings";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-navy-100 bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Peacemaker Safety Training" width={36} height={36} />
            <p className="font-semibold text-white">Peacemaker Safety Training</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-100/60">
            Equipping churches with the knowledge, confidence, and hands-on skills to respond
            boldly and effectively in times of crisis.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-100/50">Training</p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm">
            {trainingOfferings.map((offering) => (
              <Link key={offering.slug} href="/training" className="text-navy-100/75 hover:text-white">
                {offering.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-100/50">Company</p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm">
            <Link href="/" className="text-navy-100/75 hover:text-white">Home</Link>
            <Link href="/about" className="text-navy-100/75 hover:text-white">About</Link>
            <Link href="/training" className="text-navy-100/75 hover:text-white">Training</Link>
            <Link href="/safety-check" className="text-navy-100/75 hover:text-white">Safety Check</Link>
          </nav>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-white">Ready to get started?</p>
          <p className="mt-1.5 text-sm text-navy-100/65">
            Take the 5-minute Safety Check and see where your church stands.
          </p>
          <Link
            href="/safety-check"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-red-500"
          >
            Check Your Risk Level →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 pt-5 pb-24 text-center text-xs text-navy-100/50 lg:pb-5">
        © {new Date().getFullYear()} Peacemaker Safety Training. All rights reserved.
      </div>
    </footer>
  );
}
