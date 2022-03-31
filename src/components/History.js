import React, { Component } from "react";
import data from "./data.json";
import Historial from "./Historial";
import Opcion from "./Opcion";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      seleccionPrevia: "",
      loadingH: false,
      loading: false,
      contador: 0,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.state.historial.push(this.state.seleccionPrevia);
    }
    setTimeout(() => {
      this.setState({ loadingH: true });
    }, 100);
  }

  actualizarHistoria = (e) => {
    if (this.state.contador < data.length - 2) {
      let id = e.target.id;
      if (id === "A") {
        this.actualizarA();
      } else {
        this.actualizarB();
      }
    } else {
      Swal.fire({
        icon: "success",
        text: "Has terminado!",
      });
    }
  };
  actualizarA() {
    if (this.state.seleccionPrevia === "A") {
      this.setState({
        seleccionPrevia: "A",
        contador: this.state.contador + 2,
      });
    } else {
      this.setState({
        seleccionPrevia: "A",
        contador: this.state.contador + 1,
      });
    }
  }
  actualizarB() {
    if (this.state.seleccionPrevia === "A") {
      this.setState({
        seleccionPrevia: "B",
        contador: this.state.contador + 3,
      });
    } else {
      this.setState({
        seleccionPrevia: "B",
        contador: this.state.contador + 2,
      });
    }
  }

  render() {
    const { loading, loadingH, contador } = this.state;

    return loading ? (
      <div className="layout ">
        <h1>Elige tu propia historia</h1>
        <div className="historia">
          <p>{data[contador].historia}</p>
        </div>

        <div className="opcion">
          <Opcion
            funcion={this.actualizarHistoria}
            opcion={data[contador].opciones.a}
            nombreId="A"
          />

          <Opcion
            funcion={this.actualizarHistoria}
            opcion={data[contador].opciones.b}
            nombreId="B"
          />
        </div>

        <div className="recordatorio">
          <h2>Historial</h2>
          {loadingH && (
            <Historial
              historial={this.state.historial}
              seleccionPrevia={this.state.seleccionPrevia}
            />
          )}
        </div>
      </div>
    ) : (
      <div className="loader">
          <div>
          <BallTriangle
          heigth="100"
          width="100"
          color="black"
          ariaLabel="loading-indicator"
        />
          </div>
        
      </div>
    );
  }
}

export default History;
