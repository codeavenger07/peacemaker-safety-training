import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/submitLead";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.firstName !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!body.firstName.trim() || !body.email.trim()) {
    return NextResponse.json({ error: "First name and email are required" }, { status: 400 });
  }

  try {
    await submitLead({
      source: "Contact",
      fields: [
        { label: "First name", value: String(body.firstName ?? "") },
        { label: "Last name", value: String(body.lastName ?? "") },
        { label: "Address", value: String(body.address ?? "") },
        { label: "Email", value: String(body.email ?? "") },
        { label: "Phone", value: String(body.phone ?? "") },
        { label: "Additional information", value: String(body.message ?? "") },
      ],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
