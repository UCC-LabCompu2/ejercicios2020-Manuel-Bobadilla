/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades, metros, yardas, pies y pulgadas
 * @method cambiar_unidad
 * @param {string} id -Contiene el id de metros, yardas pies y pulgadas
 * @param {number} valor -Contiene el valor de los inputs de metros, pies yardas y pulgadas
 * @return 
 */

function cambiar_unidad(id, valor){
	var metro,pulgada,pie,yarda;
	
	if(valor.includes(",")){
		valor=valor.replace(",",".");
	}
	
	if(isNaN(valor)){
		alert("se ingreso un valor invalido");
		metro="";
		pulgada="";
		pie="";
		yarda="";
	}
	else if(id=="metro"){
		metro=valor;
		pulgada=39.3701*valor;
		pie=3.28084*valor;
		yarda=1.09361*valor;
	}
	else if(id=="pulgada"){
		pulgada=valor;
		metro=0.0254*valor;
		pie=0.083333*valor;
		yarda=0.027777*valor;
	}
	else if(id=="pie"){
		pie=valor;
		metro=0.3048*valor;
		pulgada=12*valor;
		yarda=0.33333*valor;
	}
	else if(id=="yarda"){
		yarda=valor;
		metro=0.9144*valor;
		pulgada=36*valor;
		pie=3*valor;
	}
	document.las_unidades.unid_metro.value=Math.round(metro*100)/100;
	document.las_unidades.unid_pulgada.value=Math.round(pulgada*100)/100;
	document.las_unidades.unid_pie.value=Math.round(pie*100)/100;
	document.las_unidades.unid_yarda.value=Math.round(yarda*100)/100;
}

function convertirGR(id){
	var grad, rad;
	if(id=="grados"){
		grad = document.getElementById("grados").value;
		rad = (grad*Math.PI)/180;
	}
	else if(id=="radianes"){
		rad=document.getElementById("radianes").value;
		grad=(rad*180)/Math.PI;
	}
	document.getElementById("grados").value = grad;
	document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
	if(valorMO=="val_mostrar"){
		document.getElementById("divMO").style.display='block';
	}	
	else if(valorMO=="val_ocultar"){
		document.getElementById("divMO").style.display='none';
	}
}

function calcularSuma() {
	var num1,num2;
	num1=Number(document.getElementsByName("sum_num1")[0].value);
	num2=Number(document.getElementsByName("sum_num2")[0].value);
	document.getElementsByName("sum_total")[0].innerHTML=num1+num2;
}

function calcularResta() {
	var num1,num2;
	num1=Number(document.getElementsByName("res_num1")[0].value);
	num2=Number(document.getElementsByName("res_num2")[0].value);
	document.getElementsByName("res_total")[0].innerHTML=num1-num2;
}

function calcularMultiplicacion() {
	var num1,num2;
	num1=Number(document.getElementsByName("mul_num1")[0].value);
	num2=Number(document.getElementsByName("mul_num2")[0].value);
	document.getElementsByName("mul_total")[0].innerHTML=num1*num2;
}

function calcularDivision() {
	var num1,num2;
	num1=Number(document.getElementsByName("div_num1")[0].value);
	num2=Number(document.getElementsByName("div_num2")[0].value);
	document.getElementsByName("div_total")[0].innerHTML=num1/num2;
}

function cargarWeb() {
	var cant, unidad, url;
	cant=document.getElementById("distancia").value;
	unidad=document.getElementsByName("unidades")[0].value;
	url="segundaWeb.html#"+cant+"#"+unidad;
	window.open(url);
}

function cargarResultado() {
	var url,can,un;
	url=window.location.href.split("/")[9];
	can=url.split("#")[1];
	un=url.split("#")[2];
	document.getElementById("dist").value= can + " " + un;
}

function dibujarcc(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var yMax = canvas.height;
	var xMax = canvas.width;
	var margen=10;
	ctx.fillStyle="#100";
	ctx.fillRect(0+margen,yMax-100-margen,200,100);
	ctx.arc(xMax/2,yMax/2,50,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle="#568";
	ctx.fill();
}
var bandera;
function dibujar(event) {
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var posx=event.clientX;
	var posy=event.clientY;
	console.log(posx,posy);
	canvas.onmousedown=function(){bandera=true};
	canvas.onmouseup=function(){bandera=false};
	if(bandera){
		ctx.fillRect(posx,posy,5,5);
		ctx.fill;
	}
}

function limpiarcanvas(){
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	canvas.width=canvas.width;
}

function dubujarCuadricula(){
	var canvas=document.getElementById("myCanvas");
	var ctx=canvas.getContext("2d");
	var alturaMax=canvas.height;
	var anchoMax=canvas.width;
	
	ctx.beginPath();
	for(var i=0;i<alturaMax;){
		ctx.moveTo(0,i);
		ctx.lineTo(alturaMax,i);
		ctx.strokeStyle="#990";
		ctx.stroke();
		i=i+20;
	}
	ctx.closePath();
	
	ctx.beginPath();
	for(var i=0;i<anchoMax;){
		ctx.moveTo(i,0);
		ctx.lineTo(i,anchoMax);
		ctx.strokeStyle="#990";
		ctx.stroke();
		i=i+20;
	}
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(0,alturaMax/2);
	ctx.lineTo(anchoMax,alturaMax/2);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(anchoMax/2,0);
	ctx.lineTo(anchoMax/2,alturaMax);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ctx.closePath();
}

function dibujarimagen(posx,posy){
	var canvas=document.getElementById("myCanvas");
	var ctx=canvas.getContext("2d");
	console.log(posx,posy);
	var img = new Image();
	img.src="images/auto.png";
	canvas.width=canvas.width;
	img.onload=function(){
		ctx.drawImage(img,posx,posy);	
	}
}
x=0;
dx=2;
function animarAuto(){
	var canvas=document.getElementById("myCanvas");
	var ctx=canvas.getContext("2d");
	
	canvas.width=canvas.width;
	
	var img = new Image();
	img.src="images/auto.png";
	
	img.onload=function(){
		ctx.drawImage(img,x,100);	
	}
	if(x>canvas.width){
		x=0;
	}
	x+=dx;
}







