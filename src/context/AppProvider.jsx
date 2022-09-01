import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [modalFormOpen, setModalFormOpen] = useState(true);
  const [modalHomeOpen, setModalHomeOpen] = useState(true);

  const [modalBien, setModalBien] = useState(false);
  const [autoPlayCarou, setAutoPlayCarou] = useState(false);

  const handleModalForm = () => {
    setModalFormOpen(!modalFormOpen);
  };

  const handleModalHome = () => {
    setModalHomeOpen(!modalHomeOpen);
  };

  const handleModalBien = (val) => {
    setModalBien(val);
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
