import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";
import ThankYou from "./components/thankYou"; // Importez votre page de remerciement

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);

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
