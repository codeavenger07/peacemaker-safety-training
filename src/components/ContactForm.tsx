"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong sending your message. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center">
        <p className="text-lg font-semibold text-navy-900">Thanks — your message is on its way!</p>
        <p className="mt-2 text-sm text-navy-800/80">
          We&apos;ll be in touch soon about building a safer church.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Church name" name="churchName" />
        <Field label="City" name="city" />
        <Field label="State" name="state" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy-900">
          Additional information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-navy-100 bg-navy-50/40 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-700 focus:ring-1 focus:ring-navy-700"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}

function Field({
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
