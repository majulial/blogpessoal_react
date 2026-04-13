import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// Importa os ícones das redes sociais da biblioteca Phosphor Icons

function Footer() {

  let data = new Date().getFullYear()
  // Pega o ano atual automaticamente (ex: 2026)

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
   
      <div className="flex justify-center bg-indigo-900 text-white">
        {/* flex → ativa flexbox
           justify-center → centraliza horizontalmente o conteúdo
           bg-indigo-900 → fundo roxo escuro
           text-white → texto branco
        */}

        <div className="container flex flex-col items-center py-4">
          {/* container → limita a largura e centraliza o conteúdo
             flex → ativa flexbox
             flex-col → organiza os itens em coluna (um embaixo do outro)
             items-center → centraliza os itens horizontalmente
             py-4 → padding vertical (cima e baixo)
          */}

          <p className='text-xl font-bold'>
            {/* text-xl → texto maior
               font-bold → texto em negrito
            */}
            Blog Pessoal Generation | Copyright: {data}
          </p>

          <p className='text-lg'>
            {/* text-lg → texto médio */}
            Acesse nossas redes sociais
          </p>

          <div className='flex gap-2'>
            {/* flex → coloca os ícones em linha
               gap-2 → espaço entre os ícones
            */}

            <LinkedinLogoIcon size={48} weight='bold' />
            <InstagramLogoIcon size={48} weight='bold' />
            <FacebookLogoIcon size={48} weight='bold' />
            {/* size={48} → tamanho do ícone
               weight='bold' → deixa o ícone mais "grosso"
            */}

          </div>

        </div>
      </div>

    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Footer