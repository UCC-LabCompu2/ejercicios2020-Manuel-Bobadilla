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

