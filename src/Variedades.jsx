const Variedades = (props) =>{
    return (
      <>
        <h2>{props.producto}</h2>
        <div>Tamano:<span> {props.tamano}</span></div>
        <div>Precio: <span> {props.precio}</span></div>
      </>
    )
  }
  export default Variedades;
  