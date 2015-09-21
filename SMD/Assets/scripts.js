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

// Handling of 'dividers' for archive page
var smd_divider = "";
$('h2.archive').each(
	function(){
		if ( smd_divider != $(this).text() ) {
			smd_divider = $(this).text();
		} else {
			$(this).toggle();
		}
	}
);

// Calendar badge related code
$('div.calendar').each(
	function(){
		// Get the date of the post
		var data = $(this).attr('data');

		// Determine the date components
		var txtMonth = data.substring(0,3);
		var txtDay = data.substring(data.indexOf(' '),data.indexOf(','));
		var txtYear = data.substring(data.indexOf(', ')+1);

		// Update the content of the span elements
		$(this).children('.month').text(txtMonth);
		$(this).children('.day').text(txtDay);
		$(this).children('.year').text(txtYear);
	}
);