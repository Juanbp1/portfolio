import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter
import Header from "./components/organisms/Header"; // Componente Header
import Footer from "./components/organisms/Footer"
import AppRoutes from "./routes/AppRouter"; // Importa el archivo de rutas
import Main from "./components/organisms/Main";
function App() {
  return (
    <Router>
      <Main >
        <Header />
        <AppRoutes />
        <Footer />
      </Main>
    </Router>
  );
}

export default App;
