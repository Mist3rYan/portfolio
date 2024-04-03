import PropTypes from "prop-types";

const WorkItem = ({ year, title, duration, tags, details }) => {
  // Utiliser une expression régulière pour rechercher tous les liens et les remplacer par une version mise en forme
  const formattedDetails = details.replace(
    /<a href='(.*?)'(.*?)>(.*?)<\/a>/g,
    "<a href='$1'$2 style='color: #001b5e; font-weight: bold;'>$3</a>"
  );
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-400">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              {year}
            </span>
            <span className="text-lg font-bold text-[#001b5e]">{title}</span>
            <span className="my-1 text-sm font-normal leading-none text-stone-400">
              {duration}
            </span>
          </p>
          <p className="inline-block px-2 py-1 font-semibold text-white bg-[#418ed6] rounded-md mt-2">
            {tags}
          </p>
          {/* Utilisation de dangerouslySetInnerHTML pour insérer du HTML brut avec les liens formatés */}
          <div
            className="my-2 text-base font-normal text-stone-700"
            dangerouslySetInnerHTML={{ __html: formattedDetails }}
          />
        </li>
      </ol>
    </div>
  );
};

WorkItem.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default WorkItem;
