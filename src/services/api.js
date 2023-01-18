import axios from "axios";

//Base da RRL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=9db2f516918a30562ebfaa0b90f96945&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;