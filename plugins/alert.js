export default (context,inject)=>{
  inject('alert',function(message){
    alert(message);
  });
}
