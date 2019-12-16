var bandera =0
       
var boton3 = document.getElementById('opcion2')
var boton4 = document.getElementById('opcion3')
var boton5 = document.getElementById('opcion4')
var boton6 = document.getElementById('opcion5')


var burger = document.getElementById('menu');
burger.addEventListener('click',function(){
    document.getElementById('lista').style.display='block'
    bandera = bandera +1
    console.log(bandera)

    if(bandera%2==0){
        document.getElementById('lista').style.display='none'            
    }

})

boton3.addEventListener('click',function(){
    document.getElementById('lista').style.display='none'
    bandera=bandera+1

})
boton4.addEventListener('click',function(){
    document.getElementById('lista').style.display='none'
    bandera=bandera+1

})
boton5.addEventListener('click',function(){
    document.getElementById('lista').style.display='none'
    bandera=bandera+1

})
boton6.addEventListener('click',function(){
    document.getElementById('lista').style.display='none'
    bandera=bandera+1

})

var contacto = document.getElementById('boton')

contacto.addEventListener('click',function(){

    $.ajax({
        url: 'contacto.php',
        type: 'post',
        dataType: 'application/json',
        data: $("#myform").serialize(),
        success: function(data) {
            console.log(data)
            //alert('Gracias por dejar tus datos'+data+', en breve nos comunicaremos')
                    
        }
    });
            

})


    