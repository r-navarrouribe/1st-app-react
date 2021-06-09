function App() {
  // aquí declaracions
  const tituloPagina = "Título";
  const titularNoticia = "Titular de la noticia";
  const categorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de política",
    "Noticias de espectáculos",
  ].map((categoria) => <li>{categoria}</li>);
  const otrasCosas = ["Nosequé", "Nosecuanto", "Talycual"].map((otraCosa) => (
    <li>{otraCosa}</li>
  ));
  const footer = true;
  const cuerpo = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam, adipisci commodi quo autem magnam sequi magni odio soluta temporibus velit quas!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sequi, dolorum autem alias commodi molestiae facere quibusdam beatae nulla error, dignissimos, libero vitae ratione porro. Delectus dolorem ad non esse.",
  ].map((parrafo) => <p>{parrafo}</p>);
  return (
    <>
      <div className="contenedor-general container">
        <header className="bloque cabecera row">
          <h1 className="titular-pagina">{tituloPagina}</h1>
        </header>
        <main className="contenedor-principal row">
          <article className="bloque principal col-8">
            <h2 className="titular-noticia">{titularNoticia}</h2>
            {cuerpo}
          </article>
          <aside className="bloque sidebar col-4">
            <section className="listado">
              <h3 className="titular-enlaces">Categorías</h3>
              <ul className="enlaces">{categorias}</ul>
            </section>
            <section className="listado">
              <h3 className="titular-enlaces">Otras cosas</h3>
              <ul className="enlaces">{otrasCosas}</ul>
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
