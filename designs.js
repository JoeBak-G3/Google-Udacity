// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
	event.preventDefault();

	// Select size input
	var gridRows = $('#inputHeight').val();
	var gridCols = $('#inputWeight').val();
	makeGrid(gridRows,gridCols);
});



function makeGrid(a,b){
	$('table tr').remove();

	// Your code goes here!
	for (var m = 1; m <=a; m++){
		$('table').append('<tr></tr>');
		for (var n = 1; n <= b; n++){
			$('tr:last').append('<td></td>');
			$('td').attr("class",'gridCell');
		}
	}

	//This changes color of cell after selecting a color and clicking a cell
	$('.gridCell').click(function(event){
		// Select color input
		var colorPicker = $('#colorPicker').val();
		$(event.target).css('background-color',colorPicker);
	});
}

	