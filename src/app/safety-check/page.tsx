import type { Metadata } from "next";
import SafetyCheckForm from "@/components/SafetyCheckForm";

export const metadata: Metadata = {
  title: "Safety Check | Peacemaker Safety Training",
  description:
    "A short 5-minute safety check to see how ready your church really is to respond to medical emergencies, security threats, and other unexpected events.",
};

export default function SafetyCheckPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">5-minute assessment</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">Safety Check</h1>
        <p className="mx-auto mt-4 max-w-xl text-navy-800/80">
          Every church wants to be a safe place to worship, serve, and grow, but real
          preparedness takes more than good intentions. This short 5-minute safety check helps
          you see how ready your church really is to respond to medical emergencies, security
          threats, and other unexpected events. Answer honestly to discover where your
          strengths lie and where additional training or planning could make a lasting
          difference.
        </p>
      </div>

      <div className="mt-12">
        <SafetyCheckForm />
      </div>
    </section>
  );
}
