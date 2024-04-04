import PropTypes from "prop-types"; // Importez PropTypes depuis react
import { AiFillCheckCircle } from "react-icons/ai";
import { BsChevronDoubleLeft } from "react-icons/bs";

const ThankYou = ({ onBackButtonClick }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <AiFillCheckCircle className="text-green-500 text-6xl" />
          <h1 className="text-4xl font-bold">Merci !</h1>
          <p className="text-lg">Votre message a bien été envoyé.</p>
        </div>
        <button
          type="button"
          className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center mt-8"
          onClick={onBackButtonClick}
        >
          <BsChevronDoubleLeft
            className="flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          />
          Retour
        </button>
      </div>
    </div>
  );
};

// Définir la validation des types de propriétés pour le composant ThankYou
ThankYou.propTypes = {
  onBackButtonClick: PropTypes.func.isRequired, // 'onBackButtonClick' doit être une fonction et est obligatoire
};

export default ThankYou;
