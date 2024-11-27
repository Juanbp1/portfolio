import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter
import "./output.css"; // Archivo de estilos Sass
import Header from "./components/organisms/Header"; // Componente Header
import AppRoutes from "./routes/AppRouter"; // Importa el archivo de rutas
import Main from "./components/organisms/Main";

function App() {
  return (
    <Router>
      <Main >
        <Header />
        <AppRoutes />
      </Main>
    </Router>
  );
}

export default App;
