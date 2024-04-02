import ProjectItem from "./ProjectItem";
import ccantinImg from "../assets/ccantin.jpg";
import siteweighlyImg from "../assets/siteweighly.jpg";
import weighlyImg from "../assets/weighly.jpg";
import myGeolocationImg from "../assets/mygeolocation.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projets</h1>
      <p className="py-8 font-bold text-center text-[#001b5e]">
        Voici quelques projets sur lesquels j&apos;ai travaillé
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={ccantinImg}
          title="Charles Cantin - Photographe"
          stack="Html - CSS - Javascript"
          lien="https://ccphotographe.netlify.app/"
        />
        <ProjectItem
          img={siteweighlyImg}
          title="Site présentation application Weighly"
          stack="ReactJs - Typescript"
          lien="https://weighly.lespetitsdeveloppeurs.fr/"
        />
        <ProjectItem
          img={weighlyImg}
          title="Application Android Weighly"
          stack="Flutter"
          lien="https://play.google.com/store/apps/details?id=com.mycodeapps.weighly"
        />
        <ProjectItem
          img={myGeolocationImg}
          title="Application Android Ma Geolocalisation"
          stack="React Native"
          lien="https://play.google.com/store/apps/details?id=com.mycodeapps.my_geoLocation"
        />
      </div>
    </div>
  );
};

export default Projects;
