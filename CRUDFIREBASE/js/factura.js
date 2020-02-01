//funcion para obtener los valores de los editText y botones
function getId(id){
    return document.getElementById(id).value; 
}
//funcion que recupera los valores 

//creamos las variables globales para utilizar los valores.
var ced,name,cel,desc,desc2,desc3,total,stock,idp,idp2,idp3,cant1,cant2,cant3,price,price2,price3;
ides=new Array();


//con esta funcion entramos a los datos de firebase entramos al nodo que tenga por nombre el id osea la cedula
function generar(){
    //con estos datos obtenemos los datos de los clientes, y los ids de los productos
   var cc=getId("cedulacliente");
  
   var idp=getId("idp");
   var idp2=getId("idp2");
   var idp3=getId("idp3");
   //un arreglo que agregas los ids
   ides.push(idp+idp2+idp3);

   for(var i=0;i<=ides.length;i++){
 //esta variable accede a los productos
 var producto= firebase.database().ref('producto/'+i);
 producto.on('value',function(data){
var datos=data.val();
desc=datos.description;
 });
console.log(desc);
   }
   //esta variable accede la nodo que contiene los "clientes"
  //  var cliente= firebase.database().ref('clientes/'+cc);
   
    //con este metodo obtengo el objetp del cliente debido a que necesito
  // cliente.on('value',function(parameters){
       //aqui estoy guardando el objeto del cliente
  //var data=parameters.val();
  //ced=data.cedula;
   //console.log(ides);
   //});


   //ahora voy a llamar al producto que estoy insertando


}
      // console.log(ced,name,cel);
       
