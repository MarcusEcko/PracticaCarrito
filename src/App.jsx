import { useState } from 'react'
import './App.css'
import Productos from './Components/Productos.jsx';
import Carrito from './Components/Carrito.jsx';

function App() {
  const [products, setProducts] = useState([
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
  const [mensaje, setMensaje] = useState('');
  

  const handleClick = element => {
    if(element.cantidad <= 0) {
      setMensaje(`El producto ${element.producto} ya no tiene unidades disponibles`);
      return;
    }

    const existe = carrito.find(item => item.producto === element.producto);
    
    if(!existe){
      setCarrito(prev => [...prev, {...element, cantidadCarrito: 1}]);
    } else {
      setCarrito(prev => 
        prev.map(item => item.producto === element.producto ? 
          {...item,  cantidadCarrito: item.cantidadCarrito + 1 } 
          : item
        )
      )
    }

    //restar producto
    setProducts(prev => 
      prev.map(item => 
        item.producto === element.producto ?
        {...item, cantidad: item.cantidad - 1} 
        : item
      )
    );
  }

  return(
    <div>
      <h2>Productos Disponibles:</h2>
      <ul>
        {products.map((element,index) => (
          <Productos key={index} element={element} onAdd={handleClick}/>
        ))}
      </ul>
      {mensaje && <p>{mensaje}</p>}

      <Carrito carrito={carrito}/>
    </div>
  )
}

export default App
