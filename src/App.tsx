import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navbar from "./componentes/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./componentes/tema/listatemas/ListaTemas"
import FormTema from "./componentes/tema/formtema/FormTema"
import DeletarTema from "./componentes/tema/deletartema/DeletarTema"
import ListaPostagens from "./componentes/postagem/listapostagem/ListaPostagem"
import FormPostagem from "./componentes/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./componentes/deletarpostagem/DeletarPostagem"




function App() {

  return (
    <>
    <AuthProvider>
  <BrowserRouter>
    <Navbar />
    <div className="min-h-[30vh]">
      <Routes>
        // path é a rota, element é o componente que vai ser renderizado
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/temas" element={<ListaTemas />} />
        <Route path="/cadastrartema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastrarpostagem" element={<FormPostagem />} />
          <Route path="/editarpostagem/:id" element={<FormPostagem />} />
          <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  </AuthProvider>
</>
     )
}

export default App
