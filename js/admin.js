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
            <h1 class="modal-title fs-5" id="staticBackdropLabelAd">Modal title</h1>
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
let inputUserName=document.querySelectorAll('input[name="user"]')



const sendChange = (id) => {
  let userIndexId = userLocalStorage.findIndex((usuario) => {
    return usuario.id === id
  })
  userLocalStorage[userIndexId].usuario = newUser
  localStorage.setItem('usuario',JSON.stringify(userLocalStorage))
}

const changeInput = (event) => {
  const { name, value } = event.target
  console.log(value)
  newUser = value
}

inputUserName.forEach((input)=>{
  input.addEventListener('input',changeInput)
})


const deleteUser=(id)=>{
const userFilter=userLocalStorage.filter((usuario)=> usuario.id !==id)
localStorage.setItem('usuario',JSON.stringify(userFilter))
}

