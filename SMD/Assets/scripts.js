{{{appJS}}}

// This script is embedded in the footer of every page

/* Processing of code blocks for syntax highlighting and/or line numbers */
$('pp').each(
	function(){
		var val = $(this).text();
		if ( val ) {
			$(this).next('pre').addClass('prettyprint linenums:'+val);
		} else {
			$(this).next('pre').addClass('prettyprint');
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