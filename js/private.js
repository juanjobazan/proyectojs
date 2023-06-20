let userIDLogin = location.search.split('=')[1]
let userLS = JSON.parse(localStorage.getItem('usuario')) || []
let userIndexLs = userLS.findIndex((usuario) => {
    return usuario.id === parseInt(userIDLogin)
})

let usuarioExiste = userLS.filter((usuario) => {
    return usuario.login === true
})


if (!userIDLogin) {

    if (usuarioExiste[0].role === 'admin') {
        location.href = `../html/admin.html?id=${usuarioExiste[0].id}`
    }

    else if (usuarioExiste[0].role === 'user') {
        location.href = `../html/usuario.html?id=${usuarioExiste[0].id}`
    } else {
        location.href = '../index.html'
    }


} else {

const usuarioID=userLS[userIndexLs].login
if(!usuarioID){
    if (usuarioExiste[0].role === 'admin') {
        location.href = `../html/admin.html?id=${usuarioExiste[0].id}`
    }

    else if (usuarioExiste[0].role === 'user') {
        location.href = `../html/usuario.html?id=${usuarioExiste[0].id}`
    } else {
        location.href = '../index.html'
    }
}
}