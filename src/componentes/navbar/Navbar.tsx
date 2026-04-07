import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    // Consumo do Contexto AuthContext
    // usamos a desestruturação para selecionar apenas o que precisamos
    const { handleLogout } = useContext(AuthContext);

    function logout() {
  handleLogout();
  alert('O Usuário foi desconectado com sucesso!');
  navigate("/");
}

  return (
    <>
    {/* w-full = width: 100%, p-4 = padding: 1rem */}
      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
        {/* container = define a largura máxima fixa e centraliza toda margin deixando left e right auto, mx-8 = margin left e right 2rem, text-lg = font-size: 1.125rem line-height: 1.75 */}
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="font-bold text-2xl">
          Blog Pessoal
          </Link>

           {/* flex = display: flex, gap-4 = gap: 1rem */}
          <div className='flex gap-4'>
            <Link to="/postagens" className="hover:text-indigo-300">
              Postagens
            </Link>
            <Link to="/temas" className="hover:text-indigo-300">
              Temas
            </Link>
            <Link to="/cadastro" className="hover:text-indigo-300">
              Cadastrar
            </Link>
            <Link to="/perfil" className="hover:text-indigo-300">
              Perfil
            </Link>
            <Link to='' onClick={logout} className="hover:text-indigo-300">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar