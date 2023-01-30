import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        const myList = localStorage.getItem("@moviesTips");
        setMovies(JSON.parse(myList) || [])
    },[])
    return(
        <div className='my-movies'>
            <h1>Meus Filmes Favoritos</h1>

            <ul>
                {movies.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;