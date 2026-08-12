"use client";

import { FormEvent, useState } from "react";
import {
  SAFETY_CHECK_MAX_SCORE,
  getSafetyCheckTier,
  safetyCheckQuestions,
} from "@/lib/safetyCheckQuestions";

type Status = "idle" | "submitting" | "success" | "error";

export default function SafetyCheckForm() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ score: number } | null>(null);

  const answeredCount = safetyCheckQuestions.filter((q) => answers[q.id] !== undefined).length;
  const allAnswered = answeredCount === safetyCheckQuestions.length;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!allAnswered) {
      setError("Please answer every question before submitting.");
      return;
    }

    const form = e.currentTarget;
    const contact = Object.fromEntries(new FormData(form).entries());
    const score = safetyCheckQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/safety-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          score,
          maxScore: SAFETY_CHECK_MAX_SCORE,
          answers: safetyCheckQuestions.map((q) => ({
            question: q.text,
            answer: q.options.find((o) => o.score === answers[q.id])?.label ?? "",
          })),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setResult({ score });
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong submitting your results. Please try again.");
    }
  }

  if (status === "success" && result) {
    const tier = getSafetyCheckTier(result.score);
    return (
      <div className="rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Your Safety Check Result
        </p>
        <p className="mt-3 text-5xl font-bold text-navy-900">
          {result.score}
          <span className="text-2xl text-navy-800/50">/{SAFETY_CHECK_MAX_SCORE}</span>
        </p>
        <p className="mt-2 text-xl font-semibold text-navy-900">{tier.label}</p>
        <p className="mx-auto mt-4 max-w-xl text-navy-800/80">{tier.summary}</p>
        <p className="mt-6 text-sm text-navy-800/70">
          We&apos;ll follow up by email to talk through next steps for your church.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="sticky top-[65px] z-10 -mx-6 bg-[var(--background)]/90 px-6 py-3 backdrop-blur">
        <div className="flex items-center justify-between text-xs font-semibold text-navy-800/70">
          <span>
            {answeredCount} of {safetyCheckQuestions.length} answered
          </span>
          <span>{Math.round((answeredCount / safetyCheckQuestions.length) * 100)}%</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-red-600 transition-all duration-300"
            style={{ width: `${(answeredCount / safetyCheckQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {safetyCheckQuestions.map((q, idx) => (
          <div
            key={q.id}
            role="group"
            aria-labelledby={`${q.id}-label`}
            className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-colors hover:border-navy-200 sm:p-7"
          >
            <div id={`${q.id}-label`} className="mb-4 flex gap-3 text-sm font-semibold text-navy-900">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs text-white">
                {idx + 1}
              </span>
              <span className="pt-0.5">{q.text}</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {q.options.map((opt) => (
                <label
                  key={opt.label}
                  className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-navy-100 px-3.5 py-3 text-sm text-navy-800 transition-colors has-[:checked]:border-red-600 has-[:checked]:bg-red-50 has-[:checked]:font-medium has-[:checked]:text-red-700 hover:border-navy-300"
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.score}
                    required
                    checked={answers[q.id] === opt.score}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                    className="h-4 w-4 shrink-0 accent-red-600"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-navy-900">Where should we send your results?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Name" name="name" required />
          <TextField label="Email" name="email" type="email" required />
          <TextField label="Church Name" name="churchName" />
          <TextField label="City" name="city" />
          <TextField label="State" name="state" />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Scoring…" : "Submit"}
        </button>
      </div>
    </form>
  );
}

function TextField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-navy-900">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-navy-100 bg-navy-50/40 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-700 focus:ring-1 focus:ring-navy-700"
      />
    </div>
  );
}
