let userLocalStorage = JSON.parse(localStorage.getItem('usuario')) || []
let userID = location.search.split('=')[1]
let idInputSearc=document.getElementById('idInputSearch')
let divCards=document.getElementById('divCards')
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

const arrayAutos=[
    {
        marca:'Toyota',
        modelo:'Etios',
        km:33000,
        anio:2019,
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWP3rEgcOToMWKNwsj6mAnwrYdxGMlKxP3w&usqp=CAU',
        precio:1800000,
        destacado:false

    },
    {
        marca:'Puegeot',
        modelo:207,
        km:75000,
        anio:2017,
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwr0PYzmfZ9BWTOvuLPeyF9GVxhUaUDrOYdA&usqp=CAU',
        precio:2000000,
        destacado:true

    },
    {
        marca:'ford',
        modelo:'focus',
        km:87000,
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOEah_R1GagLTgAOohokJ2LNDO6HepDhGMA&usqp=CAU',
        precio:2500000,
        destacado:false

    },
]

divCards.innerHTML=arrayAutos
.map(
    (auto)=>`
    <div class="card mx-5" style="width: 18rem;">
  <img src="${auto.foto}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${auto.marca}  ${auto.modelo}</h5>
    <p class="card-text">Precio: ${auto.precio}</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>
`
)
.join('');

const inputSearchChange=(event)=>{
const{value}=event.target

let termino = value.toLowerCase()
let filtroAuto = arrayAutos.filter((aut)=>{
    let marcaModelo = `${aut.marca} ${aut.modelo}`.toLowerCase()
    let anioA=`${aut.anio}`.toLowerCase()
    return marcaModelo.includes(termino) || anioA.includes(termino)
})
filtroAuto.length>0 ?
divCards.innerHTML=filtroAuto
.map(
    (auto)=>`
    <div class="card mx-5" style="width: 18rem;">
  <img src="${auto.foto}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${auto.marca}  ${auto.modelo}</h5>
    <p class="card-text">Precio: ${auto.precio}</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>
`
)
.join('')
:divCards.innerHTML='Autos no Encontrados'

}

idInputSearc.addEventListener('input',inputSearchChange)