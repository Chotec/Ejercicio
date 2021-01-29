import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaElementos: []
    }
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({ listaElementos: response }))
    .catch(console.log("Error al obtener la información"))
  }

  render(){
    return (
      <div className="App">
        <h1>Lista de elementos</h1>
        <ul>
          {
            !this.state.listaElementos ? 'Loading...' : 
            this.state.listaElementos.map((lista, i) =>{
              return <li>{"Nombre de usuario:"} {lista.name} / {"Correo de usuario:"} {lista.email}</li>
            })
          }
        </ul>
      </div>
    )
  }
  
}
export default App;