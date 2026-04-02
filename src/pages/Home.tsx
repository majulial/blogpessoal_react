import React from 'react'

function Home() {
  return (
    <section className="bg-indigo-900 flex justify-center">

    <article className=" container grid grid-cols-2 text-white">
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5l font-bold">My Blog</h2>
      <p className="text-xl">Welcome to my blog!</p>

      <div className="flex justify-around gap-4">
        <div className="rounded border-white norder-solid border-2 py2 px-4">Nova Postagem</div>
      </div>
    </div>

    <figure className="flex justify-center">
      <img src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home" style={{
                              width: "60%"
                            }} />
    </figure>

    </article>

    </section>
  )
}

export default Home