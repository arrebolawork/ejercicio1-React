import "./App.css";
// ✔️Crear un componente Person que acepte props name, surname y age, y nos muestre dichos datos dentro de etiquetas span.
// ✔️Utilizar al menos el mismo componente 3 veces con props que tengan valores diferentes.
// ✔️Crea el componente Person con functional component y con class component
import React from "react";
import Home from "./assets/component/Home";
// const Person = (props) => {
//   return (
//     <div>
//       <h1>
//         Mi nombre es <span>{props.name}</span>
//       </h1>
//       <h2>
//         Mi apellido es <span>{props.surname}</span> y tengo {props.age} años
//       </h2>
//     </div>
//   );
// };
// class Person extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           Mi nombre es <span>{this.props.name}</span>
//         </h1>
//         <h2>
//           Mi apellido es <span>{this.props.surname}</span> y tengo {this.props.age} años
//         </h2>
//       </div>
//     );
//   }
// }

function App() {
  return (
    // <div>
    //   <Person name='David' surname='Arrebola' age='43' />
    //   <Person name='Roberto' surname='García' age='28' />
    //   <Person name='María' surname='Lopova' age='30' />
    // </div>
    <>
      <Home />
    </>
  );
}

export default App;
