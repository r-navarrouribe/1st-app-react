function App() {
  // aquí declaracions
  const tituloPagina = "Título";
  const titularNoticia = "Titular de la noticia";
  const categorias = [
    { id: 1, titulo: "Noticias de deporte" },
    { id: 2, titulo: "Noticias de ocio" },
    { id: 3, titulo: "Noticias de política" },
    { id: 4, titulo: "Noticias de espectáculos" },
  ];
  const otrasCosas = [
    { id: 1, titulo: "Nosequé" },
    { id: 2, titulo: "Nosecuanto" },
    { id: 3, titulo: "Talycual" },
  ];
  const footer = true;
  const cuerpo = [
    {
      id: 1,
      contenido:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam, adipisci commodi quo autem magnam sequi magni odio soluta temporibus velit quas!",
    },
    {
      id: 2,
      contenido:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sequi, dolorum autem alias commodi molestiae facere quibusdam beatae nulla error, dignissimos, libero vitae ratione porro. Delectus dolorem ad non esse.",
    },
  ];
  return (
    <>
      <div className="contenedor-general container">
        <header className="bloque cabecera row">
          <h1 className="titular-pagina">{tituloPagina}</h1>
        </header>
        <main className="contenedor-principal row">
          <article className="bloque principal col-8">
            <h2 className="titular-noticia">{titularNoticia}</h2>
            {cuerpo.map((parrafo) => (
              <p key={parrafo.id}>{parrafo.contenido}</p>
            ))}
          </article>
          <aside className="bloque sidebar col-4">
            <section className="listado">
              <h3 className="titular-enlaces">Categorías</h3>
              <ul className="enlaces">
                {categorias.map((categoria) => (
                  <li key={categoria.id}>{categoria.titulo}</li>
                ))}
              </ul>
            </section>
            <section className="listado">
              <h3 className="titular-enlaces">Otras cosas</h3>
              <ul className="enlaces">
                {otrasCosas.map((otraCosa) => (
                  <li key={otraCosa.id}>{otraCosa.titulo}</li>
                ))}
              </ul>
            </section>
          </aside>
        </main>
        <footer className="row bloque pie">
          Texto del footer
          {footer && " - Ningún derecho reservado, copia lo que quieras"}
        </footer>
      </div>
    </>
  );
}

export default App;
