let userLocalStorage = JSON.parse(localStorage.getItem('usuario')) || []

let userID = location.search.split('=')[1]
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

