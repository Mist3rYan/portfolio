import WorkItem from "./WorkItem";
import flag_fr from "../assets/flag-fr.png";
import flag_gb from "../assets/flag-gb.png";

const data = [
  {
    year: 2024,
    title: "Rustskindex",
    duration: "septembre 2024 - octobre 2024",
    tags: "REACT NATIVE - API PHP",
    details: `
      <img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' /> 
      J'ai développé l'application Android <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.rustskindex'>RUSTSKINDEX</a> avec React Native pour permettre aux joueurs de Rust de suivre la valeur de leurs skins en temps réel. J'ai également créé une API en PHP qui récupère les données du marché Steam pour afficher les prix des skins de manière claire et intuitive. Les utilisateurs peuvent consulter leur inventaire en saisissant leur SteamID, et l'application propose un système de conversion des devises pour faciliter la gestion des transactions.
      <br /><br />
      <img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' /> 
      I developed the Android app <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.rustskindex'>RUSTSKINDEX</a> using React Native to allow Rust players to track the real-time value of their skins. I also created a PHP API to fetch data from the Steam marketplace, displaying skin prices in a clear and intuitive way. Users can check their inventory by entering their SteamID, and the app includes a currency conversion system to simplify transactions.
    `,
  },
  {
    year: 2024,
    title: "Ma Géolocalisation",
    duration: "janvier 2024 - mars 2024",
    tags: "REACT NATIVE",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' /> J'ai développé l'application Android <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.my_geoLocation'>Ma Géolocalisation</a> avec React Native pour suivre sa position en temps réel. Cette solution utilise la géolocalisation pour afficher sa position sur une carte, permettant de partager sa localisation avec des amis et de trouver des lieux à proximité. J'ai également intégré des fonctionnalités d'enregistrement de position pour garder en mémoire les POI (Points d'Intérêt).

<br /><br />
<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' /> I developed the Android app <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.my_geoLocation'>Ma Géolocalisation</a> using React Native to track real-time location. This solution leverages geolocation to display your position on a map, allowing users to share their location with friends and find nearby places. I also integrated a position-saving feature to store Points of Interest (POIs).`,
  },
  {
    year: 2024,
    title: "Weighly",
    duration: "octobre 2022 - janvier 2024",
    tags: "FLUTTER - REACTJS - API PHP",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' /> J'ai développé le site réactif de <a href='https://weighly.lespetitsdeveloppeurs.fr/description'>Weighly</a> ainsi que l'application Android avec Flutter pour l'application de suivi de poids <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.weighly'>Weighly</a>. Cette solution offre une expérience complète de suivi de santé, permettant de surveiller le poids, le sommeil, le cycle menstruel, l'activité physique et les repas, personnalisée selon les préférences pour une meilleure santé globale.

<br /><br />
<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />I developed the responsive website for <a href='https://weighly.lespetitsdeveloppeurs.fr/description'>Weighly</a> as well as the Android app using Flutter for the weight tracking app <a href='https://play.google.com/store/apps/details?id=com.mycodeapps.weighly'>Weighly</a>. This solution offers a comprehensive health tracking experience, allowing users to monitor their weight, sleep, menstrual cycle, physical activity, and meals, all customized based on their preferences for better overall health.`,
  },
  {
    year: 2023,
    title: "Quai Antique",
    duration: "mai 2023 - octobre 2023",
    tags: "HTML - BOOTSTRAP - SYMPHONY - JAVASCRIPT",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' />Dans le cadre de ma formation chez Studi, j'ai été chargé de développer une application web vitrine pour le restaurant <a href='https://quai-antique.lespetitsdeveloppeurs.fr/'>Le Quai Antique</a>, dirigé par le Chef Arnaud Michant. Travaillant en autonomie, j'ai relevé ce défi en appliquant mes compétences et en en développant de nouvelles, avec pour objectif de créer une expérience immersive reflétant l'excellence culinaire du restaurant.

<br /><br />

<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />As part of my training at Studi, I was tasked with developing a showcase web application for the restaurant <a href='https://quai-antique.lespetitsdeveloppeurs.fr/'>Le Quai Antique</a>, led by Chef Arnaud Michant. Working independently, I took on this challenge by applying my skills and developing new ones, with the goal of creating an immersive experience that reflects the culinary excellence of the restaurant.
      
      `,
  },
  {
    year: 2023,
    title: "Foundation Phoenix",
    duration: "avril 2023",
    tags: "HTML - BOOTSTRAP - PHP",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' />
      J'ai créé <a href='http://foundation-phoenix.rf.gd/public/index.php'>Foundation Phoenix</a>, un site web pour la gestion des données d'une agence secrète. J'ai conçu la base de données, développé des interfaces front et back-office en utilisant l'approche MVC, et ajouté des fonctionnalités bonus telles que la pagination et les filtres.

<br /><br />
<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />I created <a href='http://foundation-phoenix.rf.gd/public/index.php'>Foundation Phoenix</a>, a website for managing data for a secret agency. I designed the database, developed both front and back-office interfaces using the MVC approach, and added bonus features like pagination and filters.
      `,
  },
  {
    year: 2023,
    title: "TRT Conseil",
    duration: "mars 2023",
    tags: "HTML - BOOTSTRAP - SYMFONY",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' /> Le projet <a href='https://app-trtconseil.herokuapp.com/'>TRT Conseil</a> visait à créer un site web pour une agence de recrutement hôtelier et gastronomique. Il permet l'inscription des candidats et recruteurs, avec des annonces gérées par ces derniers. Chaque élément est validé par un consultant, assurant une gestion efficace. Le site est convivial, professionnel, sécurisé et adaptable à tous les appareils, offrant une expérience utilisateur optimale pour trouver des candidats qualifiés.

<br /><br />
<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />The project <a href='https://app-trtconseil.herokuapp.com/'>TRT Conseil</a> aimed to create a website for a hotel and restaurant recruitment agency. It allows candidates and recruiters to register, with job listings managed by the recruiters. Each listing is validated by a consultant, ensuring efficient management. The site is user-friendly, professional, secure, and adaptable to all devices, providing an optimal user experience for finding qualified candidates.
      `,
  },
  {
    year: 2023,
    title: "Charles Cantin Photographe",
    duration: "février 2023",
    tags: "HTML - CSS - JAVASCRIPT",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' /> Le projet de <a href='https://ccphotographe.netlify.app/'>Charles Cantin Photographe</a> visait à promouvoir le talent de Charles Cantin, photographe amateur, en le positionnant comme un professionnel établi. Le site met en avant ses différents types de photos, organisées en galeries avec des filtres, pour une navigation fluide. Il inclut des sections Contact et Tarifs pour faciliter les demandes de renseignements et la réservation de services. Développé avec des technologies front-end, le site est professionnel, esthétique et facile à utiliser, avec un CMS permettant à Charles de gérer les contenus et les prestations, tout en incarnant ses idées spécifiques pour son site web.

<br /><br />

<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />Charles Cantin Photographe</a> aimed to promote the talent of Charles Cantin, an amateur photographer, by positioning him as an established professional. The site showcases his various types of photos, organized into galleries with filters for smooth navigation. It includes Contact and Pricing sections to facilitate inquiries and service bookings. Developed using front-end technologies, the site is professional, aesthetically pleasing, and user-friendly, with a CMS allowing Charles to manage content and services while embodying his specific ideas for the website.
      `,
  },
  {
    year: 2023,
    title: "Dream Travel Agency",
    duration: "janvier 2023",
    tags: "WORDPRESS",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' />
      L'objectif de l'agence de voyage <a href='https://dreamtravelagency.rf.gd/'>Dream Travel Agency</a> était de créer un site vitrine pour accroître sa visibilité en ligne. Le site propose deux types de comptes utilisateurs (Admin et Éditeur) avec des droits définis pour garantir la sécurité. La structure du site est adaptée pour permettre aux utilisateurs de gérer le contenu et de suivre l'activité. De plus, un formulaire de contact est disponible pour permettre aux visiteurs de contacter facilement l'agence.

<br /><br />
<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />
The goal of the travel agency <a href='https://dreamtravelagency.rf.gd/'>Dream Travel Agency</a> was to create a showcase website to increase its online visibility. The site offers two types of user accounts (Admin and Editor) with defined rights to ensure security. The site structure is designed to allow users to manage content and track activity. Additionally, a contact form is available for visitors to easily reach out to the agency.
      `,
  },
  {
    year: 2022,
    title: "Dice Game",
    duration: "décembre 2022",
    tags: "HTML - CSS - JAVASCRIPT",
    details: `<img src='${flag_fr}' alt='FR' style='width: 20px; height: 20px;' />
      Le projet consistait à créer un jeu de dé appelé <a href='https://mist3ryan.github.io/Dice-Game/'>Dice Game</a> sur un navigateur web en utilisant le Document Object Model (DOM). Le livrable comprend un jeu fonctionnel avec une interface claire conforme à la maquette fournie. Les fonctionnalités principales incluent la création d'une nouvelle partie, la sauvegarde du score actuel, le lancement du dé et la prise en charge de deux joueurs, tout cela côté client (front-end).

<br /><br />

<img src='${flag_gb}' alt='FR' style='width: 20px; height: 20px;' />The project involved creating a dice game called <a href='https://mist3ryan.github.io/Dice-Game/'>Dice Game</a> on a web browser using the Document Object Model (DOM). The deliverable includes a functional game with a clear interface in line with the provided mockup. Key features include creating a new game, saving the current score, rolling the dice, and supporting two players, all on the client side (front-end).
      `,
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
