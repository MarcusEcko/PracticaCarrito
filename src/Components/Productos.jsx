function Productos ({element, onAdd}){
    return(
        <li>
            Nombre: {element.producto}<br/>
            Descrición: {element.descripcion}<br/>
            Cantidad: {element.cantidad}<br/>
            <button onClick={() => onAdd(element)}>Agregar al Carro</button>
        </li>
    )
}

export default Productos;