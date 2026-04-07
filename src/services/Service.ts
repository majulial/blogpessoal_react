import axios from "axios";

//criação de uma instância do axios para ser utilizada em toda a aplicação
const api  = axios.create({
  baseURL: "https://blogpessoal-nest-rk5e.onrender.com"
})


// Função para Cadastrar Usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}

// Função para Autenticar Usuário
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}