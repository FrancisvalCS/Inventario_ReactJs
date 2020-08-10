import React, {Component} from 'react';
import './home.css';


class Home extends Component{
  render(){
    return(
      <section className="container">
         <div className="form">
           <form onSubmit={this.insert} id="insert" className="insert">
                <button type="submit">Inserir</button>
           </form>
           <form onSubmit={this.search} id="search" className="search">
              <button type="submit">Pesquisar</button>
           </form>
         </div>
      </section>
    );
  }
}

export default Home;