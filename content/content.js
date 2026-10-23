/* ==========================================================================
   CONTENU DU SITE : tout le texte du portfolio se modifie ICI.
   Pas besoin de toucher au HTML, au CSS ni au JavaScript pour changer un texte,
   ajouter un projet, une compétence ou une expérience.
   ========================================================================== */

window.SITE_CONTENT = {

  /* ---------- Informations générales (onglet du navigateur, SEO) ---------- */
  site: {
    lang: "fr",
    title: "Antoine Lechasles",
    description:
      "Antoine Lechasles, étudiant en BUT3 Informatique, développeur full-stack. Recherche un stage de fin d'études du 15 février au 4 juin 2027.",
    name: "Antoine Lechasles",
    themeButtonLabel: "Changer de thème",
    mainNavLabel: "Navigation principale"
  },

  /* ---------- Menu (cta: true = bouton mis en avant) ---------- */
  nav: [
    { label: "Projets",      href: "#projets" },
    { label: "Parcours",     href: "#parcours" },
    { label: "Compétences",  href: "#competences" },
    { label: "Contact",      href: "#contact", cta: true }
  ],

  /* ---------- Section d'accueil ---------- */
  hero: {
    status: "Disponible pour un stage de fin d'études",
    nameLines: ["Antoine", "Lechasles"],
    role: "Développeur full-stack. Applications web, bases de données et expériences 3D.",
    lede:
      "Étudiant en 3e année de BUT Informatique à l'IUT du Havre, je conçois des applications complètes, de la base de données à l'interface. Je cherche une PME, une agence ou un éditeur normand où prendre de vraies responsabilités techniques.",
    actions: [
      { label: "Voir mes projets", href: "#projets",  style: "primary" },
      { label: "Me contacter",     href: "#contact",  style: "ghost" }
    ]
  },

  /* ---------- Bloc « période de stage » ---------- */
  internship: {
    ariaLabel: "Période de stage recherchée",
    title: "Stage de fin d'études",
    weeks: 16,
    weekLabel: "Semaine",
    start: { iso: "2027-02-15", label: "Lundi 15 février 2027" },
    end:   { iso: "2027-06-04", label: "Vendredi 4 juin 2027" },
    gaugeLabel: "16 semaines, du 15 février au 4 juin 2027",
    /* {days} est remplacé automatiquement */
    countdown: {
      default:  "16 semaines",
      upcoming: "16 semaines, début dans {days} jours",
      tomorrow: "16 semaines, début demain",
      ongoing:  "16 semaines, en cours"
    },
    note:
      "16 semaines, développement full-stack. Basé à Caen, mobile à Rouen et au Havre. Permis B et véhicule."
  },

  /* ---------- Projets ---------- */
  projects: {
    title: "Projets",
    intro:
      "Des applications complètes, des jeux 3D et des sites réalisés pour de vrais usages. Chaque projet indique les technologies utilisées.",
    filtersLabel: "Filtrer les projets",
    tagsLabel: "Technologies",
    github: {
      label: "Tous mes dépôts sur GitHub",
      url: "https://github.com/AlphaSaiiko"
    },
    filters: [
      { id: "all",  label: "Tous" },
      { id: "web",  label: "Web" },
      { id: "3d",   label: "Jeux et 3D" },
      { id: "back", label: "Back-end et données" },
      { id: "java", label: "Java et algorithmique" }
    ],
    /* feat: true  = grande carte avec maquette
       mock        = type de maquette ("doc" ou "pdf") et ses textes
       links       = liste de liens { label, url } */
    items: [
      {
        feat: true,
        categories: ["web", "back"],
        kind: "Application web temps réel",
        title: "Plateforme collaborative",
        description:
          "Plusieurs personnes éditent le même document en même temps et discutent par chat, avec une synchronisation instantanée entre tous les navigateurs.",
        points: [
          "Co-édition de documents en temps réel",
          "Chat intégré",
          "API Node.js et base MongoDB"
        ],
        tags: ["Vue.js 3", "Node.js", "MongoDB", "Socket.io"],
        mock: {
          type: "doc",
          carets: ["A", "B"],
          chat: [
            { text: "Section 2 relue" },
            { text: "Merci, je valide", mine: true }
          ]
        },
        links: []
      },
      {
        feat: true,
        categories: ["web", "back"],
        kind: "Application métier pour un artisan",
        title: "Rapports d'intervention",
        description:
          "Un plombier-chauffagiste rédige ses rapports directement depuis le terrain. L'application améliore la rédaction avec une IA et génère le document en PDF.",
        points: [
          "Saisie du rapport sur le terrain",
          "Amélioration du texte par IA",
          "Export PDF et données dans Supabase"
        ],
        tags: ["HTML / JavaScript", "jsPDF", "Supabase", "API d'IA"],
        mock: { type: "pdf", badge: "PDF" },
        links: []
      },
      {
        categories: ["3d"],
        kind: "Jeu vidéo",
        title: "Christmas Night",
        description:
          "Jeu d'horreur en 2D et 3D dans le navigateur, avec un quartier généré de façon procédurale. Le projet a évolué sur plusieurs versions.",
        tags: ["React", "Three.js", "Génération procédurale"],
        links: []
      },
      {
        categories: ["3d", "web"],
        kind: "Jeu vidéo et site de présentation",
        title: "Ascension Tower",
        description:
          "RPG de type dungeon crawler en 3D, accompagné de son propre site de présentation.",
        tags: ["3D", "Jeu", "Site de présentation"],
        links: []
      },
      {
        categories: ["web"],
        kind: "Démo e-commerce",
        title: "STRAPELIER Collection",
        description:
          "Boutique en ligne haut de gamme pour des accessoires de montre, travaillée sur l'image de marque et le parcours d'achat.",
        tags: ["E-commerce", "Interface premium"],
        links: []
      },
      {
        categories: ["web"],
        kind: "Site vitrine, restaurant à Caen",
        title: "O'Poulet14",
        description:
          "Site d'un restaurant caennais dans un univers noir et or, sobre et soigné.",
        tags: ["Site vitrine", "Direction artistique"],
        links: []
      },
      {
        categories: ["java", "back"],
        kind: "Application de gestion",
        title: "Gestion d'évaluations",
        description:
          "Gestion des profils, des élèves et des résultats de chaque évaluation, avec base de données et authentification sécurisée. Conception de la structure de données.",
        tags: ["Java", "PostgreSQL", "Authentification"],
        links: []
      },
      {
        categories: ["back"],
        kind: "Projet universitaire (IUT)",
        title: "Gestionnaire de tâches",
        description:
          "Application de suivi de tâches développée avec le framework PHP CodeIgniter 4 et une base PostgreSQL.",
        tags: ["PHP", "CodeIgniter 4", "PostgreSQL"],
        links: []
      },
      {
        categories: ["java"],
        kind: "Jeu de plateau",
        title: "Jeu d'échecs en Java",
        description: "Jeu d'échecs développé en Java.",
        tags: ["Java"],
        links: [
          {
            label: "Code sur GitHub",
            url: "https://github.com/AlphaSaiiko/Jeu-d-Echec-en-Java"
          }
        ]
      },
      {
        categories: ["java"],
        kind: "Travaux d'IUT",
        title: "Puissance 5",
        description:
          "Variante du Puissance 4 avec une IA fondée sur l'algorithme Negamax et l'élagage alpha-bêta.",
        tags: ["Negamax", "Alpha-bêta", "IA de jeu"],
        links: []
      }
    ]
  },

  /* ---------- Parcours ---------- */
  career: {
    title: "Parcours",
    experience: {
      title: "Expérience",
      entries: [
        {
          when: "Pendant la 2e année de BUT",
          title: "Développeur front-end",
          org: "Atelier du Dealer",
          points: [
            "Intégration et développement d'interfaces web",
            "Écriture de templates en Liquid",
            "Adaptation des interfaces aux besoins de chaque projet",
            "Correction et amélioration de composants existants, en équipe professionnelle"
          ]
        }
      ]
    },
    education: {
      title: "Formation",
      entries: [
        {
          when: "2024 à aujourd'hui",
          title: "BUT Informatique",
          org: "IUT du Havre"
        },
        {
          when: "2024",
          title: "Baccalauréat général",
          org: "Lycée Rostand, Caen",
          description: "Spécialités Physique-Chimie et Mathématiques."
        }
      ]
    }
  },

  /* ---------- Compétences ---------- */
  skills: {
    title: "Compétences",
    intro: "Les technologies que j'ai utilisées dans mes projets et en entreprise.",
    groups: [
      { label: "Front-end",          items: "HTML, CSS, JavaScript, React, Vue.js, Tailwind CSS" },
      { label: "Back-end",           items: "Node.js, PHP (CodeIgniter 4), Java" },
      { label: "Bases de données",   items: "PostgreSQL, MongoDB, SQLite, Supabase" },
      { label: "3D et jeu",          items: "Three.js" },
      { label: "Outils",             items: "Git et GitHub, Docker, VS Code, Linux" },
      { label: "En apprentissage",   items: "C# et .NET, Unity, C++" },
      { label: "Langues",            items: "Français (langue maternelle), anglais (technique)" },
      { label: "Centres d'intérêt",  items: "Musculation, animaux, voyages" }
    ]
  },

  /* ---------- Contact ---------- */
  contact: {
    title: "Un stagiaire développeur du 15 février au 4 juin 2027 ?",
    paragraphs: [
      "Je cherche un stage de fin d'études de 16 semaines en développement, en Normandie. Je suis basé à Caen et je peux rejoindre Le Havre, Rouen et les environs (permis B et véhicule).",
      "Écrivez-moi pour échanger sur vos projets et sur les missions que vous pourriez me confier."
    ],
    emailLabel: "Adresse e-mail",
    email: "lechasles.antoine@gmail.com",
    copyLabel: "Copier",
    copiedLabel: "Copié",
    selectedLabel: "Sélectionné",
    githubLabel: "GitHub",
    githubText: "github.com/AlphaSaiiko",
    githubUrl: "https://github.com/AlphaSaiiko",
    locationLabel: "Localisation",
    location: "Caen, Normandie",
    mailButton: "Écrire un e-mail"
  },

  /* ---------- Pied de page ---------- */
  footer: {
    left: "Antoine Lechasles",
    right: "BUT3 Informatique, IUT du Havre"
  }
};
