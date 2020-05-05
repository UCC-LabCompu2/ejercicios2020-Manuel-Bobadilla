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
	if(isNaN(valor)){
		alert("se ingreso un valor invalido");
		document.las_unidades.unid_metro.value="";
		document.las_unidades.unid_pulgada.value="";
		document.las_unidades.unid_pie.value="";
		document.las_unidades.unid_yarda.value="";
	}
	else if(id=="metro"){
		document.las_unidades.unid_pulgada.value=39.3701*valor;
		document.las_unidades.unid_pie.value=3.28084*valor;
		document.las_unidades.unid_yarda.value=1.09361*valor;
	}
	else if(id=="pulgada"){
		document.las_unidades.unid_metro.value=0.0254*valor;
		document.las_unidades.unid_pie.value=0.083333*valor;
		document.las_unidades.unid_yarda.value=0.027777*valor;
	}
	else if(id=="pie"){
		document.las_unidades.unid_metro.value=0.3048*valor;
		document.las_unidades.unid_pulgada.value=12*valor;
		document.las_unidades.unid_yarda.value=0.33333*valor;
	}
	else if(id=="yarda"){
		document.las_unidades.unid_metro.value=0.9144*valor;
		document.las_unidades.unid_pulgada.value=36*valor;
		document.las_unidades.unid_pie.value=3*valor;
	}
}