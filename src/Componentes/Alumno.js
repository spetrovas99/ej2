import React from "react";
const alumno = (props)=>{
    let result = null;
    if(props.alumno.visto){
        if(props.alumno.visto2){
            result = (
                <div style={{display: "flex"}}>
                    <div className="alumnos">
                        {props.alumno.nombre}
                    </div>
                    <div className="nota">{props.alumno.nota}</div>
                </div>
            );       
        }else{
            result = (
                <div style={{display: "flex"}}>
                    <div className="alumnos">
                        {props.alumno.nombre}
                    </div>
                </div>
            );  
        }
        
    }
    return result;
}
export default alumno;