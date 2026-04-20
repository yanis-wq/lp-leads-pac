import LeadPageLayout, { LeadPageConfig } from "@/components/LeadPageLayout";
import { Shield, Target, Phone, Zap } from "lucide-react";

const config: LeadPageConfig = {
  badge: "Leads PAC exclusifs",
  title: "Des leads PAC 100% qualifiés",
  subtitle:
    "KRNO identifie les propriétaires éligibles à une pompe à chaleur grâce à l'IA, et vous envoie en exclusivité des leads avec un projet concret.",
  features: [
    {
      icon: Shield,
      title: "Exclusif",
      desc: "Chaque lead vous est transmis en exclusivité — jamais mis en concurrence.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Target,
      title: "Intentionniste",
      desc: "Propriétaires avec un projet PAC identifié, pas de simples curieux.",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: Phone,
      title: "Vérifié",
      desc: "Joignabilité optimale : moins d'appels perdus, plus de RDV.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      title: "Temps réel",
      desc: "Transmis instantanément par email, Google Sheet ou webhook.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ],
  statsTitle: "Tous types de projets PAC couverts",
  statsSubtitle:
    "De la PAC air/eau à la PAC géothermique, nos leads couvrent l'ensemble de vos missions.",
  stats: [
    { title: "PAC air/eau", desc: "Remplacement chaudière fioul ou gaz par une pompe à chaleur." },
    { title: "PAC air/air", desc: "Climatisation réversible pour maisons individuelles ou appartements." },
    { title: "PAC géothermique", desc: "Projets de grande envergure, forte intention d'achat." },
  ],
  productLabel: "Leads PAC — Pompe à Chaleur",
  productDesc:
    "Propriétaires souhaitant remplacer leur système de chauffage par une pompe à chaleur. Projet identifié, contact vérifié, délai connu.",
  pricingBannerText: "LEADS PAC · OFFRE LIMITÉE AVRIL",
  plans: [
    {
      name: "DÉCOUVERTE",
      tagline: "Je remplis mon agenda",
      subtitle: "Testez sans bloquer votre tréso",
      ideal: "Installateur indépendant",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Leads 100% exclusifs",
        "Livraison en temps réel",
        "Selon vos critères (zone géo...)",
        "Sans engagement",
      ],
      cta: "Choisir Découverte →",
      highlighted: false,
      accentColor: false,
    },
    {
      name: "CROISSANCE",
      tagline: "Je sécurise mon flux",
      subtitle: "Un flux régulier de nouveaux clients",
      ideal: "Entreprise RGE établie",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Découverte, plus :",
        "Account manager dédié",
        "Rapport de performance mensuel",
        "Fiche partenaire dédiée",
        "Partenariat backlink SEO",
      ],
      cta: "Choisir Croissance →",
      highlighted: true,
      accentColor: true,
    },
    {
      name: "ACCÉLÉRATEUR",
      tagline: "Je domine ma zone",
      subtitle: "Volume maximal, coût minimal",
      ideal: "Réseau d'installateurs",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Croissance, plus :",
        "Onboarding personnalisé",
        "Intégration CRM sur mesure",
      ],
      cta: "Choisir Accélérateur →",
      highlighted: false,
      accentColor: false,
    },
  ],
};

const Pac = () => <LeadPageLayout config={config} />;

export default Pac;
