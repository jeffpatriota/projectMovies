import { BrowserRouter, Routes, Route } from "react-router-dom";

import Erro from "./pages/Erro";
import Favorites from "./pages/Favorites";
import Home from'./pages/Home';
import Movie from'./pages/Movie';

import Header from "./components/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="filme/:id" element={<Movie/>} />
            <Route path="/favoritos" element= {<Favorites/>} />

            <Route path="*" element={ <Erro/> } />

           
        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;