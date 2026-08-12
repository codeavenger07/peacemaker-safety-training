import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { trainingOfferings } from "@/lib/trainingOfferings";
import { trainingIcons, ShieldCheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Training | Peacemaker Safety Training",
  description:
    "Church Safety Assessment, Stop the Bleed, CPR/AED, First Aid, and Friends & Family CPR/AED training for churches.",
};

export default function TrainingPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">What we offer</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">Training</h1>
        <p className="mt-3 text-navy-800/75">
          Please use the contact form below for pricing inquiries.
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {trainingOfferings.map((offering, idx) => {
          const Icon = trainingIcons[offering.slug] ?? ShieldCheckIcon;
          return (
            <Reveal key={offering.slug} delay={(idx % 2) * 100}>
              <div
                id={offering.slug}
                className="scroll-mt-28 rounded-2xl border border-navy-100 bg-white p-7 shadow-sm sm:p-9"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-navy-900">{offering.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{offering.description}</p>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-red-600">
                      Best for: <span className="font-normal normal-case text-navy-800/70">{offering.audience}</span>
                    </p>

                    <ul className="mt-4 space-y-2">
                      {offering.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-navy-800/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
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
