$(window).load(alinear);

function alinear() {
	$(".fila.alineada").each(function() {
		$hijos=$(this).children();
		var alturaMax=0;
		$hijos.each(function() {
			var nuevaAltura=$(this).height();
			if (nuevaAltura>alturaMax) {
				alturaMax=nuevaAltura;
			}
		});
		$hijos.each(function() {
			$(this).height(alturaMax);
		});
	});
}
