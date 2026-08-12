import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Differentiators from "@/components/Differentiators";
import Reveal from "@/components/Reveal";
import FadeIn from "@/components/FadeIn";
import IncidentsChart from "@/components/IncidentsChart";
import { trainingOfferings } from "@/lib/trainingOfferings";
import { HeartPulseIcon, ClipboardCheckIcon, BandageIcon } from "@/components/icons";

const HIGHLIGHTS = [
  { icon: HeartPulseIcon, ...trainingOfferings.find((t) => t.slug === "cpr-aed")! },
  { icon: ClipboardCheckIcon, ...trainingOfferings.find((t) => t.slug === "church-safety-assessment")! },
  { icon: BandageIcon, ...trainingOfferings.find((t) => t.slug === "stop-the-bleed")! },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100dvh-65px)] flex-col overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(192,39,45,0.28) 0%, rgba(192,39,45,0) 70%), radial-gradient(40% 40% at 85% 20%, rgba(22,74,114,0.5) 0%, rgba(22,74,114,0) 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Because Every Second Counts
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Safe Churches,
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Strong Ministries</span>
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p
              className="mx-auto mt-6 whitespace-nowrap text-navy-100/80"
              style={{ fontSize: "clamp(0.7rem, 3.6vw, 1.125rem)" }}
            >
              Practical training for real church safety.
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/safety-check"
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-xl hover:shadow-red-950/50"
              >
                Check Your Risk Level
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/training"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Training
              </Link>
            </div>
          </FadeIn>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-navy-100/50 sm:block">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Why Peacemaker</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Built from experience, made for churches.
          </h2>
          <p className="mt-4 text-navy-800/75">
            Because we&apos;ve grown up and served in churches, we understand the unique
            challenges they face in keeping their people safe. From CPR/AED and First Aid to
            full safety team development, our training is practical, budget-friendly, and
            tailored for real church life and ministry contexts.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 100}>
              <Link
                href={`/training#${item.slug}`}
                className="group block h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-red-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 text-center">
          <Link
            href="/training"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-white"
          >
            See All Training →
          </Link>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(50% 80% at 50% 50%, rgba(192,39,45,0.22) 0%, rgba(192,39,45,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-red-500">The data</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Attacks on churches are rising
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <IncidentsChart />
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-xl text-navy-100/75">
              Incidents are still more than 8x higher than 2018 — a simple assessment today
              could prevent a crisis tomorrow.
            </p>
            <Link
              href="/safety-check"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition-all hover:-translate-y-0.5 hover:bg-red-500"
            >
              Check Your Risk Level →
            </Link>
          </Reveal>
        </div>
      </section>

      <Differentiators />

      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Get in touch</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Start building a safer church today!
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-10">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
