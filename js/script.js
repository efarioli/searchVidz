
//

//searchbar handler
$( document ).ready(function() {
	
	var searchField = $('#query');
	var icon = $('#search-btn');

	//focus handler
	$(searchField).on('focus', function() {
		$(this).animate({
			width: '100%'
		},400);
		$(icon).animate({
			right: '10px'

		},400);

	});

	//blur event handler

	$(searchField).on('blur', function() {
		if (searchField.val()== '') {
			$(searchField).animate({
				width: '45%'
			},400, function(){});
			$(icon).animate({
				right: '360px'
			},400, function(){});
		}
	})

	 $('#search-form').submit(function(e) {
	 	e.preventDefault();
	 })

});

function search() {
	//Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get form Input
	q = $('#query').val();

	//Run Get Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: 'AIzaSyBCZgipwmv-daOhKVQWBKISU5dGjx24rng'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				//Log Data
				console.log(data);

				$.each(data.items, function(i, item){

					//Get Output
					var output = getOutput(item);

					//Display Results
					$('#results').append(output);

				});

			}


		)

}