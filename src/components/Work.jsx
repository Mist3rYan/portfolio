import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Ma Géolocalisation",
    duration: "janvier 2024 - mars 2024",
    tags: "REACT NATIVE",
    details:
      "J'ai développé l'application Android <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.my_geoLocation'>Ma Géolocalisation</a> avec React Native pour suivre sa position en temps réel. Cette solution utilise la géolocalisation pour afficher sa position sur une carte, permettant de partager sa localisation avec des amis et de trouver des lieux à proximité. J'ai également intégré des fonctionnalités d'enregistrement de position pour garder en mémoire les POI.",
  },
  {
    year: 2024,
    title: "Weighly",
    duration: "octobre 2022 - janvier 2024",
    tags: "FLUTTER - REACTJS",
    details:
      "J'ai développé le site réactif de <a href='https://weighly.lespetitsdeveloppeurs.fr/description'>Weighly</a> ainsi que l'application Android avec Flutter pour l'application de suivi de poids <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.weighly'>Weighly</a> . Cette solution offre une expérience complète de suivi de santé, me permettant de surveiller mon poids, mon sommeil, mon cycle menstruel, mon activité physique et mes repas, personnalisée selon mes préférences pour une meilleure santé globale.",
  },
  {
    year: 2023,
    title: "Quai Antique",
    duration: "mai 2023 - octobre 2023",
    tags: "HTML - BOOTSTRAP - SYMPHONY - JAVASCRIPT",
    details:
      "Dans le cadre de ma formation chez Studi, j'ai été chargé de développer une application web vitrine pour le restaurant <a href='https://quai-antique.lespetitsdeveloppeurs.fr/'>Le Quai Antique</a> , dirigé par le Chef Arnaud Michant. Travaillant en autonomie, j'ai relevé ce défi en appliquant mes compétences et en en développant de nouvelles, avec pour objectif de créer une expérience immersive reflétant l'excellence culinaire du restaurant.",
  },
  {
    year: 2023,
    title: "Foundation Phoenix",
    duration: "avril 2023",
    tags: "HTML - BOOTSTRAP - PHP",
    details:
      "J'ai créé <a href='http://foundation-phoenix.rf.gd/public/index.php'>Foundation Phoenix</a> , un site web pour la gestion des données d'une agence secrète'. J'ai conçu la base de données, développé des interfaces front et back-office, utilisant l'approche MVC et ajouté des fonctionnalités bonus telles que la pagination et les filtres.",
  },
  {
    year: 2023,
    title: "TRT Conseil",
    duration: "mars 2023",
    tags: "HTML - BOOTSTRAP - SYMFONY",
    details:
      "Le projet <a href='https://app-trtconseil.herokuapp.com/'>TRT Conseil</a>  visait à créer un site web pour une agence de recrutement hôtelier et gastronomique. Il permet l'inscription des candidats et recruteurs, avec des annonces gérées par ces derniers. Chaque élément est validé par un consultant, assurant une gestion efficace. Le site est convivial, professionnel, sécurisé et adaptable à tous les appareils, offrant une expérience utilisateur optimale pour trouver des candidats qualifiés.",
  },
  {
    year: 2023,
    title: "Charles Cantin Photographe",
    duration: "février 2023",
    tags: "HTML - CSS - JAVASCRIPT",
    details:
      "Le projet de <a href='https://ccphotographe.netlify.app/'>Charles Cantin Photographe</a> visait à promouvoir le talent de Charles Cantin, photographe amateur, en le positionnant comme un professionnel établi. Le site met en avant ses différents types de photos, organisées en galeries avec des filtres, pour une navigation fluide. Il inclu des sections Contact et Tarifs pour faciliter les demandes de renseignements et la réservation de services. Développé avec des technologies front-end, le site est professionnel, esthétique et facile à utiliser, avec un CMS permettant à Charles de gérer les contenus et les prestations, tout en incarnant ses idées spécifiques pour son site web.",
  },
  {
    year: 2023,
    title: "Dream Travel Agency",
    duration: "janvier 2023",
    tags: "WORDPRESS",
    details:
      "L'objectif de l'agence de voyage <a href='https://dreamtravelagency.rf.gd/'>Dream Travel Agency</a> était de créer un site vitrine pour accroître sa visibilité en ligne. Le site propose deux types de comptes utilisateurs (Admin et Éditeur) avec des droits définis pour garantir la sécurité. La structure du site est adaptée pour permettre aux utilisateurs de gérer le contenu et de suivre l'activité. De plus, un formulaire de contact est disponible pour permettre aux visiteurs de contacter facilement l'agence.",
  },
  {
    year: 2022,
    title: "Dice Game",
    duration: "décembre 2022",
    tags: "HTML - CSS - JAVASCRIPT",
    details:
      "Le projet consistait à créer un jeu de dé appelé <a href='https://mist3ryan.github.io/Dice-Game/'>Dice Game</a> sur un navigateur web en utilisant le Document Object Model (DOM). Le livrable comprend un jeu fonctionnel avec une interface claire conforme à la maquette fournie. Les fonctionnalités principales incluent la création d'une nouvelle partie, la sauvegarde du score actuel, le lancement du dé et la prise en charge de deux joueurs, tout cela côté client (front-end).",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h2
        className="text-4xl font-bold text-center text-[#001b5e]
        py-8"
      >
        Expériences
      </h2>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          tags={item.tags}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
