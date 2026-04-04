import { Link } from "react-router-dom"

function Navbar() {
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
            Postagens
            Temas
            Cadastrar tema
            Perfil
            Sair
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar