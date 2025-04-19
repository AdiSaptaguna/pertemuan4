// import React from 'react';
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       judul: "Ini dari State",
//       dataPotoRandom: this.props.list,
//     }
//   }

//   render() {
//     return (
//       <div>
     
//         <h2>{this.state.judul}</h2>
//         <p>Mengakses props dari App secara langsung : {this.props.dataPotoRandom}</p>
//       </div>
//     );
//   }
// }
// export default Header


// function Header () {
//   const[judul] = useState("ini dari state");
//   const[list] = useState("4 poto random");
//     return (
//       <div>
//         <h2>Poto Random</h2>
//         <p>{list}</p>
//         <p>{judul}</p>
//       </div>
//     );
// }

import React,{Component} from "react";

class Header extends Component{
  constructor(props){
    super(props);
    this.state= {
      judul : "ini judul dari state",
      dataMakanan : this.props.list,
    }
  }

  render(){
    return(
      <div>
        <h2>Component dari class Header</h2>
        <h3>{this.state.judul}</h3>
        <p>mengakses props dari app secara langsung : {this.props.list}</p>
        <p>mengakses props dari state : {this.state.dataMakanan}</p>
      </div>
    )
  }
}

export default Header;