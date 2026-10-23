# Portfolio – Antoine Lechasles

Site statique (HTML, CSS, JavaScript sans framework). Aucun outil de build : il suffit d'ouvrir `index.html` dans un navigateur.

## Structure

```
portfolio/
├── index.html                 Squelette de la page (aucun texte en dur)
├── README.md
├── content/
│   └── content.js             TOUT LE TEXTE du site (à modifier ici)
└── assets/
    ├── css/
    │   ├── variables.css      Couleurs, polices, thèmes clair / sombre
    │   ├── base.css           Reset, typographie, boutons, titres
    │   ├── header.css         En-tête et navigation
    │   ├── hero.css           Accueil, jauge de stage, cristal 3D
    │   ├── projects.css       Filtres, cartes, maquettes
    │   ├── career-skills.css  Parcours et compétences
    │   ├── contact-footer.css Contact et pied de page
    │   └── accessibility.css  Focus, mouvement réduit
    └── js/
        ├── utils.js           Helpers (création d'éléments DOM)
        ├── icons.js           Icônes SVG
        ├── mockups.js         Maquettes des grandes cartes
        ├── render-static.js   Textes simples, menu, boutons
        ├── projects.js        Cartes et filtres de projets
        ├── career-skills.js   Parcours et compétences
        ├── internship.js      Jauge des 16 semaines et compte à rebours
        ├── theme.js           Thème clair / sombre
        ├── contact.js         Copie de l'e-mail
        ├── crystal.js         Cristal 3D (Three.js)
        └── main.js            Point d'entrée
```

## Modifier le contenu

Tout se passe dans `content/content.js` :

- **Changer un texte** : modifier la valeur correspondante.
- **Ajouter un projet** : copier un bloc dans `projects.items` et l'adapter
  (`categories` doit contenir des identifiants présents dans `projects.filters`).
- **Ajouter un lien à un projet** : renseigner `links: [{ label, url }]`.
- **Ajouter une compétence / expérience / formation** : ajouter une entrée dans `skills.groups`, `career.experience.entries` ou `career.education.entries`.
- **Changer les dates du stage** : `internship.start` et `internship.end` (format `AAAA-MM-JJ` pour `iso`), ainsi que `internship.weeks`.

## Modifier l'apparence

- Couleurs et polices : `assets/css/variables.css`.
- Chaque section a son fichier CSS.

## Mettre en ligne

Le dossier est directement déployable tel quel sur GitHub Pages, Netlify, Vercel ou n'importe quel hébergement statique : il suffit de publier le contenu du dossier `portfolio/`.

## Notes techniques

- Le texte est injecté par JavaScript depuis `content/content.js`. Ce fichier est un script (et non un `.json`) pour que le site fonctionne aussi en double-cliquant sur `index.html`, sans serveur local.
- Three.js et les polices Google sont chargés depuis un CDN (connexion internet requise). Si Three.js ne se charge pas, le cristal est masqué et le reste du site fonctionne normalement.
