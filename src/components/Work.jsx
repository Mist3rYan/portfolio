aimport WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Ma Géolocalisation",
    duration: "Janvier 2024 - mars 2024",
    details:
      "REACT NATIVE. J'ai développé l'application Android <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.my_geoLocation'>Ma Géolocalisation</a> avec React Native pour suivre ma position en temps réel. Cette solution utilise la géolocalisation pour afficher ma position sur une carte, me permettant de partager ma localisation avec mes amis et de trouver des lieux à proximité. J'ai également intégré des fonctionnalités d'enregistrement de position pour garder en mémoire les POI.",
  },
  {
    year: 2024,
    title: "Weighly",
    duration: "Octobre 2022 - janvier 2024",
    details:
      "FLUTTER - REACTJS. J'ai développé le site réactif de <a href='https://weighly.lespetitsdeveloppeurs.fr/description'>Weighly</a>  ainsi que l'application Android avec Flutter pour l'application de suivi de poids <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.weighly'>Weighly</a> . Cette solution offre une expérience complète de suivi de santé, me permettant de surveiller mon poids, mon sommeil, mon cycle menstruel, mon activité physique et mes repas, personnalisée selon mes préférences pour une meilleure santé globale.",
  },
  {
    year: 2023,
    title: "Quai Antique",
    duration: "Avril 2023 - octobre 2023",
    details:
      "HTML - BOOTSTRAP - SYMPHONY - JAVASCRIPT. Dans le cadre de ma formation chez Studi, j'ai été chargé de développer une application web vitrine pour le restaurant <a href='https://quai-antique.lespetitsdeveloppeurs.fr/'>Le Quai Antique</a> , dirigé par le Chef Arnaud Michant. Travaillant en autonomie, j'ai relevé ce défi en appliquant mes compétences et en en développant de nouvelles, avec pour objectif de créer une expérience immersive reflétant l'excellence culinaire du restaurant.",
  },
  {
    year: 2023,
    title: "Foundation Phoenix",
    duration: "Avril 2023",
    details:
      "HTML - BOOTSTRAP - PHP. J'ai créé <a href='http://foundation-phoenix.rf.gd/public/index.php'>Foundation Phoenix</a> , un site web pour la gestion des données d'une agence secrète'. J'ai conçu la base de données, développé des interfaces front et back-office, utilisant l'approche MVC et ajouté des fonctionnalités bonus telles que la pagination et les filtres.",
  },
  {
    year: 2023,
    title: "TRT Conseil",
    duration: "Mars 2023",
    details:
      "HTML - BOOTSTRAP - SYMFONY.Le projet <a href='https://app-trtconseil.herokuapp.com/'>TRT Conseil</a>  vise à créer un site web pour une agence de recrutement hôtelier et gastronomique. Il permet l'inscription des candidats et recruteurs, avec des annonces gérées par ces derniers. Chaque élément est validé par un consultant, assurant une gestion efficace. Le site sera convivial, professionnel, sécurisé et adaptable à tous les appareils, offrant une expérience utilisateur optimale pour trouver des candidats qualifiés.",
  },
  {
    year: 2023,
    title: "Charles Cantin Photographe",
    duration: "Janvier 2023 - février 2023",
    details:
      "HTML - CSS - JAVASCRIPT. Le projet de <a href='https://ccphotographe.netlify.app/'>Charles Cantin Photographe</a> vise à promouvoir le talent de Charles Cantin, photographe amateur, en le positionnant comme un professionnel établi. Le site mettra en avant ses différents types de photos, organisées en galeries avec des filtres, pour une navigation fluide. Il inclura des sections Contact et Tarifs pour faciliter les demandes de renseignements et la réservation de services. Développé avec des technologies front-end, le site sera professionnel, esthétique et facile à utiliser, avec un CMS permettant à Charles de gérer les contenus et les prestations, tout en incarnant ses idées spécifiques pour son site web.",
  },
  {
    year: 2022,
    title: "Dream Travel Agency",
    duration: "Decembre 2022",
    details:
      "WORDPRESS. L'objectif de l'agence de voyage <a href='https://dreamtravelagency.rf.gd/'>Dream Travel Agency</a>est de créer un site vitrine pour accroître sa visibilité en ligne. Le site proposera deux types de comptes utilisateurs (Admin et Éditeur) avec des droits définis pour garantir la sécurité. La structure du site sera adaptée pour permettre aux utilisateurs de gérer le contenu et de suivre l'activité. De plus, un formulaire de contact sera disponible pour permettre aux visiteurs de contacter facilement l'agence.",
  },
  {
    year: 2022,
    title: "Dice Game",
    duration: "Décembre 2022",
    details:
      "HTML - CSS - JAVASCRIPT. Le projet consiste à créer un jeu de dé appelé <a href='https://mist3ryan.github.io/Dice-Game/'>Jeu de dés</a> sur un navigateur web en utilisant le Document Object Model (DOM). Le livrable comprendra un jeu fonctionnel avec une interface claire conforme à la maquette fournie. Les fonctionnalités principales incluent la création d'une nouvelle partie, la sauvegarde du score actuel, le lancement du dé et la prise en charge de deux joueurs, tout cela côté client (front-end).",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Expériences
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
