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

// Set day component on the Archives page
$('span.archive').each(
	function(){
		// Get the date of the post
		var data = $(this).attr('data');

		// Get the day
		var txtDay = data.substring(data.indexOf(' '),data.indexOf(','));

		// Update the content
		$(this).text(txtDay+':');
	}
);

// Set month/year component on the Archives page and make sure on the first of each is visible
var smd_divider = "";
$('h2.archive').each(
	function(){
		// Get the date of the post
		var data = $(this).attr('data');

		// Determine the date components
		var txtHeading = data.substring(0,data.indexOf(' ')) + data.substring(data.indexOf(',')+1);

		if ( smd_divider != txtHeading ) {
			smd_divider = txtHeading;
			$(this).text(txtHeading);
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