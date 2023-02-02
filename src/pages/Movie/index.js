import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './style.css';
import {toast} from 'react-toastify';

import api from "../../services/api";

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(() => {
        async function loadFilmes() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "9db2f516918a30562ebfaa0b90f96945",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log('Filme não encontrado');
                    navigation("/", { replace: true});
                    return;
                })
        }

        loadFilmes();



        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigation, id])


    function saveMovie(){
        const myList = localStorage.getItem("@moviesTips");

        let moviesSave = JSON.parse(myList) || [];

        const hasFilmes = moviesSave.some((moviesSave)=> moviesSave.id === movie.id)

        if(hasFilmes){
            toast.warn("Esse filme já está na sua lista!")
        return;
        }

        moviesSave.push(movie);
        localStorage.setItem("@moviesTips", JSON.stringify(moviesSave));
        toast.success("Filme salvo com sucesso!")
    }

    if (loading) {
        return (
            <div>
                <h1>Carregando</h1>
            </div>
        )
    }

    return (
        <div className="Filme-Info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliação: {movie.vote_average} /10 </strong>

            <div className="Area-Buttons">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external noreferrer" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movie;
