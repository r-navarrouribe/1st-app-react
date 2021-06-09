function App() {
  // aquí declaracions
  const tituloPagina = "Título";
  const titularNoticia = "Titular de la noticia";
  const categorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de política",
    "Noticias de espectáculos",
  ];
  const otrasCosas = ["Nosequé", "Nosecuanto", "Talycual"];
  const footer = true;
  const cuerpo = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam, adipisci commodi quo autem magnam sequi magni odio soluta temporibus velit quas!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sequi, dolorum autem alias commodi molestiae facere quibusdam beatae nulla error, dignissimos, libero vitae ratione porro. Delectus dolorem ad non esse.",
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
            <p className="mt-3">{cuerpo[0]}</p>
            <p className="mt-3">{cuerpo[1]}</p>
          </article>
          <aside className="bloque sidebar col-4">
            <section className="listado">
              <h3 className="titular-enlaces">Categorías</h3>
              <ul className="enlaces">
                <li>{categorias[0]}</li>
                <li>{categorias[1]}</li>
                <li>{categorias[2]}</li>
                <li>{categorias[3]}</li>
              </ul>
            </section>
            <section className="listado">
              <h3 className="titular-enlaces">Otras cosas</h3>
              <ul className="enlaces">
                <li>{otrasCosas[0]}</li>
                <li>{otrasCosas[1]}</li>
                <li>{otrasCosas[2]}</li>
              </ul>
            </section>
          </aside>
        </main>
        <footer className="row bloque pie">
          Texto del footer
          {footer ? " - Ningún derecho reservado, copia lo que quieras" : ""}
        </footer>
      </div>
    </>
  );
}

export default App;
