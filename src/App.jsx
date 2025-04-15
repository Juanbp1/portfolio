import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter
import Header from "./components/organisms/Header"; // Componente Header
import Footer from "./components/organisms/Footer";
import AppRoutes from "./routes/AppRouter"; // Importa el archivo de rutas
import Main from "./components/organisms/Main";
import HeaderMobile from "./components/organisms/HeaderMobile";
import { useState } from "react";

const App = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Router>
      <Main isOpenMenu={isOpenMenu}>
        <Header />
        <HeaderMobile setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        <AppRoutes />
        <Footer />
      </Main>
    </Router>
  );
};

export default App;
