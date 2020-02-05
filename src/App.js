import React, { Component } from 'react';
import './App.css';
import Asignatura from './Componentes/Asignatura';
import Header from './Componentes/Header';
import cloneDeep from "clone-deep";
class App extends Component {
  state = {
    styleCurso: [
      {
        className: "boton"
      },
      {
        className: "boton"
      },
      {
        className: "boton"
      },
      {
        className: "boton"
      }
    ],

    styleNota: [
      {
        className: "boton"
      },
      {
        className: "boton"
      },
      {
        className: "boton"
      },
    ],

    data: [
      {
        asignatura: "Programacion I",
        id: 1,
        curso: 1,
        profesor: "Alberto Valero",
        visto : false,
        visto2 : false,
        alumnos: [
          {
            id: 1,
            nombre: "Marcos Alonso",
            nota: 7,
            visto: true
          },
          {
            id: 2,
            nombre: "Luis Rodri",
            nota: 4,
            visto: true
          },
          {
            id: 3,
            nombre: "Mariana Simbiotica",
            nota: 6,
            visto: true
          }
        ]
      },
      {
        asignatura: "Estructura de Datos",
        id: 2,
        curso: 1,
        profesor: "Jose Emilio Torres",
        visto : false,
        visto2 : false,
        alumnos: [
          {
            id: 1,
            nombre: "Marcos Alonso",
            nota: 2,
            visto: true
          },
          {
            id: 2,
            nombre: "Luis Rodri",
            nota: 4,
            visto: true
          },
          {
            id: 3,
            nombre: "Mariana Simbiotica",
            nota: 6,
            visto: true
          }
        ]
      },
      {
        asignatura: "Java",
        id: 3,
        curso: 2,
        profesor: "Jorge Comosellame",
        visto : false,
        visto2 : false,
        alumnos: [
          {
            id: 4,
            nombre: "Agustina Agatiello",
            nota: 9,
            visto: true,
            visto2: true
          },
          {
            id: 5,
            nombre: "Alberto Obo",
            nota: 4,
            visto: true,
            visto2: true
          },
          {
            id: 6,
            nombre: "Simon Perico",
            nota: 6,
            visto: true,
            visto2: true
          }
        ]
      },
      {
        asignatura: "Backend",
        id: 4,
        curso: 3,
        profesor: "Alberto Otravez",
        visto : false,
        visto2 : false,
        alumnos: [
          {
            id: 7,
            nombre: "Mateo",
            nota: 9,
            visto: true,
            visto2: true
          },
          {
            id: 8,
            nombre: "Luis Tengounaduda",
            nota: 10,
            visto: true,
            visto2: true
          },
          {
            id: 9,
            nombre: "Estefaniaaaa",
            nota: 6,
            visto: true,
            visto2: true
          }
        ]
      }
    ]    
  };

  cursoHandler = (curso)=>{
    let result = cloneDeep(this.state.data);
    let styles = cloneDeep(this.state.styleCurso);

    styles.map(style => {
      style.className = "boton";
      return style;
    });

    styles[(curso + 3) % 4].className = "botonBrillo";

    result.map(elem =>{
      if(curso === elem.curso || curso === 0){
        elem.visto = true;
      } else {
        elem.visto = false;
      }

      return elem;
    })
    this.setState({data: result, styleCurso: styles});
  }

  aprobadosHandler=(nota)=>{
    let styles = cloneDeep(this.state.styleNota);
    let result = cloneDeep(this.state.data);

    styles.map(style => {
      style.className = "boton";
      return style;
    })
    styles[(nota + 2) % 3].className = "botonBrillo";

    result.forEach(asignatura => {
      asignatura.alumnos.map(alumno =>{
        if(nota === 0 || (nota === 1 && alumno.nota >= 5) || (nota === 2 && alumno.nota < 5)){
          alumno.visto = true;
        }else{
          alumno.visto = false;
        }
        return alumno;
      })
    });
    this.setState({data: result, styleNota: styles});
  }

  asignaturaHandler=(nombre)=>{
    let result = cloneDeep(this.state.data);
    result.map(elem => { 
      if(nombre === elem.asignatura){
        elem.visto2 = !elem.visto2;
      }
      return elem;
    })
    this.setState({data: result});
  }

  notaHandler =(nombreAsignatura)=>{
    let result = cloneDeep(this.state.data);
    const asign = result.find(asignatura => asignatura.asignatura === nombreAsignatura);
    asign.alumnos.map(alumno => {
      alumno.visto2 = !alumno.visto2;
      return alumno;
    });
    this.setState({data: result});
  }
  notaMedia = (nombreAsignatura) =>{
   let nota = 0;
    let result = cloneDeep(this.state.data);
    const asign = result.find(asignatura => asignatura.asignatura === nombreAsignatura);
    asign.alumnos.forEach(alumno => {
      nota = nota + alumno.nota;
    });

    nota = nota/asign.alumnos.length;
    return nota.toFixed(2);
  }
  notaMax = (nombreAsignatura) =>{
   let nota = 0;
    let result = cloneDeep(this.state.data);
    const asign = result.find(asignatura => asignatura.asignatura === nombreAsignatura);
    asign.alumnos.forEach(alumno => {
      if(alumno.nota > nota){
        nota = alumno.nota;
      }
      return nota;
    });
    return nota.toFixed(2);
  }
    notaMin = (nombreAsignatura) =>{
     let nota = 10;
      let result = cloneDeep(this.state.data);
      const asign = result.find(asignatura => asignatura.asignatura === nombreAsignatura);
      asign.alumnos.forEach(alumno => {
        if(alumno.nota < nota){
          nota = alumno.nota;
        }
        return nota;
      });
      return nota.toFixed(2);
    }
  
  render(){
    return (
      <div className="App">
        <Header 
          clickCurso = {this.cursoHandler} 
          clickAprobados = {this.aprobadosHandler} 
          styleCurso={this.state.styleCurso}
          styleNota={this.state.styleNota}
        />

        {this.state.data.map(asignatura=>
        <Asignatura 
          clickAsignatura ={this.asignaturaHandler}
          clickNota ={this.notaHandler}
          asignatura={asignatura}
          notaMin= {this.notaMin}
          notaMax= {this.notaMax}
          notaMedia = {this.notaMedia}
        />)}
      </div>
    );
  }
  
}

export default App;
