import { createContext, useEffect, useState } from "react";
import useAudio from "../utils/useAudio";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [playing, toggle] = useAudio("rioroma2.mp3");

  const [modalFormOpen, setModalFormOpen] = useState(
    localStorage.getItem("completado") == "true" ? false : true
  );
  const [modalHomeOpen, setModalHomeOpen] = useState(
    localStorage.getItem("completado") == "true" ? false : true
  );

  const [modalBien, setModalBien] = useState(
    localStorage.getItem("completado") == "true" ? true : false
  );
  const [autoPlayCarou, setAutoPlayCarou] = useState(false);

  const [fixMusic, setFixMusic] = useState(false);

  const handleModalForm = () => {
    setModalFormOpen(!modalFormOpen);
  };

  const handleModalHome = () => {
    setModalHomeOpen(!modalHomeOpen);
  };

  const handleModalBien = (val) => {
    setModalBien(val);
  };

  useEffect(() => {
    if (localStorage.getItem("completado") == "true") {
      localStorage.getItem("completado") == "true" && setFixMusic(true);
      /*  setModalBien(true);

      setFixMusic(true);
      setTimeout(() => {
        toggle();
      }, 3000); */
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        modalFormOpen,
        modalHomeOpen,
        modalBien,
        handleModalForm,
        handleModalHome,
        handleModalBien,
        autoPlayCarou,
        setAutoPlayCarou,
        fixMusic,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
