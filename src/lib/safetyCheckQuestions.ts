export type SafetyCheckOption = {
  label: string;
  /** 2 = best practice, 1 = partial, 0 = gap */
  score: 0 | 1 | 2;
};

export type SafetyCheckQuestion = {
  id: string;
  text: string;
  options: [SafetyCheckOption, SafetyCheckOption, SafetyCheckOption];
};

export const safetyCheckQuestions: SafetyCheckQuestion[] = [
  {
    id: "safety-team",
    text: "Does your church have a designated Safety Team responsible for responding to an emergency?",
    options: [
      { label: "Yes, active and organized", score: 2 },
      { label: "Yes, but limited activity", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "cpr-equipment",
    text: "Does your church have CPR/AED/First Aid trained individuals and accessible equipment (AED, first aid kits, trauma kits)?",
    options: [
      { label: "Yes, both training and equipment", score: 2 },
      { label: "Some, but not complete", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "exits-evacuation",
    text: "Does your church have clearly marked exits, accessible fire extinguishers, and evacuation plans in place?",
    options: [
      { label: "Yes, fully maintained and ready", score: 2 },
      { label: "Some, but not complete", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "severe-weather",
    text: "Does your church have a plan for communication and response to severe weather (tornado, flood, snow, etc.) before or during services?",
    options: [
      { label: "Yes, documented and communicated", score: 2 },
      { label: "Some, but not complete", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "background-checks",
    text: "Does your church have written policies and background checks for staff and volunteers working with children?",
    options: [
      { label: "Yes, enforced and documented", score: 2 },
      { label: "Informal or partial practices", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "drills-training",
    text: "Does your church conduct safety or emergency drills and provide ongoing training for the Safety Team?",
    options: [
      { label: "Yes, at least annually", score: 2 },
      { label: "Occasionally", score: 1 },
      { label: "Never", score: 0 },
    ],
  },
  {
    id: "doors-entrances",
    text: "Are your church's doors, entrances, and parking areas maintained and secured during services?",
    options: [
      { label: "Yes, consistently monitored", score: 2 },
      { label: "Somewhat", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "active-threat-plan",
    text: "Does your church have a documented emergency plan for responding to an active threat (invader or violence)?",
    options: [
      { label: "Yes, written and practiced", score: 2 },
      { label: "Somewhat, but incomplete", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "written-sops",
    text: "Does your church have written standard operating procedures for emergencies (beyond just verbal “what ifs”)?",
    options: [
      { label: "Yes, updated and accessible", score: 2 },
      { label: "Outdated or incomplete", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "sunday-confidence",
    text: "If an emergency occurred during your next Sunday service, how confident are you that your church would respond effectively?",
    options: [
      { label: "Very confident", score: 2 },
      { label: "Somewhat confident", score: 1 },
      { label: "Not confident", score: 0 },
    ],
  },
  {
    id: "child-emergency",
    text: "If a child became seriously injured or went missing during church, does your church know the first step to take?",
    options: [
      { label: "Yes, clear process in place", score: 2 },
      { label: "Some understanding, not formalized", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "cpr-trained-count",
    text: "How many people in your congregation are both CPR trained and consistently present on Sundays?",
    options: [
      { label: "Several (4 or more)", score: 2 },
      { label: "A few (1–3)", score: 1 },
      { label: "None / I don't know", score: 0 },
    ],
  },
  {
    id: "pastor-emergency",
    text: "If your pastor suddenly had a medical emergency in the pulpit, who would take charge of the congregation?",
    options: [
      { label: "A designated leader or Safety Team member", score: 2 },
      { label: "Someone would step in informally", score: 1 },
      { label: "No one is identified", score: 0 },
    ],
  },
  {
    id: "congregation-communicated",
    text: "Has your church ever told the congregation what to do in case of a fire, medical emergency, or active threat?",
    options: [
      { label: "Yes, clearly communicated or drilled", score: 2 },
      { label: "Mentioned informally", score: 1 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: "leadership-priority",
    text: "If you asked your church leadership to approve safety training next month, what would they say?",
    options: [
      { label: "Absolutely, it's a priority", score: 2 },
      { label: "Maybe, depending on time/budget", score: 1 },
      { label: "Unlikely / not a priority", score: 0 },
    ],
  },
];

export const SAFETY_CHECK_MAX_SCORE = safetyCheckQuestions.length * 2;

export type SafetyCheckTier = {
  label: string;
  summary: string;
};

export function getSafetyCheckTier(score: number): SafetyCheckTier {
  const pct = score / SAFETY_CHECK_MAX_SCORE;
  if (pct >= 0.75) {
    return {
      label: "Strong Foundation",
      summary:
        "Your church has real safety infrastructure in place. Regular drills and refresher training will help you stay sharp.",
    };
  }
  if (pct >= 0.4) {
    return {
      label: "Developing Readiness",
      summary:
        "You have some pieces in place, but there are clear gaps. A Church Safety Assessment can help you turn good intentions into a documented plan.",
    };
  }
  return {
    label: "Needs Immediate Attention",
    summary:
      "Your church currently has little formal emergency preparedness. Starting with a Safety Team and basic training would make the biggest difference.",
  };
}
