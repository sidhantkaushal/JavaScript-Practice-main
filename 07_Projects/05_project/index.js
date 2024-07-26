let div=document.getElementById("insert").addEventListener('keydowm',(e)=>{
    let ele = `
<table>
  <tr>
    <td>key</td>
    <td>keyCode</td>
    <td>Linus</td>
  </tr>
    <tr>
    <td>${e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
div.innerHTML=ele;
})