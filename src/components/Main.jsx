import { TypeAnimation } from "react-type-animation";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa6";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-{1}"
        src="./img/pexels-tranmautritam-69432.jpg"
        alt="background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Je suis Yannick Lannuzel
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Je suis
            <TypeAnimation
              sequence={[
                "diplomé en développement web et mobile.",
                2000,
                "un développeur passionné.",
                2000,
                "enthousiaste à l'idée de travailler avec vous.",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://twitter.com/lanfyp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.facebook.com/lannuzel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yannick-lannuzel-a16140257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/Mist3rYan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
