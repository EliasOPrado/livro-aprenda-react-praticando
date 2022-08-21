import React, { Component } from "react";
import Card from "./Card";

class Principal extends Component {
  state = {
    tituloPagina: "Ultimos lancamentos",
    dados: {
      isbn: "ISBN: 978-85-7522-xxx-x",
      titulo: "React",
      autor: "Maujor",
    },
  };

  handleAlterarTitulo = () => {
    let titulo = "";
    this.state.tituloPagina === "Ultimos lancamentos"
      ? (titulo = "Categoria Programacao")
      : (titulo = "Ultimos lancamentos");

    this.setState({ tituloPagina: titulo });
  };
  render() {
    return (
      <>
        <Card
          tituloPagina={this.state.tituloPagina}
          dados={this.state.dados}
          onAlterarTitulo={this.handleAlterarTitulo}
        />
      </>
    );
  }
}

export default Principal;
