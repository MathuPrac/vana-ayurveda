import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Nasya", "Udvarthana", "Herbal Therapies"];
const quickLinks = [
  { to: "/",          label: "Home" },
  { to: "/ayurveda",  label: "Ayurveda" },
  { to: "/about",     label: "About" },
  { to: "/gallery",   label: "Gallery" },
  { to: "/contact",   label: "Contact" },
] as const;

function TikTok({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 7.2a5.6 5.6 0 0 1-3.4-1.2v8.5a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 1.9 2.7V2h2.8a5.6 5.6 0 0 0 3.5 5.2v0Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-bark text-ivory border-t border-gold/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-ivory/70 text-sm leading-relaxed max-w-xs">
            Where ancient wisdom meets modern serenity.
          </p>
          <div className="mt-6 flex gap-3">
            {([Instagram, Facebook, TikTok] as React.FC<{ className?: string }>[]).map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 rounded-full border border-ivory/30 grid place-items-center hover:bg-ivory hover:text-bark transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-ivory font-display text-2xl mb-4">Quick Links</h4>
          <ul className="space-y-2 text-ivory/70">
            {quickLinks.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="hover:text-gold transition-colors">{q.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-ivory font-display text-2xl mb-4">Treatments</h4>
          <ul className="space-y-2 text-ivory/70">
            {treatments.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-ivory font-display text-2xl mb-4">Contact</h4>
          <ul className="space-y-3 text-ivory/70 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              Serenity Lane, Riverside Gardens, Kalutara, Sri Lanka
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              +94 77 000 0000
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              hello@vanaayurveda.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Vana Ayurveda. All rights reserved.</p>
          <p className="font-script text-base text-gold/80">Designed with care for your wellbeing</p>
        </div>
      </div>
    </footer>
  );
}


