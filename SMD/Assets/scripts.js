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