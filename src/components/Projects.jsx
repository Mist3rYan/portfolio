import ProjectItem from "./ProjectItem";
import ccantinImg from "../assets/ccantin.jpg";
import siteweighlyImg from "../assets/siteweighly.jpg";
import weighlyImg from "../assets/weighly.jpg";
import myGeolocationImg from "../assets/mygeolocation.jpg";
import quaiAntiqueImg from "../assets/quai-antique.jpg";
import rustskindexImg from "../assets/presentENG.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#001b5e]">Projets</h2>
      <p className="py-8 font-bold text-center text-[#001b5e]">
        Voici quelques projets sur lesquels j&apos;ai travaillé
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={rustskindexImg}
          title="Android Rustskindex"
          stack="REACT NATIVE - API PHP"
          lien="https://play.google.com/store/apps/details?id=com.mycodeapps.rustskindex"
        />
        <ProjectItem
          img={ccantinImg}
          title="Charles Cantin - Photographe"
          stack="HTML - CSS - JAVASCRIPT"
          lien="https://ccphotographe.netlify.app/"
        />
        <ProjectItem
          img={siteweighlyImg}
          title="Site application Weighly"
          stack="REACT - TYPESCRIPT"
          lien="https://weighly.lespetitsdeveloppeurs.fr/"
        />
        <ProjectItem
          img={weighlyImg}
          title="Android Weighly"
          stack="FLUTTER - API PHP"
          lien="https://play.google.com/store/apps/details?id=com.mycodeapps.weighly"
        />
        <ProjectItem
          img={myGeolocationImg}
          title="Android Ma Geolocalisation"
          stack="REACT NATIVE"
          lien="https://play.google.com/store/apps/details?id=com.mycodeapps.my_geoLocation"
        />
        <ProjectItem
          img={quaiAntiqueImg}
          title="Quai Antique"
          stack="HTML - BOOTSTRAP - SYMPHONY - JAVASCRIPT"
          lien="https://quai-antique.lespetitsdeveloppeurs.fr"
        />
      </div>
    </div>
  );
};

export default Projects;
