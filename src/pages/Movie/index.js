import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';

import api from "../../services/api";

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

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
                    console.log('Filme não encontrado')
                })
        }

        loadFilmes();



        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [])

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
            <button>Salvar</button>
            <button>
                <a href="#">Trailer</a>
            </button>
            </div>
        </div>
    )
}

export default Movie;
