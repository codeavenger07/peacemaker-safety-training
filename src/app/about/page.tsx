import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Peacemaker Safety Training",
  description:
    "EMT, AHA CPR Instructor, Stop the Bleed Instructor, and NRA Firearms Instructor bringing real-world experience to church safety training.",
};

const CREDENTIALS = ["EMT", "AHA CPR Instructor", "Stop the Bleed Instructor", "NRA Firearms Instructor"];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Who I am</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">About Me</h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {CREDENTIALS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-navy-100 bg-navy-50 px-3.5 py-1.5 text-xs font-semibold text-navy-800"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-8 space-y-5 text-navy-800/90">
        <p>
          At Peacemaker Safety Training, my mission is simple: to equip churches with the
          skills they need to protect their people in an emergency. As an EMT, AHA CPR
          Instructor, Stop the Bleed Instructor, and NRA Firearms Instructor, I bring
          real-world experience and practical training to those who need it most.
        </p>
        <p>
          I&apos;ve served as a volunteer with my local fire and rescue agency, responding to
          emergencies and seeing firsthand how critical immediate action can be. That&apos;s
          why I&apos;m passionate about delivering high-quality, hands-on training that
          prepares individuals to react with confidence when seconds matter.
        </p>
        <p>
          I&apos;ve been involved in churches my entire life, not just as a member but also
          serving within my church. This experience has given me a deep understanding of the
          unique challenges churches face when prioritizing safety. I recognize the need for
          affordable, effective training that aligns with a church&apos;s mission while
          ensuring teams are prepared to handle emergencies with confidence and care.
        </p>
        <p>
          Whether you&apos;re a business, church, or individual, my goal is to provide
          practical, life-saving skills in CPR, AED use, bleeding control, and emergency
          response. Because when an emergency happens, training makes the difference.
        </p>
        <p className="font-semibold text-navy-900">Let&apos;s prepare together.</p>
      </Reveal>

      <Reveal className="mt-20 text-center">
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
