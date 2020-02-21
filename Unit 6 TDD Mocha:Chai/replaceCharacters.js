// JavaScript Document


var replaceCharacters = function(inValue){
	inValue += "";	//turns all inValues into strings
	newInValue = inValue.replace(/\/|'|&lt;|&gt;/g, "-");		//regular expression replaces special characters /'<> with "-"
																// had to use &lt; for "<" and &gt; for ">" 
	if(newInValue == inValue){									//if newInValue DOES equal inValue, that means regex did not work and nothing was changed
		return false;
	}
	return true;
	
}
	

module.exports = replaceCharacters;



/*

TEST PLAN


		actual		||			expected
					||
			'		||		-
			/		||		-
			<		||		-
			>		||		-
		hello'		||		hello-
		hel'lo		||		hel-lo
		'hello		||		-hello
					
					
*/

