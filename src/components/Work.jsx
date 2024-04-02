import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Fomation  développeur web et mobile option Android",
    duration: " Mars 2022 - Octobre 2023",
    details:
      "Formation de 18 mois en développement web et mobile option Android. Apprentissage des langages de programmation, des frameworks et des outils de développement. Réalisation de projets individuels. Titre professionnel de niveau 5 (Bac+2), validés par la DDETS, obtenu en octobre 2023.",
  },
  {
    year: 2004,
    title: "Régulateur Poste Central de Commandement",
    duration: "Toujours en poste",
    details:
      "Le régulateur de PCC dans un système de bus et de tramway surveille et coordonne les opérations en temps réel, ajustant les horaires et les itinéraires pour assurer un flux efficace des véhicules. Il répond également aux incidents et communique avec les conducteurs pour garantir un service fiable et sécurisé aux passagers.",
  },
  {
    year: 1998,
    title: "Dessinateur projeteur en dessin industriel",
    duration: "1996 - 1998",
    details:
      "Au cours de mon Bac Pro en dessin industriel, j'ai appris à créer des plans techniques et des schémas détaillés avec des logiciels de CAO. En collaboration avec des ingénieurs, j'ai transformé des concepts en dessins précis, tout en respectant les normes techniques. Mes stages en entreprise ont renforcé mes compétences pratiques, me permettant ainsi d'obtenir mon diplôme.",
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
