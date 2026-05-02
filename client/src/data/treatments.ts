export type Treatment = {
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageUrl: string;
};

export const signatureTreatments: Treatment[] = [
  {
    name: "Abhyanga",
    subtitle: "Full-Body Oil Massage",
    description:
      "Warm herbal oils, chosen according to your Dosha, are applied in synchronized strokes by two therapists. Abhyanga improves circulation, nourishes muscles and skin, lubricates joints, and releases toxins. Beyond the physical, it calms the mind and restores inner balance — leaving you refreshed and energized.",
    benefits: ["Blood Circulation", "Detox", "Joint Health", "Stress Relief"],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
  },
  {
    name: "Shirodhara",
    subtitle: "The Flow of Serenity",
    description:
      "A continuous stream of warm medicated oil is gently poured over the forehead, targeting the 'third eye' region. Shirodhara induces profound relaxation, improves sleep, reduces anxiety and mental fatigue, and is powerfully effective for migraines and hormonal imbalances. Many describe it as a deeply spiritual experience.",
    benefits: ["Insomnia", "Migraines", "Anxiety", "Hormonal Balance"],
    imageUrl: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200",
  },
  {
    name: "Panchakarma",
    subtitle: "The Complete Detox",
    description:
      "Panchakarma is Ayurveda's most powerful detoxification and rejuvenation program. A series of five classical cleansing therapies — Vamana, Virechana, Basti, Nasya, and Raktamokshana — work together to eliminate deep-rooted toxins, restore dosha balance, and rejuvenate body and mind. Every program is tailored individually and supervised by our physicians.",
    benefits: ["Deep Detox", "Immunity", "Anti-Ageing", "Chronic Illness"],
    imageUrl: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=1200",
  },
  {
    name: "Pinda Sweda",
    subtitle: "Herbal Bolus Therapy",
    description:
      "Warm cloth bundles filled with medicinal herbs, rice, or sand are gently applied after oil massage. The penetrating heat and herbs improve deep circulation, reduce joint stiffness, and relieve muscular inflammation — ideal for arthritis, rheumatism, and post-injury recovery.",
    benefits: ["Arthritis", "Joint Pain", "Muscle Stiffness", "Swelling"],
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200",
  },
  {
    name: "Nasya",
    subtitle: "Nasal Cleansing",
    description:
      "Medicated oils or herbal juices are instilled into the nostrils after a gentle facial massage and steam therapy. Nasya clears the head region of toxins, purifies the sinuses, and balances the nervous system — highly effective for sinusitis, migraines, insomnia, and memory enhancement.",
    benefits: ["Sinusitis", "Migraines", "Insomnia", "Mental Clarity"],
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200",
  },
  {
    name: "Udvarthana",
    subtitle: "Herbal Powder Massage",
    description:
      "A vigorous massage with aromatic herbal powders, often blended with warm oils, that stimulates circulation and breaks down fat deposits. Udvarthana tones the skin, improves metabolism, and leaves the body feeling light and energized.",
    benefits: ["Weight Management", "Metabolism", "Circulation", "Skin Tone"],
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200",
  },
];

export const teaserTreatments = [
  { name: "Abhyanga",   desc: "Synchronized warm oil massage for deep restoration." },
  { name: "Shirodhara", desc: "Streaming oil on the forehead for serenity." },
  { name: "Panchakarma",desc: "The classical five-fold detoxification program." },
  { name: "Nasya",      desc: "Nasal therapy for clarity and sinus health." },
  { name: "Pinda Sweda",desc: "Herbal bolus warmth for joints and muscles." },
  { name: "Udvarthana", desc: "Aromatic powder massage to tone and energize." },
];

export const additionalTreatments = [
  { name: "Shiro Abhyanga", desc: "Calming head and scalp massage." },
  { name: "Swedana",        desc: "Herbal steam therapy to release toxins." },
  { name: "Thalapothichil", desc: "Cooling herbal paste for the head." },
  { name: "Rakta Mokshana", desc: "Classical blood purification therapy." },
  { name: "Herbal Medicine",desc: "Personalized classical formulations." },
  { name: "Yoga & Pranayama", desc: "Daily breath and movement practice." },
];
