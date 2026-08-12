import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  HeartPulseIcon,
  AwardIcon,
  BandageIcon,
  TargetIcon,
  FlameIcon,
  ChurchIcon,
  ClipboardCheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Peacemaker Safety Training",
  description:
    "Joshua Pitts, founder of Peacemaker Safety Training — a Nationally Registered EMT, AHA CPR Instructor, and Stop the Bleed Instructor bringing real-world emergency response experience to church safety training.",
};

const CREDENTIALS = [
  { label: "Nationally Registered EMT", icon: HeartPulseIcon },
  { label: "American Heart Association CPR Instructor", icon: AwardIcon },
  { label: "Stop the Bleed Instructor", icon: BandageIcon },
  { label: "NRA Instructor", icon: TargetIcon },
  { label: "Fire & EMS Experience", icon: FlameIcon },
  { label: "Church Safety & Ministry Experience", icon: ChurchIcon },
];

const EXPERIENCE_AREAS = [
  {
    title: "Emergency Response",
    icon: HeartPulseIcon,
    description:
      "Hands-on experience assessing patients, managing emergencies, and working as part of an emergency-response team.",
  },
  {
    title: "Training & Instruction",
    icon: ClipboardCheckIcon,
    description:
      "Experience teaching CPR/AED, bleeding control, emergency response, and practical hands-on skills.",
  },
  {
    title: "Church Ministry",
    icon: ChurchIcon,
    description:
      "Years of serving in the local church and understanding the realities of volunteer teams, limited budgets, children's ministries, worship services, and church leadership.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      {/*
        Founder intro is a single text column for now. When a founder photo is
        ready, this can become a two-column layout (e.g. grid-cols-[280px_1fr])
        with the photo alongside this block — no other restructuring needed.
      */}
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Meet the founder</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Joshua Pitts
        </h1>
        <p className="mt-1.5 text-lg font-medium text-navy-800/60">
          Founder, Peacemaker Safety Training
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-800/80">
          I started Peacemaker Safety Training to help churches prepare for emergencies in a
          way that is practical, realistic, and sustainable. My background combines emergency
          medical response, hands-on instruction, and years of serving inside the local
          church so the training is built around how churches actually operate, not around a
          generic corporate safety model.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
          {CREDENTIALS.map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                <c.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium leading-tight text-navy-800">{c.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} className="mt-20 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          Why I Started Peacemaker
        </h2>
        <p className="mt-4 text-navy-800/80">
          Most churches don&apos;t need a complicated security program. They need people who
          know how to recognize problems, communicate clearly, provide immediate care, and
          respond well when something goes wrong.
        </p>
        <p className="mt-4 text-lg font-semibold text-navy-900">
          Peacemaker exists to help churches build that kind of preparedness—one practical
          step at a time.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {EXPERIENCE_AREAS.map((area, idx) => (
          <Reveal key={area.title} delay={idx * 100}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
              <area.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-navy-900">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{area.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Get in touch</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900">
          Start building a safer church today!
        </h2>
      </Reveal>
      <Reveal delay={150} className="mt-10">
        <ContactForm />
      </Reveal>
    </section>
  );
}
