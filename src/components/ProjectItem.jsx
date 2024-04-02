// Desc: ProjectItem component
import PropTypes from "prop-types";
const ProjectItem = ({ img, title, stack, lien }) => {
  return (
    <div className="relative flex items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-900">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 w-full h-full object-cover"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
        <a href={lien}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            En savoir plus
          </p>
        </a>
      </div>
    </div>
  );
};
ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lien: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
};

export default ProjectItem;
