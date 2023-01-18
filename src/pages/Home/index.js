import { useEffect, use, useState } from 'react';
import api from '../../services/api';

///movie/now_playing?api_key=9db2f516918a30562ebfaa0b90f96945&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
            params:{
                api_key: "9db2f516918a30562ebfaa0b90f96945",
                language: "pt-BR",
                page: 1,
            }
            })

            console.log(response.data.results);
        }

        loadFilmes();
    }, [])

    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;