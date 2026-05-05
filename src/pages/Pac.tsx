import LeadPageLayout, { LeadPageConfig } from "@/components/LeadPageLayout";
import { Shield, Target, Phone, Zap } from "lucide-react";

const config: LeadPageConfig = {
  title: "Des leads PAC 100% qualifiés",
  subtitle:
    "KRNO identifie les propriétaires éligibles à une pompe à chaleur grâce à l'IA, et vous envoie en exclusivité des leads avec un projet d'installation concret.",
  ctaUrl: "https://tally.so/r/Gxo6Jk",
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
      desc: "Transmis instantanément par mail, SMS et Google Sheet.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ],
  productLabel: "Leads PAC — Pompe à Chaleur air/eau BAR-TH-171",
  productDesc:
    "Propriétaires souhaitant remplacer leur chauffage par une pompe à chaleur. Projet identifié, éligibilité CEE vérifiée, contact qualifié.",
  pricingBannerText: "LEADS PAC · OFFRE MAI 2026",
  plans: [
    {
      name: "DÉCOUVERTE",
      tagline: "Je remplis mon agenda",
      subtitle: "Testez sans bloquer votre tréso",
      ideal: "Installateur indépendant",
      leads: "10",
      freeLeads: "2",
      price: "599€",
      discount: "-11%",
      perLead: "49,9€/lead effectif",
      catalogPrice: "675€",
      features: [
        "Leads 100% exclusifs",
        "Livraison en temps réel",
        "Selon vos critères (zone géo...)",
        "Sans engagement",
      ],
      cta: "Choisir Découverte →",
      ctaUrl: "https://tally.so/r/Gxo6Jk",
      highlighted: false,
      accentColor: false,
    },
    {
      name: "CROISSANCE",
      tagline: "Je sécurise mon flux",
      subtitle: "Un flux régulier de nouveaux clients",
      ideal: "Entreprise RGE établie",
      leads: "35",
      freeLeads: "5",
      price: "1 800€",
      discount: "-20%",
      perLead: "45€/lead effectif",
      catalogPrice: "2 250€",
      features: [
        "Tout Découverte, plus :",
        "Account manager dédié",
        "Rapport de performance mensuel",
        "Fiche partenaire dédiée",
        "Partenariat backlink SEO",
      ],
      cta: "Choisir Croissance →",
      ctaUrl: "https://tally.so/r/Gxo6Jk",
      highlighted: true,
      accentColor: true,
    },
    {
      name: "ACCÉLÉRATEUR",
      tagline: "Je domine ma zone",
      subtitle: "Volume maximal, coût minimal",
      ideal: "Réseau d'installateurs",
      leads: "85",
      freeLeads: "15",
      price: "3 799€",
      discount: "-32%",
      perLead: "38€/lead effectif",
      catalogPrice: "5 625€",
      features: [
        "Tout Croissance, plus :",
        "Onboarding personnalisé",
        "Intégration CRM sur mesure",
      ],
      cta: "Choisir Accélérateur →",
      ctaUrl: "https://tally.so/r/Gxo6Jk",
      highlighted: false,
      accentColor: false,
    },
  ],
};

const Pac = () => <LeadPageLayout config={config} />;

export default Pac;
