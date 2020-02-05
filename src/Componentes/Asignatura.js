import React from "react";
import Alumno from "./Alumno";
const asignatura =(props) =>{
    let result = null;

    if(props.asignatura.visto){
        if(props.asignatura.visto2){
           result= (
            <div className="asignatura" >
                <h3 onClick= {props.clickAsignatura.bind(this, props.asignatura.asignatura)}>{props.asignatura.asignatura}</h3>
                <i>{props.asignatura.profesor}</i>
                <div className="boton">
                    <p onClick={props.clickNota.bind(this, props.asignatura.asignatura)}>mostrar nota</p>
                    <p className="datos">
                    <p>
                       Nota media: {props.notaMedia(props.asignatura.asignatura)}
                    </p>
                    <p>
                        Nota máxima: {props.notaMax(props.asignatura.asignatura)}
                    </p>
                    <p>
                        Nota mínima: {props.notaMin(props.asignatura.asignatura)}
                    </p>
                </p>
                </div>
                
                <div>
                    {props.asignatura.alumnos.map(alu => {
                    return <Alumno alumno={alu}></Alumno>
                     })}
                </div>
                
            </div>
           ); 
        }else{
            result = (
                <div className="asignatura">
                    <h3 onClick= {props.clickAsignatura.bind(this, props.asignatura.asignatura)}>{props.asignatura.asignatura}</h3>
                </div>
            );
        }
    }

    return result;
}

export default asignatura;