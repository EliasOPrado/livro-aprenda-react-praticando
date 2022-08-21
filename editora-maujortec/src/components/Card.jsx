import React from "react";

const Card = (props) => {
  return (
    <>
      <h3 className="titPagina">{props.tituloPagina}</h3>
      <button type="button" className="btn" onClick={props.onAlterarTitulo}>
        Alterar Titulo Da Pagina
      </button>
      <p>
        ISBN:{props.dados.isbn}
        <br />
        Titulo:{props.dados.titulo}
        <br />
        Autor:{props.dados.autor}
        <br />
      </p>
      <hr />
    </>
  );
};

export default Card;
