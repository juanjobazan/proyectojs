let userLocalStorage = JSON.parse(localStorage.getItem('usuario')) || []
let userID = location.search.split('=')[1]
let idInputSearc = document.getElementById('idInputSearch')
let divCards = document.getElementById('divCards')

let user = userLocalStorage.filter((usuario) => {
    return usuario.id === parseInt(userID)
})

let userIndex = userLocalStorage.findIndex((usuario) => {
    return usuario.id === parseInt(userID)
})

const logaut = () => {
    userLocalStorage[userIndex].login = false
    localStorage.setItem('usuario', JSON.stringify(userLocalStorage))
    location.href = '../index.html'
}

const arrayAutos = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Etios',
        km: 33000,
        anio: 2019,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWP3rEgcOToMWKNwsj6mAnwrYdxGMlKxP3w&usqp=CAU',
        precio: 1800000,
        destacado: false,
        combustible:'Nafta',
        transmision:'Manual'

    },
    {
        id: 2,
        marca: 'Puegeot',
        modelo: 207,
        km: 75000,
        anio: 2017,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwr0PYzmfZ9BWTOvuLPeyF9GVxhUaUDrOYdA&usqp=CAU',
        precio: 2000000,
        destacado: true,
        combustible:'Nafta',
        transmision:'Manual'

    },
    {
        id: 3,
        marca: 'ford',
        modelo: 'focus',
        km: 87000,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOEah_R1GagLTgAOohokJ2LNDO6HepDhGMA&usqp=CAU',
        precio: 2500000,
        destacado: false,
        combustible:'Nafta',
        transmision:'Manual'

    },
]

localStorage.setItem('autos', JSON.stringify(arrayAutos))
const autosLS = JSON.parse(localStorage.getItem('autos'))

divCards.innerHTML = autosLS
    .map(
        (auto) => `
        
          <div class="card mx-5    col-md-6 col-lg-12 col-xs-3" style="width: 18rem;">
          <img src="${auto.foto}" class="card-img-top img-fluid rounded " alt="...">
             <div class="card-body">
              <h5 class="card-title">${auto.marca}  ${auto.modelo}</h5>
              <p class="card-text">Precio:$ ${auto.precio}</p>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2${auto.id}">
               Ver Detalle
              </button>
  
  
              <div class="modal fade" id="exampleModalToggle2${auto.id}"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalToggleLabel2" aria-hidden="true">
              <div class="modal-dialog">
              <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabelAd">${auto.marca} ${auto.modelo}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
         
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">$${auto.precio}</label>
          <img src="${auto.foto}" class="card-img-top" alt="...">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label mx-2">KM:${auto.km}</label>
          <label for="exampleInputPassword1" class="form-label mx-2">Transmision:${auto.transmision}</label>
          <label for="exampleInputPassword1" class="form-label mx-2">Combustible:${auto.combustible}</label>
        </div>
        
        <button type="button" class="btn btn-primary aling-center" onclick='agregarProductoCarrito(${auto.id})'>Comprar</button>
      </form>

        </div>

      </div>
    </div>
  </div>





</div>
</div>
`
    )
    .join('');

const inputSearchChange = (event) => {
    const { value } = event.target

    let termino = value.toLowerCase()
    let filtroAuto = autosLS.filter((aut) => {
        let marcaModelo = `${aut.marca} ${aut.modelo}`.toLowerCase()
        let anioA = `${aut.anio}`.toLowerCase()
        return marcaModelo.includes(termino) || anioA.includes(termino)
    })

    filtroAuto.length > 0 ?
        divCards.innerHTML = filtroAuto
            .map(
                (auto) => `
                <div class="card mx-5 rounded card-img-top img-fluid img-fluid col-md-6" style="width: 18rem;">
                <img src="${auto.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${auto.marca}  ${auto.modelo}</h5>
                  <p class="card-text">Precio:$ ${auto.precio}</p>
              
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2${auto.id}">
                  Ver Detalle
                </button>
                
                
                <div class="modal fade" id="exampleModalToggle2${auto.id}"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalToggleLabel2" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabelAd">${auto.marca} ${auto.modelo}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                       
                      <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">$${auto.precio}</label>
                        <img src="${auto.foto}" class="card-img-top" alt="...">
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label mx-2">KM:${auto.km}</label>
                        <label for="exampleInputPassword1" class="form-label mx-2">Transmision:${auto.transmision}</label>
                        <label for="exampleInputPassword1" class="form-label mx-2">Combustible:${auto.combustible}</label>
                      </div>
                      
                      <button type="button" class="btn btn-primary aling-center" onclick='agregarProductoCarrito(${auto.id})'>Comprar</button>
                    </form>
              
                      </div>
              
                    </div>
                  </div>
                </div>
              
              
              
              
              
                </div>
              </div>
`
            )
            .join('')
        : divCards.innerHTML = 'Autos no Encontrados'

}
const arrayProd = []


const agregarProductoCarrito = (id) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
    const prodFilter = autosLS.filter((prod) => prod.id === id)
    const prodExisteCarrito = carritoLS.filter((prod) => prod.id === id)


    if (prodFilter.length > 0) {
        if (prodExisteCarrito.length === 0) {
            arrayProd.push(prodFilter[0])
            localStorage.setItem('carrito', JSON.stringify(arrayProd))
        }

    }

    Swal.fire({
      icon: 'success',
      title: 'Excelente',
      text: 'Se Agrego al Carrito!',
      /* preConfirm: () => {
          return location.reload()
      } */

  })
}


idInputSearc.addEventListener('input', inputSearchChange)


