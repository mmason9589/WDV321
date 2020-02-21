// JavaScript Document

var validateZipCode = function(inValue){
	inValue += "";	//turns all inValues into strings
	if(!/^[0-9]{5}$/.test(inValue.trim())){
		return false;
	}
	return true;
}

module.exports = validateZipCode;



/*

TEST PLAN


		PASS		||			FAIL
					||
					||		No input
					||		1 space
					||		2 spaces
					||		"null"
					||		"undefined"
					||		"bbbbb"
					||		1
					||		1234		
					||		123456
	12345			||				
					||		1234a
					||		12 345
	' 12345'		||			
	'12345 '		||
					||		1-2-3-4-5
					||		1/2/3/4/5
					||		123c4

*/

