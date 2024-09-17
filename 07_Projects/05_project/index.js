let div=document.getElementById("insert")
window.addEventListener('keydown',(e)=>{
    let ele = `
<table>
  <tr>
    <td>key</td>
    <td>keyCode</td>
    <td>Linus</td>
  </tr>
    <tr>
    <td>${e.key===" "? "Space":e.key}</td>
    <td>${e.Code}</td>
    <td>${e.code}</td>
  </tr>
</table>`
div.innerHTML=ele;
})