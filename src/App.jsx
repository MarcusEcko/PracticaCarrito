import { useState } from 'react'
import './App.css'

function App() {
  const [products] = useState([
    {
      producto: 'producto1',
      descripcion: 'descripcion1',
      cantidad: 10
    },
    {
      producto: 'producto2',
      descripcion: 'descripcion2',
      cantidad: 10
    },
    {
      producto: 'producto3',
      descripcion: 'descripcion3',
      cantidad: 10
    },
  ]);
  const [carrito, setCarrito] = useState([]);
  
  const handleClick = element => {
    const existe = carrito.find(item => item.producto === element.producto);
    if(!existe){
      setCarrito(prev => [...prev, element]);
    }  
  }

  return(
    <div>
      <h2>Productos Disponibles:</h2>
      <ul>
        {products.map((element, index) => (
          <li key={index}>
            Nombre: {element.producto}<br/>
            Descrición: {element.descripcion}<br/>
            Cantidad: {element.cantidad}<br/>
            <button onClick={() => handleClick(element)}>Agregar al Carro</button>
          </li>
        ))}
      </ul>

      <h2>Carrito:</h2>
      <ul>
        {carrito.map((element, index) => (
          <li key={index}>
            Nombre: {element.producto}<br/>
            Descripcion: {element.descripcion}<br/>
            Cantidad: {element.cantidad}<br/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
