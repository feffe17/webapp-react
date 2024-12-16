import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { LoaderProvider } from "./LoaderContext";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilmDetail from './pages/FilmDetail';

function App() {
  return (
    <LoaderProvider>
      <Router>
        <Loader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmDetail />} />
        </Routes>
      </Router>
    </LoaderProvider>
  );
}

export default App;
