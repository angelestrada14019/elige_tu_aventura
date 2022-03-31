import "../index.css";
import React from "react";
function Historial({funcion,opcion,nombreId}) {
    return (  
        <> 
            
            <button id={nombreId} onClick={funcion} className='opciones botones'>{nombreId}</button>
                <span>{opcion}</span>
          
            </>  
     );
}

export default Historial;