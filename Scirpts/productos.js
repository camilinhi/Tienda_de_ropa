let carrito=[];
let total=0


function agregarAlCarro(nombre_producto,precio_producto){
    //alert(nombre+" "+precio);
    let producto={nombre: nombre_producto, precio: precio_producto};
    carrito.push(producto);
    console.log(carrito);
    total= total+precio_producto;
    TotalCarrito.innerText= '$' + total; 
    Swal.fire(
        'Producto agregado',
        'Se agregó ' + nombre_producto + ' al carrito de compras',
        'success'
        //'error'
        //'warning'
        //'info'

    )


}