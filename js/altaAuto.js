const inputMarca = document.getElementById('marca')
const inputModelo = document.getElementById('modelo')
const inputCodigo = document.getElementById('codigo')
const inputFoto = document.getElementById('foto')
const inputPrecio = document.getElementById('precio')
const inputCombustible = document.getElementById('combustible')

const dividErrMarca = document.getElementById('idErrMarca')
const divErridErrModelo = document.getElementById('idErrModelo')
const dividErrCodigo = document.getElementById('idErrCodigo')
const dividErrFoto = document.getElementById('idErrImagen')
const dividErrPrecio = document.getElementById('idErrPrecio')
const dividErrCombustible = document.getElementById('idErrCombustible')
const autosLS = JSON.parse(localStorage.getItem('autos')) || []



let arrayAutos = []



if (autosLS.length > 0) {
    autosLS.forEach(auto => arrayAutos.push(auto))
}

dividErrMarca.classList = 'd-none'
divErridErrModelo.classList = 'd-none'
dividErrCodigo.classList = 'd-none'
dividErrFoto.classList = 'd-none'
dividErrPrecio.classList = 'd-none'
dividErrCombustible.classList = 'd-none'

let idA = autosLS.length > 0 ? autosLS[autosLS.length - 1].id + 1 : 1;



const formInput = {
    id: idA,
    codigo: '',
    marca: '',
    modelo: '',
    km: 33000,
    anio: 2019,
    foto: '',
    precio: '',
    destacado: false,
    combustible: '',
    transmision: 'Manual'

}

const changeInput = (event) => {
    const { name, value } = event.target
    formInput[name] = value
    switch (name) {
        case 'codigo':
            dividErrCodigo.classList = 'd-none'
            inputCodigo.classList.remove('is-invalid')
            break;
        case 'marca':
            dividErrMarca.classList = 'd-none'
            inputMarca.classList.remove('is-invalid')
            break;
        case 'modelo':
            divErridErrModelo.classList = 'd-none'
            inputModelo.classList.remove('is-invalid')
            break;
        case 'foto':
            dividErrFoto.classList = 'd-none'
            inputFoto.classList.remove('is-invalid')
            break;
        case 'precio':
            dividErrPrecio.classList = 'd-none'
            inputPrecio.classList.remove('is-invalid')
            break;
        case 'combustible':
            dividErrCombustible.classList = 'd-none'
            inputCombustible.classList.remove('is-invalid')
            break;

    }



}


const buttonRegister = () => {

    const { codigo, marca, modelo, foto, precio, combustible } = formInput

    if (codigo && marca && modelo && foto && precio && combustible) {

        arrayAutos.push(formInput)
        localStorage.setItem('autos', JSON.stringify(arrayAutos))
        console.log(arrayAutos)


    }

    else if (!codigo && !marca && !modelo && !foto && !precio && !combustible) {
        switch (true) {
            case !codigo:
                dividErrCodigo.classList = 'd-block text-danger'
                inputCodigo.classList.add('is-invalid')

            case !marca:
                dividErrMarca.classList = 'd-block text-danger'
                inputMarca.classList.add('is-invalid')

            case !modelo:
                divErridErrModelo.classList = 'd-block text-danger'
                inputModelo.classList.add('is-invalid')

            case !foto:
                dividErrFoto.classList = 'd-block text-danger'
                inputFoto.classList.add('is-invalid')

            case !precio:
                dividErrPrecio.classList = 'd-block text-danger'
                inputPrecio.classList.add('is-invalid')

            case !combustible:
                dividErrCombustible.classList = 'd-block text-danger'
                inputCombustible.classList.add('is-invalid')

        }
    } else {
        if (!codigo) {
            dividErrCodigo.classList = 'd-block text-danger'
        }
        if (!marca) {
            dividErrMarca.classList = 'd-block text-danger'
        }
        if (!modelo) {
            divErridErrModelo.classList = 'd-block text-danger'
        }
        if (!foto) {
            dividErrFoto.classList = 'd-block text-danger'
        }
        if (!combustible) {
            dividErrCombustible.classList = 'd-block text-danger'
        }

    }
    Swal.fire({
        icon: 'success',
        title: 'Excelente',
        text: 'Tu Alta se realizo con Exito!',
        preConfirm: () => {
            return location.reload()
        }

    })
}


inputCodigo.addEventListener('input', changeInput)
inputMarca.addEventListener('input', changeInput)
inputModelo.addEventListener('input', changeInput)
inputFoto.addEventListener('input', changeInput)
inputPrecio.addEventListener('input', changeInput)
inputCombustible.addEventListener('input', changeInput)