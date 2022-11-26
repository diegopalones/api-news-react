
import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Listnews from './Components/Listnews/Listnews';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/news" element={<Listnews />} />
        </Routes>
        </GlobalProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
