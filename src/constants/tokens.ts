// Centralized design tokens for TTC FROID SARL
// Brand identity extracted from the official logo

export const BRAND = {
  name: "TTC FROID SARL",
  shortName: "TTC FROID",
  tagline: "L'excellence du froid à Douala",
  description:
    "Expert en climatisation, froid industriel, chambres froides et dépannage HVAC à Douala et partout au Cameroun.",
  city: "Douala",
  country: "Cameroun",
  founded: "2022",
  ceo: "Mr TAMEKONG TAGOU CEDRIC",
  phone: "+237697133839",
  phoneDisplay: "+237 6 97 13 38 39",
  phoneWork: "+237655026667",
  phoneWorkDisplay: "+237 6 55 02 66 67",
  whatsapp: "237655026667",
  email: "ttcfroidsarl@gmail.com",
  address: "Douala, Littoral — Cameroun",
  hours: "Lun–Sam · 07h30 – 19h00",
  emergencyHours: "Dépannage 24/7",
  social: {
    facebook: "https://web.facebook.com/TTCFROIDSARL",
    linkedin: "https://www.linkedin.com/in/tamekong-tagou/",
    instagram: "https://instagram.com/ttcfroid",
  },
} as const;

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Produits", href: "#produits" },
  { label: "Réalisations", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    id: "climatisation",
    title: "Climatisation résidentielle & tertiaire",
    short: "Climatisation",
    description:
      "Conception, installation et mise en service de systèmes split, multi-split, VRV/VRF et gainables pour villas, bureaux, hôtels et commerces à Douala.",
    bullets: [
      "Étude thermique personnalisée",
      "Marques premium : Hisense, Nagu, Roch",
      "Garantie 2 ans main-d'œuvre",
    ],
    metric: { value: "500+", label: "installations" },
    icon: "wind",
  },
  {
    id: "froid-industriel",
    title: "Froid industriel & process",
    short: "Froid industriel",
    description:
      "Solutions de refroidissement pour l'agroalimentaire, la chimie, la pêche et l'industrie camerounaise. Groupes froids, chillers, tours de refroidissement.",
    bullets: [
      "Chillers de 5 kW à 1 500 kW",
      "Salles blanches & process critiques",
      "Conformité HACCP",
    ],
    metric: { value: "80+", label: "sites industriels" },
    icon: "factory",
  },
  {
    id: "chambre-froide",
    title: "Chambres froides & entrepôts frigorifiques",
    short: "Chambres froides",
    description:
      "Conception, fabrication et installation de chambres froides positives et négatives pour la conservation de denrées, produits pharmaceutiques et fleurs.",
    bullets: [
      "Positives (+2°C) & négatives (-25°C)",
      "Panneaux sandwich PIR 100/150/200 mm",
      "Systèmes de secours & alarmes",
    ],
    metric: { value: "120+", label: "chambres livrées" },
    icon: "snowflake",
  },
  {
    id: "refrigeration",
    title: "Réfrigération commerciale",
    short: "Réfrigération",
    description:
      "Vitrines, meubles frigorifiques, chambres de fermentation pour boulangeries, supermarchés, restaurants et poissonneries au Cameroun.",
    bullets: [
      "Vitrines bouchères & fromagères",
      "Meubles frigorifiques & congélateurs",
      "Installation rapide & garantie",
    ],
    metric: { value: "250+", label: "points de vente" },
    icon: "refrigerator",
  },
  {
    id: "maintenance",
    title: "Contrats de maintenance HVAC",
    short: "Maintenance",
    description:
      "Maintenance préventive et curative de vos installations pour garantir performance énergétique, longévité et conformité réglementaire.",
    bullets: [
      "Visites programmées trimestrielles",
      "Nettoyage, désinfection, recharge gaz",
      "Rapports digitaux & traçabilité",
    ],
    metric: { value: "98%", label: "de fiabilité" },
    icon: "wrench",
  },
  {
    id: "depannage",
    title: "Dépannage & urgences 24/7",
    short: "Dépannage",
    description:
      "Service d'intervention rapide sur Douala, Yaoundé, Kribi, Limbé et tout le Cameroun. Diagnostic, réparation et remise en service express.",
    bullets: [
      "Hotline 24h/24 — 7j/7",
      "Délai moyen : 2h à Douala",
      "Stock de pièces détachées d'origine",
    ],
    metric: { value: "< 2h", label: "intervention" },
    icon: "siren",
  },
] as const;

export const STATS = [
  { value: 3, suffix: "+", label: "années d'expertise" },
  { value: 500, suffix: "+", label: "installations livrées" },
  { value: 120, suffix: "+", label: "chambres froides" },
  { value: 24, suffix: "/7", label: "dépannage urgent" },
] as const;

export const TIMELINE = [
  {
    year: "2022",
    title: "Fondation par Mr TAMEKONG TAGOU CEDRIC",
    text: "Création de TTC FROID SARL par Mr TAMEKONG TAGOU CEDRIC, entrepreneur visionnaire passionné par le froid et la climatisation au cœur du bassin industriel camerounais.",
  },
  {
    year: "2022",
    title: "Premiers contrats & premières réalisations",
    text: "Dès la première année, TTC FROID remporte des contrats majeurs incluant l'équipement de clients institutionnels et industriels à Douala.",
  },
  {
    year: "2023",
    title: "Partenariat avec l'Hôpital Laquintinie",
    text: "TTC FROID devient le prestataire de référence de l'Hôpital Laquintinie de Douala pour la climatisation des blocs et les chambres froides pharmaceutiques.",
  },
  {
    year: "2023",
    title: "Agréments & partenariats marques",
    text: "Obtention des agréments de revendeur agréé Hisense, Nagu et Roch. Extension du catalogue produits et renforcement des capacités techniques.",
  },
  {
    year: "2024",
    title: "Expansion & développement",
    text: "Croissance soutenue avec plus de 500 installations, développement d'un réseau de techniciens certifiés et extension des zones d'intervention au Cameroun.",
  },
  {
    year: "2025",
    title: "Leader régional du froid",
    text: "TTC FROID SARL s'affirme comme la référence du froid et de la climatisation à Douala, avec un portefeuille clients incluant hôpitaux, industries et commerces.",
  },
] as const;

export const PROJECTS = [
  {
    title: "Hôpital Laquintinie de Douala",
    location: "Douala, Cameroun",
    scope: "Climatisation blocs & chambres froides pharmaceutiques",
    tag: "Médical",
  },
  {
    title: "Complexe bureaux — Akwa",
    location: "Douala, Cameroun",
    scope: "12 unités split gainable, maintenance annuelle",
    tag: "Tertiaire",
  },
  {
    title: "Entrepôt frigorifique",
    location: "Bonaberi, Douala",
    scope: "4 chambres froides, 2 tunnels de surgélation",
    tag: "Agro-industrie",
  },
  {
    title: "Restaurant & Hôtellerie",
    location: "Douala Centre",
    scope: "Meubles frigorifiques + climatisation complète",
    tag: "Hôtellerie",
  },
  {
    title: "Centre Médical",
    location: "Douala, Littoral",
    scope: "Climatisation précision, chambres froides médicales",
    tag: "Santé",
  },
  {
    title: "Supermarché & Commerce",
    location: "Douala",
    scope: "Vitrines réfrigérées, congélateurs, installation complète",
    tag: "Retail",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Mr MBA NARCISSE DOUALLA",
    role: "Directeur Technique — Hôpital Laquintinie",
    text: "TTC FROID SARL assure la maintenance de nos installations critiques depuis plusieurs années. Leur réactivité et professionnalisme en milieu hospitalier sont irréprochables. Un partenaire de confiance.",
  },
  {
    name: "Jean-Pierre Essomba",
    role: "Directeur Général — Entreprise de Distribution",
    text: "Nous leur confions nos installations critiques de réfrigération. L'équipe maîtrise les technologies les plus exigeantes. Aucune improvisation, que de la rigueur et du professionnalisme.",
  },
  {
    name: "Sandrine Mbarga",
    role: "Directrice des Opérations — Complexe Commercial",
    text: "TTC FROID équipe l'ensemble de notre complexe depuis leur création. La qualité d'installation et la réactivité du service après-vente sont remarquables. Je les recommande à 100%.",
  },
] as const;

export const FAQ = [
  {
    q: "Quel est le délai moyen d'installation d'une climatisation à Douala ?",
    a: "Pour un split résidentiel, l'installation est réalisée sous 24 à 48 h après validation technique. Pour un système multi-split ou VRV tertiaire, le délai varie de 5 à 15 jours ouvrés selon la complexité du chantier. Chaque projet fait l'objet d'une étude thermique préalable offerte.",
  },
  {
    q: "Quelles marques de climatiseurs proposez-vous ?",
    a: "Nous sommes revendeurs agréés des marques Hisense, Nagu et Roch. Nous recommandons systématiquement la technologie inverter pour son efficacité énergétique et sa durabilité dans le climat équatorial de Douala.",
  },
  {
    q: "Proposez-vous des contrats de maintenance pour les entreprises ?",
    a: "Oui, nous proposons des contrats de maintenance adaptés à vos besoins. Ils incluent les visites programmées, le nettoyage approfondi, la recharge en gaz frigorigène, les rapports techniques et un délai d'intervention garanti sous 2h à Douala.",
  },
  {
    q: "Intervenez-vous en dehors de Douala ?",
    a: "Absolument. Nous intervenons sur l'ensemble du Cameroun — Yaoundé, Kribi, Limbé, Bafoussam, Bertoua, Garoua. Notre équipe mobile peut être déployée rapidement partout au pays.",
  },
  {
    q: "Comment se passe un dépannage en urgence ?",
    a: "Notre hotline 24/7 (+237 6 55 02 66 67) reçoit votre appel, un frigoriste qualifié est dépêché en moins de 2h à Douala. Un diagnostic est établi sur place, un devis transparent vous est remis, et la remise en service est effectuée avec des pièces d'origine.",
  },
  {
    q: "TTC FROID SARL est-elle une entreprise récente ?",
    a: "TTC FROID SARL a été fondée en 2022 par Mr TAMEKONG TAGOU CEDRIC. En quelques années, nous avons réalisé plus de 500 installations et sommes devenus le prestataire de référence de l'Hôpital Laquintinie de Douala, gage de notre excellence et de notre fiabilité.",
  },
] as const;
