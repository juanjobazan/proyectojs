
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const tBody = document.getElementById('tBody')
let total=0;
tBody.innerHTML = carrito.map((prod) =>
   
    `
    
    <tr>
        <th scope="row">${prod.id}</th>
        <td>${prod.marca}</td>
        <td>${prod.modelo}</td>
        <td>${prod.km}</td>
        <td>${prod.precio}</td>
        <td>${ total+=prod.precio}</td>
        

    </tr>


`

).join('')

