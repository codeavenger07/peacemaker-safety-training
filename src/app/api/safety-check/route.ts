import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/submitLead";
import { SAFETY_CHECK_MAX_SCORE, getSafetyCheckTier } from "@/lib/safetyCheckQuestions";

type AnswerPayload = { question: string; answer: string };

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.score !== "number" ||
    !Array.isArray(body.answers)
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!body.name.trim() || !body.email.trim()) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }
  if (body.score < 0 || body.score > SAFETY_CHECK_MAX_SCORE) {
    return NextResponse.json({ error: "Invalid score" }, { status: 400 });
  }

  const tier = getSafetyCheckTier(body.score);
  const answers: AnswerPayload[] = body.answers;

  try {
    await submitLead({
      source: "Safety Check",
      fields: [
        { label: "Name", value: String(body.name ?? "") },
        { label: "Email", value: String(body.email ?? "") },
        { label: "Church Name", value: String(body.churchName ?? "") },
        { label: "City", value: String(body.city ?? "") },
        { label: "State", value: String(body.state ?? "") },
        { label: "Score", value: `${body.score}/${SAFETY_CHECK_MAX_SCORE}` },
        { label: "Result", value: tier.label },
        ...answers.map((a, i) => ({ label: `Q${i + 1}. ${a.question}`, value: a.answer })),
      ],
    });
    return NextResponse.json({ ok: true, tier: tier.label });
  } catch (err) {
    console.error("[/api/safety-check]", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
