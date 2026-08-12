import Reveal from "@/components/Reveal";

const POINTS = [
  {
    title: "Built by someone who's lived it",
    description:
      "Not an outside vendor reading from a slide deck — an EMT and lifelong church member who understands how your church actually operates on a Sunday morning.",
  },
  {
    title: "Practical over theoretical",
    description:
      "Hands-on skills your team can actually use under pressure — direct pressure, CPR, AED use — not just a certificate to file away.",
  },
  {
    title: "Right-sized for your church",
    description:
      "Budget-friendly training built for real church life, not a bloated enterprise safety program you'll never fully use.",
  },
];

export default function Differentiators() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">The difference</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Why churches choose Peacemaker
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {POINTS.map((point, idx) => (
          <Reveal key={point.title} delay={idx * 100}>
            <span className="text-5xl font-bold text-navy-100 sm:text-6xl">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-navy-900">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{point.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
