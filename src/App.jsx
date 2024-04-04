import { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";
import ThankYou from "./components/thankYou";

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  useEffect(() => {
    // Vérifier l'URL lors du chargement de la page
    const params = new URLSearchParams(window.location.search);
    if (params.get('thankyou') === 'true') {
      setShowThankYouPage(true);
    }
  }, []); // Le tableau vide [] indique que cela ne s'exécutera qu'une fois lors du chargement initial de la page

  const handleBackButtonClick = () => {
    setShowThankYouPage(false);
  };

  return (
    <div>
      {showThankYouPage ? (
        <ThankYou onBackButtonClick={handleBackButtonClick} />
      ) : (
        <>
          <Sidenav />
          <Main />
          <Work />
          <Projects />
          <Contact />
          <Bottom />
        </>
      )}
    </div>
  );
}

export default App;
