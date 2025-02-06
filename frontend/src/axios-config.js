import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000"

//cabeçalho da requisicao (transferindo dados em json)
axios.defaults.headers.post["Content-Type"] = "application/json"
// Tempo que o axios vai desistir da requisição (10s)
axios.defaults.timeout = 10000

export default axios;