function convertir() {
  const NumeroConver = document.querySelector("#NumeroConver");
  console.log(NumeroConver.value);
  const Select_1 = document.querySelector("#Select_1");
  console.log(Select_1.value);
  const Select_2 = document.querySelector("#Select_2");
  console.log(Select_2.value);

  if (Select_1.value === "0" && Select_2.value === "1") {
    Operaciones_0(NumeroConver.value);
  } else {
    if (Select_1.value === "0" && Select_2.value === "2") {
      Operaciones_0(NumeroConver.value);
    } else {
      if (Select_1.value === "0" && Select_2.value === "3") {
        Operaciones_0(NumeroConver.value);
      } else {
        if (Select_1.value === "0" && Select_2.value === "4") {
          Operaciones_0(NumeroConver.value);
        } else {
          if (Select_1.value === "0" && Select_2.value === "5") {
            Operaciones_0(NumeroConver.value);
          }
        }
      }
    }
  }

  if (Select_1.value === "1" && Select_2.value === "0") {
    Operaciones_1(NumeroConver.value);
  } else {
    if (Select_1.value === "1" && Select_2.value === "2") {
      Operaciones_1(NumeroConver.value);
    } else {
      if (Select_1.value === "1" && Select_2.value === "3") {
        Operaciones_1(NumeroConver.value);
      } else {
        if (Select_1.value === "1" && Select_2.value === "4") {
          Operaciones_1(NumeroConver.value);
        } else {
          if (Select_1.value === "1" && Select_2.value === "5") {
            Operaciones_1(NumeroConver.value);
          }
        }
      }
    }
  }

  if (Select_1.value === "2" && Select_2.value === "0") {
    Operaciones_2(NumeroConver.value);
  } else {
    if (Select_1.value === "2" && Select_2.value === "1") {
      Operaciones_2(NumeroConver.value);
    } else {
      if (Select_1.value === "2" && Select_2.value === "3") {
        Operaciones_2(NumeroConver.value);
      } else {
        if (Select_1.value === "2" && Select_2.value === "4") {
          Operaciones_2(NumeroConver.value);
        } else {
          if (Select_1.value === "2" && Select_2.value === "5") {
            Operaciones_2(NumeroConver.value);
          }
        }
      }
    }
  }

  if (Select_1.value === "3" && Select_2.value === "0") {
    Operaciones_3(NumeroConver.value);
  } else {
    if (Select_1.value === "3" && Select_2.value === "1") {
      Operaciones_3(NumeroConver.value);
    } else {
      if (Select_1.value === "3" && Select_2.value === "2") {
        Operaciones_3(NumeroConver.value);
      } else {
        if (Select_1.value === "3" && Select_2.value === "4") {
          Operaciones_3(NumeroConver.value);
        } else {
          if (Select_1.value === "3" && Select_2.value === "5") {
            Operaciones_3(NumeroConver.value);
          }
        }
      }
    }
  }

  if (Select_1.value === "4" && Select_2.value === "0") {
    Operaciones_4(NumeroConver.value);
  } else {
    if (Select_1.value === "4" && Select_2.value === "1") {
      Operaciones_4(NumeroConver.value);
    } else {
      if (Select_1.value === "4" && Select_2.value === "2") {
        Operaciones_4(NumeroConver.value);
      } else {
        if (Select_1.value === "4" && Select_2.value === "3") {
          Operaciones_4(NumeroConver.value);
        } else {
          if (Select_1.value === "4" && Select_2.value === "5") {
            Operaciones_4(NumeroConver.value);
          }
        }
      }
    }
  }

  if (Select_1.value === "5" && Select_2.value === "0") {
    Operaciones_5(NumeroConver.value);
  } else {
    if (Select_1.value === "5" && Select_2.value === "1") {
      Operaciones_5(NumeroConver.value);
    } else {
      if (Select_1.value === "5" && Select_2.value === "2") {
        Operaciones_5(NumeroConver.value);
      } else {
        if (Select_1.value === "5" && Select_2.value === "3") {
          Operaciones_5(NumeroConver.value);
        } else {
          if (Select_1.value === "5" && Select_2.value === "4") {
            Operaciones_5(NumeroConver.value);
          }
        }
      }
    }
  }

}

const reload = document.getElementById("reload");

reload.addEventListener("click", (_) => {
  // el _ es para indicar la ausencia de parametros
  location.reload();
});

function Operaciones_0(a) {
  const x = parseFloat(a);
  //alert(`el valor de la conversion de ${NumeroConver.value} Toneladas a Kilgoramos es: ${x * 1000} KG `);
  if (Select_1.value === "0" && Select_2.value === "1") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Toneladas a Kilogramos es: ${x * 1000} KG `;
  }
  if (Select_1.value === "0" && Select_2.value === "2") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Toneladas a Gramos es: ${x * 1000000} g `;
  }
  if (Select_1.value === "0" && Select_2.value === "3") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Toneladas a Microgramos es: ${x * 1000000} μg `;
  }
  if (Select_1.value === "0" && Select_2.value === "4") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Toneladas a Libras US es: ${x * 2204.62} Lb `;
  }
  if (Select_1.value === "0" && Select_2.value === "5") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Toneladas a Onzas es: ${x * 35270} Oz `;
  }
}

function Operaciones_1(a){
  const x = parseFloat(a);

  if (Select_1.value === "1" && Select_2.value === "0") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Kilogramos a toneladas es: ${x / 1000} T `;
  }
  if (Select_1.value === "1" && Select_2.value === "2") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Kilogramos a Gramos es: ${x * 1000} g `;
  }
  if (Select_1.value === "1" && Select_2.value === "3") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Kilogramos a Microgramos es: ${x * 1000000000} μg `;
  }
  if (Select_1.value === "1" && Select_2.value === "4") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Kilogramos a Libras US es: ${x * 2.2046} Lb `;
  }
  if (Select_1.value === "1" && Select_2.value === "5") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Kilogramos a Onzas es: ${x * 35.2739} Oz `;
  }
}

function Operaciones_2(a){
  const x = parseFloat(a);

  if (Select_1.value === "2" && Select_2.value === "0") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Gramos a toneladas es: ${x / 1000000} T `;
  }
  if (Select_1.value === "2" && Select_2.value === "1") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Gramos a Kilogramos es: ${x / 1000} Kg `;
  }
  if (Select_1.value === "2" && Select_2.value === "3") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Gramos a Microgramos es: ${x * 1000000} μg `;
  }
  if (Select_1.value === "2" && Select_2.value === "4") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Gramos a Libras US es: ${x * 0.00220462} Lb `;
  }
  if (Select_1.value === "2" && Select_2.value === "5") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Gramos a Onzas es: ${x * 0.035274} Oz `;
  }
};

function Operaciones_3(a){
  const x = parseFloat(a);

  if (Select_1.value === "3" && Select_2.value === "0") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Microgramos a toneladas es: ${x / 1000000000000} T `;
  }
  if (Select_1.value === "3" && Select_2.value === "1") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Microgramos a Kilogramos es: ${x / 1000000000} Kg `;
  }
  if (Select_1.value === "3" && Select_2.value === "2") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Microgramos a Gramos es: ${x / 1000000} g `;
  }
  if (Select_1.value === "3" && Select_2.value === "4") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Microgramos a Libras US es: ${x * 0.0000000022046} Lb `;
  }
  if (Select_1.value === "3" && Select_2.value === "5") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Gramos a Onzas es: ${x * 0.000000035274} Oz `;
  }
};

function Operaciones_4(a){
  const x = parseFloat(a);

  if (Select_1.value === "4" && Select_2.value === "0") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Libras US a toneladas es: ${x / 2204.6} T `;
  }
  if (Select_1.value === "4" && Select_2.value === "1") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Libras US a Kilogramos es: ${x / 2.2046} Kg `;
  }
  if (Select_1.value === "4" && Select_2.value === "2") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Libras US a Gramos es: ${x * 453.6} g `;
  }
  if (Select_1.value === "4" && Select_2.value === "3") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Libras US a Microgramos es: ${x / 0.0000000022046} μg `;
  }
  if (Select_1.value === "4" && Select_2.value === "5") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Libras US a Onzas es: ${x * 16} Oz `;
  }
};

function Operaciones_5(a){
  const x = parseFloat(a);

  if (Select_1.value === "5" && Select_2.value === "0") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Onzas a toneladas es: ${x / 35274} T `;
  }
  if (Select_1.value === "5" && Select_2.value === "1") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Onzas a Kilogramos es: ${x / 35.274} Kg `;
  }
  if (Select_1.value === "5" && Select_2.value === "2") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Onzas a Gramos es: ${x * 28.35} g `;
  }
  if (Select_1.value === "5" && Select_2.value === "3") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Onzas a Microgramos es: ${x / 0.000000035274} μg `;
  }
  if (Select_1.value === "5" && Select_2.value === "4") {
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `el valor de la conversion de ${
      NumeroConver.value
    } Onzas a Libras es: ${x / 16} Lb `;
  }
};