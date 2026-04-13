import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {
  const navigate = useNavigate()

  const { usuario } = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', 'info')
      navigate('/')
    }
  }, [token])

  return (
    <div className="flex justify-center px-4 py-4">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden">
        <img
          className="w-full h-40 md:h-52 object-cover border-b-8 border-white"
          src="https://i.imgur.com/ZZFAmzo.jpg"
          alt="Capa do Perfil"
        />

        <div className="bg-sky-500 text-white flex flex-col items-center pt-0 pb-10 rounded-b-2xl">
          <img
            className="rounded-full w-38 h-38 object-cover mx-auto -mt-20 border-4 border-white relative z-10 bg-white"
            src={usuario.foto || 'https://i.imgur.com/RSyykoH.png'}
            alt={`Foto de perfil de ${usuario.nome}`}
          />

          <div className="mt-4 text-center">
            <p className="text-xl md:text-2xl">Nome: {usuario.nome}</p>
            <p className="text-lg md:text-xl">Email: {usuario.usuario}</p>
          </div>

          <Link
            to="/atualizarusuario"
            className="mt-8"
          >
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Editar Perfil
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Perfil