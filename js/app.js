// Renderizar productos
const renderizarProductos = async () => {
  const stockIndex = await fetch("./productosIndex.json");
  const stock = await stockIndex.json();
  stock.forEach((productos) => {
    const tarjetaPrincipal = document.createElement("div");
    tarjetaPrincipal.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                10% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 110) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                        data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalIndex.append(tarjetaPrincipal);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    const buttonFav = document.querySelectorAll(".addWishlist");
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    }),
    buttonFav.forEach((btnFav) => {
      btnFav.addEventListener("click", addToCarritoItemFAV);
    });
  });
};

const renderizarProductosFutbol = async () => {
  const stockFutbol = await fetch("../.././productosFutbol.json");
  const stock2 = await stockFutbol.json();
  stock2.forEach((productos) => {
    const tarjetaPrincipalFutbol = document.createElement("div");
    tarjetaPrincipalFutbol.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                            
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalFutbol.append(tarjetaPrincipalFutbol);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosNBA = async () => {
  const stockNBA = await fetch("../.././productosNBA.json");
  const stock3 = await stockNBA.json();
  stock3.forEach((productos) => {
    const tarjetaPrincipalNBA = document.createElement("div");
    tarjetaPrincipalNBA.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                              
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                        data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalNBA.append(tarjetaPrincipalNBA);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosZAPAS = async () => {
  const stockZAPAS = await fetch("../.././productosZAPAS.json");
  const stock4 = await stockZAPAS.json();
  stock4.forEach((productos) => {
    const tarjetaPrincipalZAPAS = document.createElement("div");
    tarjetaPrincipalZAPAS.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                10% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 110) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalZAPAS.append(tarjetaPrincipalZAPAS);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosNIKE = async () => {
  const stockNIKE = await fetch("../.././productosNIKE.json");
  const stock6 = await stockNIKE.json();
  stock6.forEach((productos) => {
    const tarjetaPrincipalNIKE = document.createElement("div");
    tarjetaPrincipalNIKE.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                10% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 110) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                        data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalNIKE.append(tarjetaPrincipalNIKE);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosADIDAS = async () => {
  const stockADIDAS = await fetch("../.././productosADIDAS.json");
  const stock5 = await stockADIDAS.json();
  stock5.forEach((productos) => {
    const tarjetaPrincipalADIDAS = document.createElement("div");
    tarjetaPrincipalADIDAS.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalADIDAS.append(tarjetaPrincipalADIDAS);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosPUMA = async () => {
  const stockPUMA = await fetch("../.././productosPUMA.json");
  const stock7 = await stockPUMA.json();
  stock7.forEach((productos) => {
    const tarjetaPrincipalPUMA = document.createElement("div");
    tarjetaPrincipalPUMA.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalPUMA.append(tarjetaPrincipalPUMA);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosASICS = async () => {
  const stockASICS = await fetch("../.././productosASICS.json");
  const stock8 = await stockASICS.json();
  stock8.forEach((productos) => {
    const tarjetaPrincipalASICS = document.createElement("div");
    tarjetaPrincipalASICS.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalASICS.append(tarjetaPrincipalASICS);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosCONVERSE = async () => {
  const stockCONVERSE = await fetch("../.././productosCONVERSE.json");
  const stock9 = await stockCONVERSE.json();
  stock9.forEach((productos) => {
    const tarjetaPrincipalCONVERSE = document.createElement("div");
    tarjetaPrincipalCONVERSE.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalCONVERSE.append(tarjetaPrincipalCONVERSE);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosFILA = async () => {
  const stockFILA = await fetch("../.././productosFILA.json");
  const stock10 = await stockFILA.json();
  stock10.forEach((productos) => {
    const tarjetaPrincipalFILA = document.createElement("div");
    tarjetaPrincipalFILA.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalFILA.append(tarjetaPrincipalFILA);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosNEW_BALANCE = async () => {
  const stockNEW_BALANCE = await fetch("../.././productosNEW_BALANCE.json");
  const stock11 = await stockNEW_BALANCE.json();
  stock11.forEach((productos) => {
    const tarjetaPrincipalNEW_BALANCE = document.createElement("div");
    tarjetaPrincipalNEW_BALANCE.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalNEW_BALANCE.append(tarjetaPrincipalNEW_BALANCE);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosPONY = async () => {
  const stockPONY = await fetch("../.././productosPONY.json");
  const stock12 = await stockPONY.json();
  stock12.forEach((productos) => {
    const tarjetaPrincipalPONY = document.createElement("div");
    tarjetaPrincipalPONY.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalPONY.append(tarjetaPrincipalPONY);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosREEBOK = async () => {
  const stockREEBOK = await fetch("../.././productosREEBOK.json");
  const stock13 = await stockREEBOK.json();
  stock13.forEach((productos) => {
    const tarjetaPrincipalREEBOK = document.createElement("div");
    tarjetaPrincipalREEBOK.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalREEBOK.append(tarjetaPrincipalREEBOK);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosTOPPER = async () => {
  const stockTOPPER = await fetch("../.././productosTOPPER.json");
  const stock14 = await stockTOPPER.json();
  stock14.forEach((productos) => {
    const tarjetaPrincipalTOPPER = document.createElement("div");
    tarjetaPrincipalTOPPER.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalTOPPER.append(tarjetaPrincipalTOPPER);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosUNDER_ARMOUR = async () => {
  const stockUNDER_ARMOUR = await fetch("../.././productosUNDER_ARMOUR.json");
  const stock15 = await stockUNDER_ARMOUR.json();
  stock15.forEach((productos) => {
    const tarjetaPrincipalUNDER_ARMOUR = document.createElement("div");
    tarjetaPrincipalUNDER_ARMOUR.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-primary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalUNDER_ARMOUR.append(tarjetaPrincipalUNDER_ARMOUR);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

const renderizarProductosVANS = async () => {
  const stockVANS = await fetch("../.././productosVANS.json");
  const stock16 = await stockVANS.json();
  stock16.forEach((productos) => {
    const tarjetaPrincipalVANS = document.createElement("div");
    tarjetaPrincipalVANS.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${
                              productos.img
                            } alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${
                                      productos.nombre
                                    }</h5>
                                    <span class="text-muted text-decoration-line-through">${
                                      (productos.precio * 120) / 100
                                    }</span>
                                    <h5 class="fw-bolderPrecio item-precio">${
                                      productos.precio
                                    }</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                <button type="button" class="btn btn-outline-pr
                                imary addWishlist"
                                data-id="1"></button>
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `;
    tarjetaTotalVANS.append(tarjetaPrincipalVANS);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  });
};

// Carrito:
let carrito = [];
let favoritos = [];
// Lista de cards donde voy a renderizar productos
const tarjetaTotalIndex = document.querySelector(".listaDeCards");
const tarjetaTotalFutbol = document.querySelector(".listaCardsFutbol");
const tarjetaTotalNBA = document.querySelector(".listaCardsNBA");
const tarjetaTotalZAPAS = document.querySelector(".listaCardsZAPAS");
const tarjetaTotalADIDAS = document.querySelector(".listaCardsADIDAS");
const tarjetaTotalNIKE = document.querySelector(".listaCardsNIKE");
const tarjetaTotalPUMA = document.querySelector(".listaCardsPUMA");
const tarjetaTotalASICS = document.querySelector(".listaCardsASICS");
const tarjetaTotalCONVERSE = document.querySelector(".listaCardsCONVERSE");
const tarjetaTotalFILA = document.querySelector(".listaCardsFILA");
const tarjetaTotalNEW_BALANCE = document.querySelector(
  ".listaCardsNEW_BALANCE"
);
const tarjetaTotalPONY = document.querySelector(".listaCardsPONY");
const tarjetaTotalREEBOK = document.querySelector(".listaCardsREEBOK");
const tarjetaTotalTOPPER = document.querySelector(".listaCardsTOPPER");
const tarjetaTotalUNDER_ARMOUR = document.querySelector(
  ".listaCardsUNDER_ARMOUR"
);
const tarjetaTotalVANS = document.querySelector(".listaCardsVANS");
// Creo var para almacenar html a renderizar
const carritoHtml = document.querySelector(".shoppingCartItemsContainer");
const favoritosHtml = document.querySelector(".shoppingCartItemsContainerFAV");
// Boton vaciar carrito
const vaciarButton = document.querySelector(".vaciarButtonCarro");
vaciarButton.addEventListener("click", removeCarrito);
// Boton comprar prueba de SPREAD ARRAY:
const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarCarrito);

// FUNCIONES
renderizarProductos();
renderizarProductosFutbol();
renderizarProductosNBA();
renderizarProductosZAPAS();
renderizarProductosADIDAS();
renderizarProductosNIKE();
renderizarProductosPUMA();
renderizarProductosASICS();
renderizarProductosCONVERSE();
renderizarProductosFILA();
renderizarProductosNEW_BALANCE();
renderizarProductosPONY();
renderizarProductosREEBOK();
renderizarProductosTOPPER();
renderizarProductosUNDER_ARMOUR();
renderizarProductosVANS();

// Agregar item al carro
function addToCarritoItem(event) {
  const button = event.target; // guardo el boton apretado
  const card = button.closest(".tarjetaMIA"); // tomo toda la tarjeta
  const cardImg = card.querySelector(".item-img").src;
  const cardTitle = card.querySelector(".item-titulo").textContent;
  const cardPrice = card.querySelector(".item-precio").textContent;
  swal(cardTitle + " a sido agregado al carrito"); // SweetAlert
  // Agregamos card a la variable newCard
  const newCard = {
    img: cardImg,
    title: cardTitle,
    precio: cardPrice,
    cantidad: 1,
  };
  // Agregamos card al carrito
  addCardToCarrito(newCard);
}

// Agregar item a la wachlist
function addToCarritoItemFAV(eventFAV) {
  const buttonFav = eventFAV.target; // guardo el boton apretado
  const cardFav = buttonFav.closest(".tarjetaMIA"); // tomo toda la tarjeta
  const cardImgFav = cardFav.querySelector(".item-img").src;
  const cardTitleFav = cardFav.querySelector(".item-titulo").textContent;
  const cardPriceFav = cardFav.querySelector(".item-precio").textContent;
  swal(cardTitleFav + " a sido agregado a la watchlist"); // SweetAlert
  // Agregamos card a la variable newCard
  const newCardFav = {
    img: cardImgFav,
    title: cardTitleFav,
    precio: cardPriceFav,
    cantidad: 1,
  };
  // Agregamos card al carrito
  addCardToFav(newCardFav);
}

// Sumo cantidad al item, ejecuto resto de funciones
function addCardToCarrito(newCard) {
  const InputCantidad = carritoHtml.getElementsByClassName(
    "shoppingCartItemQuantity"
  );
  // recorro carrito para saber si lo que agrego ya está dentro
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === newCard.title.trim()) {
      carrito[i].cantidad++; // sumo 1
      const inputValue = InputCantidad[i];
      inputValue.value++; // renderizo cantidad al html
      carritoTotal(); // actualizo el total
      return null; // retorno null asi termina acá
    }
  }
  carrito.push(newCard);
  mostrarCarrito(newCard);
}


// Sumo cantidad al item, ejecuto resto de funciones
function addCardToFav(newCardFav) {
  // recorro carrito para saber si lo que agrego ya está dentro
  for (let i = 0; i < favoritos.length; i++) {
    if (favoritos[i].title.trim() === newCardFav.title.trim()) {
      swal("Ya está en la lista")
      return null; // retorno null asi termina acá
    }
    }
  favoritos.push(newCardFav);
  mostrarFavoritos(newCardFav); // cambiar
}

// Renderizo carrito entero
function mostrarCarrito() {
  carritoHtml.innerHTML = "";
  carrito.map((card) => {
    const trRow = document.createElement("div");
    const Content = `
        <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3"> 
            <img src="${card.img}" class="shopping-cart-image">  
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${card.title}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${card.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" min="1"
                    value="${card.cantidad}">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    trRow.innerHTML = Content;
    carritoHtml.append(trRow);
    trRow
      .querySelector(".buttonDelete")
      .addEventListener("click", removeItemCarrito);
    trRow
      .querySelector(".shoppingCartItemQuantity")
      .addEventListener("change", sumaCantidad);
  });
  carritoTotal();
}

function mostrarFavoritos() {
  favoritosHtml.innerHTML = "";
  favoritos.map((cardFav) => {
    const trRowFav = document.createElement("div");
    const ContentFav = `
        <div class="row shoppingCartItemFav">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3"> 
            <img src="${cardFav.img}" class="shopping-cart-image">  
            <h6 class="shopping-cart-item-title shoppingCartItemTitleFav text-truncate ml-3 mb-0">${cardFav.title}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPriceFav">${cardFav.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <button id="botonCompra" class="btn btn-primary favAlCarro" type="button" data-toggle="modal"
                data-target="#comprarModal">Agregar al carrito</button>
                <button class="btn btn-danger buttonDeleteFav" type="button">X</button>
            </div>
        </div>
    </div>`;
    trRowFav.innerHTML = ContentFav;
    favoritosHtml.append(trRowFav);
    trRowFav
      .querySelector(".buttonDeleteFav")
      .addEventListener("click", removeItemFav);
      /*
      trRowFav
      .querySelector(".shoppingCartItemQuantityFav")
      .addEventListener("change", sumaCantidad);
      */
  });
  favoritosTotal();
}

// fav al carro ()


// Sumo total y lo dibujo en pantalla
function carritoTotal() {
  let Total = 0;
  const cartTotal = document.querySelector(".shoppingCartTotal");
  carrito.forEach((card) => {
    // Le saco el "$" con remplace, convierto string a numero con Number
    const precio = Number(card.precio.replace("$", ""));
    Total = Total + precio * card.cantidad;
  });
  cartTotal.innerHTML = `: $${Total}`;
  guardarEnLocalStorage();
}

function favoritosTotal() {
  let TotalFav = 0;
  const cartTotalFav = document.querySelector(".shoppingCartTotalFav");
  favoritos.forEach((cardFav) => {
    // Le saco el "$" con remplace, convierto string a numero con Number
    const precioFav = Number(cardFav.precio.replace("$", ""));
    TotalFav = TotalFav + precioFav * cardFav.cantidad;
  });
  cartTotalFav.innerHTML = `: $${TotalFav}`;
  guardarEnLocalStorageFav();
}

// Elimino item del carrrito
function removeItemCarrito(event) {
  const buttonDelete = event.target;
  const trRow = buttonDelete.closest(".shoppingCartItem");
  const title = trRow.querySelector(".shoppingCartItemTitle").textContent;
  // para sacarlo del carrito js
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === title.trim()) {
      carrito.splice(i, 1);
    }
  }
  trRow.remove(); // lo elimino del html
  carritoTotal(); // actualizo total nuevamente
}

function removeItemFav(event2) {
  const buttonDeleteFav = event2.target;
  const trRowFav = buttonDeleteFav.closest(".shoppingCartItemFav");
  const titleFav = trRowFav.querySelector(".shoppingCartItemTitleFav").textContent;
  // para sacarlo del carrito js
  for (let i = 0; i < favoritos.length; i++) {
    if (favoritos[i].titleFav.trim() === titleFav.trim()) {
      favoritos.splice(i, 1);
    }
  }
  trRowFav.remove(); // lo elimino del html
  favoritosTotal(); // actualizo total nuevamente
}

// Elimino todo del carrito
function removeCarrito() {
  swal({
    title: "Estas seguro?",
    text: "Una vez vaciado no se puede recuperar",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      carrito = [];
      carritoHtml.innerHTML = "";
      carritoTotal(); // actualizo total nuevamente
      swal("El carrito ha sido vaciado", {
        icon: "success",
      });
    } else {
    }
  });
}

function removeFavoritos() {
  swal({
    title: "Estas seguro?",
    text: "Una vez vaciado no se puede recuperarrrr",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      favoritos = [];
      favoritosHtml.innerHTML = "";
      favoritosTotal(); // actualizo total nuevamente
      swal("El carrito ha sido vaciado", {
        icon: "success",
      });
    } else {
    }
  });
}

// Actualizo cantidad al borrar
function sumaCantidad(event) {
  const sumaInput = event.target;
  const trRow = sumaInput.closest(".shoppingCartItem");
  const title = trRow.querySelector(".shoppingCartItemTitle").textContent;
  carrito.forEach((card) => {
    if (card.title.trim() === title) {
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      card.cantidad = sumaInput.value;
      carritoTotal();
    }
  });
}

// guardo el carrito en el storage en formato JSON
function guardarEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function guardarEnLocalStorageFav() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

/* Cuando refresco pantalla se ejecuto la function, Obtengo 'carrito' y lo convierto de
JSON a formato JS, si storage tiene algo rendereriza el carrito como estaba antes */

function cargarPantalla1(){
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage
    mostrarCarrito()
  }
}

function cargarPantalla2(){
  const storage2 = JSON.parse(localStorage.getItem("favoritos"));
  if (storage2) {
    favoritos = storage2
    mostrarFavoritos()
  }
}
    window.onload = function(){
    setTimeout(cargarPantalla1, 100);
    setTimeout(cargarPantalla2, 101);  
};

// Uso de SPREAD DE ARRAYS:
function comprarCarrito() {
  console.log("Gracias por comprar en Only Shoes");
  console.log(carrito);
  console.log(...carrito);
  swal({
    title: "Gracias por su compra",
    text: "Lo esperamos nuevamente en DeporStore",
  });
  carrito = [];
  carritoHtml.innerHTML = "";
  CarritoTotal();
}

/*
function calculoDeCuotas() {
}
*/
