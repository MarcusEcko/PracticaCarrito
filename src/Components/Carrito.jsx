function Carrito ({ carrito }) {
    return(
        <div>
            <h2>Carrito:</h2>
            <ul>
                {carrito.map((element, index) => (
                    <li key={index}>
                        Nombre: {element.producto}<br/>
                        Descripcion: {element.descripcion}<br/>
                        Cantidad: {element.cantidadCarrito}<br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carrito;