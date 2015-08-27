{{{appJS}}}

// This script is embedded in the footer of every page

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