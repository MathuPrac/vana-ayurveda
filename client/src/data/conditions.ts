// conditions.ts
export type Condition = { icon: string; name: string; desc: string };

export const conditions: Condition[] = [
  { icon: "🧠", name: "Stress & Anxiety",         desc: "Calming therapies to restore emotional equilibrium" },
  { icon: "🌿", name: "Digestive Disorders",       desc: "Gastritis, acidity, IBS, constipation" },
  { icon: "🦴", name: "Joint & Musculoskeletal",   desc: "Arthritis, rheumatism, back pain" },
  { icon: "🌸", name: "Skin Conditions",           desc: "Psoriasis, eczema, acne, dermatitis" },
  { icon: "💨", name: "Respiratory Issues",        desc: "Asthma, sinusitis, chronic allergies" },
  { icon: "🧬", name: "Neurological Support",      desc: "Migraines, insomnia, nerve imbalances" },
  { icon: "⚖️", name: "Metabolic Conditions",      desc: "Obesity, diabetes, high cholesterol" },
  { icon: "🌺", name: "Women's Wellness",          desc: "Hormonal balance, menstrual health, menopause" },
  { icon: "✨", name: "Rejuvenation & Anti-Ageing",desc: "Immunity boosting, longevity" },
];
