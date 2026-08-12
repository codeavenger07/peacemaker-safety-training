export type TrainingOffering = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  details: string[];
};

export const trainingOfferings: TrainingOffering[] = [
  {
    slug: "church-safety-assessment",
    title: "Church Safety Assessment",
    description:
      "Our Church Safety Assessment helps your leadership identify strengths and address gaps in preparedness. Together, we create a practical plan so your church can respond wisely and confidently in times of emergency.",
    audience: "Church leadership and safety team leads",
    details: [
      "An on-site walkthrough of your building, entrances, and gathering spaces to spot gaps before they become problems.",
      "A conversation with leadership about current plans, equipment, and who's responsible for what during an emergency.",
      "A written, practical plan your church can actually implement, not a generic checklist.",
      "Recommendations for which training your team needs most, in what order.",
    ],
  },
  {
    slug: "stop-the-bleed",
    title: "Stop the Bleed",
    description:
      "The Stop the Bleed course prepares your church to act quickly in severe bleeding emergencies. Participants learn practical skills such as direct pressure, wound packing, and tourniquet use to save lives until professional help arrives.",
    audience: "Safety teams and anyone who wants to be ready to act",
    details: [
      "Hands-on practice applying direct pressure, packing a wound, and using a tourniquet correctly.",
      "How to recognize life-threatening bleeding and act in the first critical minutes before EMS arrives.",
      "Guidance on what to keep in a trauma kit and where to stage it in your building.",
      "Based on the national Stop the Bleed framework, taught in a hands-on group session.",
    ],
  },
  {
    slug: "cpr-aed",
    title: "CPR/AED",
    description:
      "The Heartsaver CPR/AED course equips church members and safety teams with the skills to respond confidently in emergencies, using CPR and an AED to help save lives and keep your congregation safe.",
    audience: "Safety teams, staff, and volunteers",
    details: [
      "Hands-on CPR practice for adults, children, and infants.",
      "How to operate an AED confidently under pressure.",
      "Recognizing cardiac emergencies and responding in the first critical moments.",
      "Based on the American Heart Association Heartsaver curriculum.",
    ],
  },
  {
    slug: "first-aid",
    title: "First Aid",
    description:
      "The Heartsaver First Aid course equips your church family with the skills to recognize common emergencies, call for help quickly, and provide lifesaving care when it matters most.",
    audience: "Anyone who wants practical, everyday first aid skills",
    details: [
      "How to recognize and respond to common injuries and medical emergencies.",
      "When and how to call for help and what to do while you wait.",
      "Basic wound care, splinting, and handling medical emergencies like fainting or seizures.",
      "Based on the American Heart Association Heartsaver curriculum.",
    ],
  },
  {
    slug: "friends-and-family-cpr-aed",
    title: "Friends and Family CPR/AED",
    description:
      "The Family & Friends CPR course offers a simple, hands-on way for individuals, families, and church groups to learn lifesaving skills. While it does not provide certification, it builds confidence to respond in an emergency and care for the people God has placed in your life.",
    audience: "Families, small groups, and anyone without a certification requirement",
    details: [
      "A relaxed, non-certification introduction to CPR and AED basics — great for small groups and families.",
      "Practice on training manikins in a low-pressure group setting.",
      "No prerequisite knowledge needed as it's built for people who've never taken a CPR class before.",
      "A great starting point before committing to a certified course.",
    ],
  },
];
