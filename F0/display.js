 function display()
 {
  var temp=document.getElementById('pw').value;
  if(showPass.checked)
  {
    document.getElementById('pass').innerHTML='<input type="text" id="pw" name="pw">';
  }
  else
  { 
    document.getElementById('pass').innerHTML='<input type="password" id="pw" name="pw">';
  } 
  document.getElementById('pw').value=temp;
 }