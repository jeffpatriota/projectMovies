import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

///movie/now_playing?api_key=9db2f516918a30562ebfaa0b90f96945&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "9db2f516918a30562ebfaa0b90f96945",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if (loading) {
        return(
            <div className='Loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='Container'>
            <div className='Lista-filmes'>
                {
                    filmes.map((item) => {
                        return (
                            <article key={item.id}>
                                <strong>{item.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                                <Link to={`/filme/${item.id}`}>Acessar</Link>
                            </article>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home;