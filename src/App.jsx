import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ListImages from "./components/ListImages";
import Propuesta from "./components/Propuesta";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Container maxWidth="md">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/galeria" element={<ListImages />} />
            <Route path="/propuesta" element={<Propuesta />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppProvider>
  );
}

export default App;
