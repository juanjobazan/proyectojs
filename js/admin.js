let userLocalStorage = JSON.parse(localStorage.getItem('usuario')) || []
let tBody = document.getElementById('tBody')
let userID = location.search.split('=')[1]

let user = userLocalStorage.findIndex((usuario) => {
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


tBody.innerHTML = userLocalStorage.map((usuario) =>
  `<tr>
    <th scope="row">${usuario.id}</th>
    <td>${usuario.usuario}</td>
    <td>${usuario.nombre}</td>
    <td>${usuario.telefono}</td>
    <td>${usuario.role}</td>
    <td>
    
   
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2${usuario.id}">
      Editar
    </button>
    <button class='btn btn-danger' onclick='deleteUser(${usuario.id})'>Eliminar</button>
    
    <div class="modal fade" id="exampleModalToggle2${usuario.id}"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalToggleLabel2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabelAd">Editar Usuario: ${usuario.usuario}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Usuario</label>
            <input type="text" value='${usuario.usuario}' name='user' class="form-control" id="idUser" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Role</label>
            <input type="text" value='${usuario.role}' name='role' class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Telefono</label>
          <input type="text" value='${usuario.telefono}' name='telefono' class="form-control" id="telefonoUser" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="text" value='${usuario.nombre}' name='nombre' class="form-control" id="nombreUser" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
          
          <button type="button" class="btn btn-primary" onclick='sendChange(${usuario.id})'>Guardar Cambios</button>
        </form>

          </div>

        </div>
      </div>
    </div>


    
    </td>
    </tr>
    `
).join('')

let inputUserId = document.getElementById('idUser')
let newUser = ''
let inputUserName = document.querySelectorAll('input[name="user"]')
let inputuserTelefono = document.querySelectorAll('input[name="telefono"]')
let newTelefono = ''
let inputUserRole = document.querySelectorAll('input[name="role"]')
let newRole = ''
let inputUserNombre = document.querySelectorAll('input[name="nombre"]')
let newNombre = ''



const sendChange = (id) => {
  let userIndexId = userLocalStorage.findIndex((usuario) => {
    return usuario.id === id
  })
  userLocalStorage[userIndexId].usuario = newUser
  userLocalStorage[userIndexId].telefono = newTelefono
  userLocalStorage[userIndexId].role = newRole
  userLocalStorage[userIndexId].nombre = newNombre
  localStorage.setItem('usuario', JSON.stringify(userLocalStorage))

  Swal.fire({
    icon: 'success',
    title: 'Excelente',
    text: 'Datos Actualizados con Exito!',
    preConfirm: () => {
      return location.reload()
    }

  })
}

const changeInput = (event) => {
  const { name, value } = event.target
  console.log(value)
  newUser = value
}
const changeInputT = (event) => {
  const { value } = event.target
  newTelefono = value
}
const changeInputR = (event) => {
  const { value } = event.target
  newRole = value
}
const changeInputN = (event) => {
  const { value } = event.target
  newNombre = value
}
inputUserName.forEach((input) => {
  input.addEventListener('input', changeInput)
})
inputuserTelefono.forEach((input) => {
  input.addEventListener('input', changeInputT)
})
inputUserRole.forEach((input) => {
  input.addEventListener('input', changeInputR)
})
inputUserNombre.forEach((input) => {
  input.addEventListener('input', changeInputN)
})


const deleteUser = (id) => {
  const userFilter = userLocalStorage.filter((usuario) => usuario.id !== id)
  localStorage.setItem('usuario', JSON.stringify(userFilter))
  Swal.fire({
    icon: 'success',
    title: 'Excelente',
    text: 'Usuario Eliminado con Exito!',
    preConfirm: () => {
      return location.reload()
    }

  })
}


const autosLS = JSON.parse(localStorage.getItem('autos'))
let tBodyAutos = document.getElementById('tBodyAutos')


tBodyAutos.innerHTML = autosLS.map((auto) =>
  `<tr>
    <th scope="row">${auto.id}</th>
    <td>${auto.marca}</td>
    <td>${auto.modelo}</td>
    <td>${auto.km}</td>
    <td>${auto.precio}</td>
    <td>
    
   
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2${auto.codigo}">
      Editar
    </button>
    <button class='btn btn-danger' onclick='deleteAuto(${auto.id})'>Eliminar</button>
    
    <div class="modal fade" id="exampleModalToggle2${auto.codigo}"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalToggleLabel2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabelAd">Editar Auto: ${auto.marca}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Marca</label>
            <input type="text" value='${auto.marca}' name='marca' class="form-control" id="marcaAuto" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Modelo</label>
            <input type="text" value='${auto.modelo}' name='modelo' class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Km</label>
          <input type="text" value='${auto.km}' name='km' class="form-control" id="telefonoUser" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Precio</label>
        <input type="text" value='${auto.precio}' name='precio' class="form-control" id="nombreUser" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
          
          <button type="button" class="btn btn-primary" onclick='sendChangeAuto(${auto.id})'>Guardar Cambios</button>
        </form>

          </div>

        </div>
      </div>
    </div>


    
    </td>
    </tr>
    `
).join('')



let newMarca = ''
let newModelo = ''
let newKm = ''
let newPrecio = ''
let inputAutoMarca = document.querySelectorAll('input[name="marca"]')
let inputAutoModelo = document.querySelectorAll('input[name="modelo"]')
let inputAutoKm = document.querySelectorAll('input[name="km"]')
let inputAutoPrecio = document.querySelectorAll('input[name="precio"]')

const sendChangeAuto = (id) => {
  let autoIndexId = autosLS.findIndex((auto) => {
    return auto.id === id
  })
  autosLS[autoIndexId].marca = newMarca
  autosLS[autoIndexId].modelo = newModelo
  autosLS[autoIndexId].km = newKm
  autosLS[autoIndexId].precio = newPrecio
  localStorage.setItem('autos', JSON.stringify(autosLS))

  Swal.fire({
    icon: 'success',
    title: 'Excelente',
    text: 'Datos Actualizados con Exito!',
    preConfirm: () => {
      return location.reload()
    }

  })
}

const changeInputAutoMarca = (event) => {
  const { value } = event.target
  newMarca = value
}
const changeInputAutoModelo= (event) => {
  const { value } = event.target
  newModelo= value
}
const changeInputAutoKm = (event) => {
  const { value } = event.target
  newKm = value
}
const changeInputAutoPrecio = (event) => {
  const { value } = event.target
  newPrecio = value
}

inputAutoMarca.forEach((input) => {
  input.addEventListener('input', changeInputAutoMarca)
})
inputAutoModelo.forEach((input) => {
  input.addEventListener('input', changeInputAutoModelo)
})
inputAutoKm.forEach((input) => {
  input.addEventListener('input', changeInputAutoKm)
})
inputAutoPrecio.forEach((input) => {
  input.addEventListener('input', changeInputAutoPrecio)
})




const deleteAuto = (id) => {
  const autoFilter = autosLS.filter((auto) => auto.id !== id)
  localStorage.setItem('autos', JSON.stringify(autoFilter))
  Swal.fire({
    icon: 'success',
    title: 'Excelente',
    text: 'Auto Eliminado con Exito!',
    preConfirm: () => {
      return location.reload()
    }

  })
}


let tBodyAutosDestacar = document.getElementById('tBodyAutosDestacar')

tBodyAutosDestacar.innerHTML = autosLS.map((auto) =>
  `<tr>
    <th scope="row">${auto.id}</th>
    <td>${auto.marca}</td>
    <td>${auto.modelo}</td>
    <td>${auto.km}</td>
    <td>${auto.precio}</td>
    <td><button class='btn btn' onclick='destacarAuto(${auto.id})'>Destacar</button></td>
   
    
    </tr>  `).join('')


const destacarAuto=(id)=>{

  let autoIndexId = autosLS.findIndex((auto) => {
    return auto.id === id
  })
   autosLS[autoIndexId].destacado = true
  localStorage.setItem('autos', JSON.stringify(autosLS))

  Swal.fire({
    icon: 'success',
    title: 'Excelente',
    text: 'Auto Destacado con Exito!',
    preConfirm: () => {
      return location.reload()
    }

  })

}