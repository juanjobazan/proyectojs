const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')//accede a todos inputs del formulario
const inputNombte = document.getElementById('nombre')
const inputUsuario = document.getElementById('usuario')
const inputPassword = document.getElementById('password')
const inputPassword2 = document.getElementById('password2')
const inputCorreo = document.getElementById('correo')
const inputTelefono = document.getElementById('telefono')
const inputCheck = document.getElementById('terminos')
const inputErrU = document.getElementById('errusu')
const inputErrNom = document.getElementById('errnom')


let inputUse = document.getElementById('usuarioI')
let inputPass = document.getElementById('passwordI')
let divErrUser = document.getElementById('idErrUser')
let divErrPass = document.getElementById('idErrPass')
let buttonLogin = document.getElementById('buttonLogin')


const userLocalStorage = JSON.parse(localStorage.getItem('usuario')) || []

let arrayUser = []


if (userLocalStorage.length > 0) {
    userLocalStorage.forEach(usuario => arrayUser.push(usuario))
}


let idU = userLocalStorage.length > 0 ? userLocalStorage[userLocalStorage.length - 1].id + 1 : 1;
console.log(idU)
console.log(idU - 1)

divErrUser.classList = 'd-none'
divErrPass.classList = 'd-none'

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,//letras, numeros, guion, guion bajo
    nombre: /^[a-zA-ZA-y\s]{1,40}$/,//letras y espacios sin acentos
    correo: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    telefono: /^\d{7,14}$/ //7 a 14 numeros
}

const campos = {
    id: idU,
    usuario: '',
    nombre: '',
    password: '',
    password2: '',
    correo: '',
    telefono: '',
    terminos: false,
    login: false,
    role: 'user'

}

const objetoForm = {
    usuarioI: '',
    passwordI: '',
}


const changeInput = (event) => {
    const { name, value } = event.target


    objetoForm[name] = value
    switch (name) {
        case 'usuarioI':
            divErrUser.classList = 'd-none'
            inputUse.classList.remove('is-invalid')
            break;
        case 'passwordI':
            divErrPass.classList = 'd-none'
            inputPass.classList.remove('is-invalid')
            break;
        default:
            console.log('error no existe ese name en el objeto')
            break;
    }
}


const login = () => {

    console.log(objetoForm)

    const { usuarioI, passwordI } = objetoForm

    const userExist = userLocalStorage.filter((usuario) => {
        console.log(usuario.usuarioI, usuarioI)
        usuario.usuarioI === usuarioI
    })
    console.log(userExist)
    if (userExist.length > 0) {
        console.log(userExist)
    } else {
        console.log(userExist)
    }

}


inputUse.addEventListener('input', changeInput)
inputPass.addEventListener('input', changeInput)
buttonLogin.addEventListener('click', login)


const cargarDatos = () => {

    const { usuario, nombre, password, password2, correo, telefono, terminos } = campos

    if (usuario && nombre && password && password2 && correo && telefono && terminos) {
        arrayUser.push(campos)
        localStorage.setItem('usuario', JSON.stringify(arrayUser))
        console.log(arrayUser)
        
        Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: 'Tu registro se realizo con Exito!',
            preConfirm:()=>{
                return location.reload()
            }

        })
        
    }

}


const validarFormulario = (e) => {
    const { name, value } = e.target
    if (name === 'terminos') {
        campos[name] = inputCheck.checked
    } else {
        campos[name] = value
        switch (name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario')
                break;
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre')
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password')
                validaPassword2()
                break;
            case "password2":
                validaPassword2()
                break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo')
                break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono')
                break;
        }
    }


}

inputUsuario.addEventListener('input', validarFormulario)
inputNombte.addEventListener('input', validarFormulario)
inputPassword.addEventListener('input', validarFormulario)
inputPassword2.addEventListener('input', validarFormulario)
inputCorreo.addEventListener('input', validarFormulario)
inputTelefono.addEventListener('input', validarFormulario)
inputCheck.addEventListener('input', validarFormulario)


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        //campos[campo]=true
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        //campos[campo]=false
    }
}

const validaPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
        //campos['password']=false
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
        //campos['password']=true
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);//keyup tecla levantada)
    input.addEventListener('blur', validarFormulario);//fuera de foco
})


formulario.addEventListener('submit', (e) => {

    e.preventDefault();//envio de formulario bloqueado boton enviar
    const terminos = document.getElementById('terminos')
    if (campos.usuario && campos.nombre && campos.correo && campos.telefono && campos.password && terminos.checked) {

        formulario.reset()



        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        })

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
})
