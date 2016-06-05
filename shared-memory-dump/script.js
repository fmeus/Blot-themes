{{{appJS}}}

// This script is embedded in the footer of every page

// Processing of code blocks for syntax highlighting and/or line numbers
$('pp').each(
	function(){
		var val = $(this).text();
		if ( val ) {
			$(this).parent().next('pre').addClass('prettyprint linenums:'+val);
		} else {
			$(this).parent().next('pre').addClass('prettyprint');
		}
	}
);

// Add dropshadow to images ending with `-ds`
$('img').each(function() {
	var filename = $(this).attr('src');
	var imgName = filename.substr(0, filename.lastIndexOf('.')) || filename;

	if ( imgName.substr(imgName.length - 3) == '-ds' ) {
		$(this).addClass('dropshadow');
	}
});

// Update title attribtue using alt attribute if not already set
$('img').each(function() {
	var title = $(this).prop('title');
	if ( title === '' ) {
		$(this).prop('title', $(this).prop('alt'));
	}
});

// Embedding of instagram posts
$('p').each(function () {
	searchText = $(this).text();
	matches = searchText.match(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/[p]\/([A-Za-z0-9-_]*)\//g);

	if ( matches != null && searchText === matches[0] ) {
		$.ajax({
			context: this,
			url: "https://api.instagram.com/oembed/?maxwidth=400&url="+matches[0],
			dataType: 'jsonp',
			success: function(data) { $(this).html(data.html); }
		});
	}
});