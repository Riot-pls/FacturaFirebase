var firebaseConfig = {
    apiKey: "AIzaSyBH5GqYmkFg0onWadLrbnD7am-AMLY-UMo",
    authDomain: "crudfirebase-5b2b2.firebaseapp.com",
    databaseURL: "https://crudfirebase-5b2b2.firebaseio.com",
    projectId: "crudfirebase-5b2b2",
    storageBucket: "crudfirebase-5b2b2.appspot.com",
    messagingSenderId: "948865754873",
    appId: "1:948865754873:web:09f76998784cde7890a428",
    measurementId: "G-9ZCMYTQRWL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



function inputTask(id,result){
  return document.getElementById(id).value=result; //funcion para obtener la insercion anterior.

}

function getId(id){
    return document.getElementById(id).value; //CON ESTO obtengo los id de mis inputs y botones.

}



function json(codigo,descripcion,precio,cantidad){
  var datos={
    codigo:codigo,
    description:descripcion,
    price:precio,
    stock:cantidad
  };
return datos;
}


function Task(){
  var id=getId("codigo");
  var id1 = getId("description");
  var cant= getId("stock");
  var precio= getId("price");
 
   //Ahora obtengo los ids de mis inputs
  console.log(id+id1+cant+precio);

//if(id.length<=4 || id1.length==0 || cant.length==0 || email.length==0 ||  !validar_email(email)   || telefono.length==0|| placas.length==0){
//swal("OOPS","Tus datos no se enviaron, hay campos vacios o algun dato incorrecto","error");}else{ 


  var arraydata=json(id,id1,cant,precio);
  var tarea= firebase.database().ref("producto/"+id); //el id, es el nombre del nuevo nodo que se va a agregar, puedo quisas tomar el nombre solo del id del producto aqui seteo la configuracion para que la app web acceda a la base de datos
  tarea.update(arraydata);//Aqui establezco que se agreguen datos
  swal("Enhorabuena", "Tus datos fueron guardados exitosamente", "success");
  
}

//funcion para validar solo numeros
function justNumbers(e)
        {
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 0) || (keynum == 46))
        return true;
         
        return /\d/.test(String.fromCharCode(keynum));
      }
      function fire(cedula,nombre,celular){
        var dato={
          cedula:cedula,
          nombre:nombre,
          celular:celular
        };
      return dato;
      }
      function persona(){
        var id=getId("cedula");
        var id1 = getId("nombre");
        var cant= getId("celular");
        var arraydata=fire(id,id1,cant);
        var tarea= firebase.database().ref("clientes/"+id); //el id, es el nombre del nuevo nodo que se va a agregar, puedo quisas tomar el nombre solo del id del producto aqui seteo la configuracion para que la app web acceda a la base de datos
        tarea.update(arraydata);//Aqui establezco que se agreguen datos
        swal("Enhorabuena", "Tus datos fueron guardados exitosamente", "success"); 
      }