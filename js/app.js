// $('.search-button').click(function() {
// 	alert("Button Click!");
// });


var displayWikiData = function() {
	var searchString = $('#searchString').val();
	var $linksElement = $('#links');
	var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchString + "&format=json&callback=?"; 
	//var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchString + "&format=json&callback=?"; // url to look for using the search input by the user
	if(searchString == "") {
		alert("Type input!");
	}
	$.ajax({
		url: wikipediaUrl,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(result) {
			var linkList = result[1];
			//console.log(linkList);
			linkList.forEach(function(element){
				console.log(element);
				var url = 'https://vi.wikipedia.org/wiki/' + element;
				$linksElement.append('<li><a href="'+ url +'">' + element + '</a></li>');
				return url;
			});
			
		}
	});

	return false;
};

$('#form').submit(displayWikiData);