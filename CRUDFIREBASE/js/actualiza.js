
function innerHTML(id,result){
  return document.getElementById(id).innerHTML+=result;
}

function table(codigo,description,price,stock){
   /*'<tr>'+'<td><center>'+codigo+'</center></td>'+
  '<td><center>'+descripcion+'</center></td>'+
  
  '<td id="uno"><center>'+precio+'</center></td>'+
  '<td id="uno"><center>'+stock+'</center></td>'+'</tr>';
*/
return '<tr>'+
            '<td><span class="custom-checkbox"><input type="checkbox" id="checkbox1" name="options[]" value="1"><label for="checkbox1"></label></span></td>'
                        +'<td>'+codigo+'</td>'+
                        '<td>'+description+'</td>'+
            '<td>'+stock+'</td>'+
                        '<td>'+price+'</td>'+
                        '<td>'+
                            '<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>'+
                            '<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+
                        '</td>'+
                    '</tr>'+

'<div id="deleteEmployeeModal" class="modal fade"><div class="modal-dialog"><div class="modal-content"><form>'+
          '<div class="modal-header"><h4 class="modal-title">Delete Employee</h4><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
          '</div>'+
          '<div class="modal-body"><p>Are you sure you want to delete these Records?</p><p class="text-warning"><small>This action cannot be undone.</small></p></div>'+
          '<div class="modal-footer"><input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">'+
          '<input type="submit" class="btn btn-danger" value="Delete" onclick="remove('+codigo+')"></div>'+
    '</form></div></div>'

}

//intento de solucionar el llamado de datos
//pos este si funciono, estas funciones son para llamar los datos.
//var code=new Array();
function readtask(){
var task= firebase.database().ref('producto/');
task.on('child_added',function(data){
  var taskvalue=data.val();
  
  var result= table(taskvalue.codigo,taskvalue.description,taskvalue.price,taskvalue.stock);
 // console.log(taskvalue.codigo+taskvalue.descripcion+taskvalue.precio+taskvalue.stock);
     innerHTML('dato',result);
console.log(taskvalue.codigo);
});
}

/*
function read(){

  var task= firebase.database().ref('clientes/'+1);
 task.on('value',function(parameters){
var cedula=parameters.val();
console.log(cedula.name);
 });
  }

*/


//funcion para remover
function remove(id){
  console.log(typeof(id));
  var task=firebase.database().ref('producto/'+id);
  task.remove();
  console.log("borrando..."+id);
  location.reload();
}


  