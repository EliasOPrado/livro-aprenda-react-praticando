
import React, {Component} from 'react';
import {TabelaHead} from './components/TabelaHead';
import {TabelaBody} from './components/TabelaBody';
import {TabelaFoot} from './components/TabelaFoot';

class App extends Component {
  state = {
    livros:[]
}

componentDidMount(){
  // works similar as useEffect().
  fetch('/api/livros.json')
  .then(response => response.json())
  .then(livros => this.setState({livros:livros}))
  .finally(function(error){
    console.log('Sempre Retorna');
  });
};

handleRemoverLinha = (id) => {
  // usage: handleRemoverLinha(livro.id) 
  // somehow the code below pops out the id from the list.
  const livros = this.state.livros.filter(livro => livro.id !== id);
  this.setState({livros})
};

handleOrdernarCrescente = (titulo) => {
  const livros = this.state.livros.sort((a, b) => 
    a.titulo < b.titulo ? -1 : 0
  );
  livros.reverse();
  this.setState({livros});
};

handleOrdernarDecrescente = (titulo) => {
  const livros = this.state.livros.sort((a, b) => 
    a.titulo < b.titulo ? -1 : 0
  );
  this.setState({livros});
}



  render(){
    return (
      <table className="tabela">
        <TabelaHead
        ordernarCrescente={this.handleOrdernarCrescente}
        ordernarDecrescente={this.handleOrdernarDecrescente}
         />
        <TabelaBody 
        livros={this.state.livros}
        removerLinha={this.handleRemoverLinha}
        />
        <TabelaFoot qdelivros={this.state.livros.length}/>
      </table>
    );
  }
}


export default App;
