function fun(){  
var s=document.getElementById('link').value; 
var p=document.getElementById('pno').value;
let page="#page=";
let page1=page.concat(p);
let ur=s.concat(page1);
console.log(ur);
window.open(ur,'top');
}
