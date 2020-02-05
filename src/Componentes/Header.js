import React from "react";
const header = (props)=>{
return(
    <div className="header">
        <p>
         <div className={props.styleCurso[0].className} onClick= {props.clickCurso.bind(this, 1)}>
            <p>Primero</p>
         </div>
         <div className={props.styleCurso[1].className} onClick= {props.clickCurso.bind(this, 2)}>
            <p>Segundo</p>
         </div>
         <div className={props.styleCurso[2].className} onClick= {props.clickCurso.bind(this,3)}>
            <p>Tercero</p>
         </div>
         <div className={props.styleCurso[3].className} onClick= {props.clickCurso.bind(this,0)}>
            <p>Todos</p>
         </div>
        </p>
        <p>
         <div className={props.styleNota[0].className} onClick= {props.clickAprobados.bind(this,1)}>
            <p>Aprobados</p>
         </div>
         <div className={props.styleNota[1].className} onClick= {props.clickAprobados.bind(this,2)}>
            <p>Suspensos</p>
         </div>
         <div className={props.styleNota[2].className} onClick= {props.clickAprobados.bind(this,0)}>
            <p>Todos</p>
         </div>
        </p>
    </div>
);
}
export default header;