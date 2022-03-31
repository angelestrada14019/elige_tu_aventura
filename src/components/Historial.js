function Historial({ historial, seleccionPrevia }) {
  return (
    <>
    <div >
        <h4>Historial seleccion</h4>
      {historial.map((h, i) => (
          <p key={i}>{i}-{h}</p>     
      ))}
    </div>
    <div>
        <h4>Seleccion anterior</h4>
        {seleccionPrevia}
    </div>
    </>
  );
}

export default Historial;
