// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validateZipCode = require('../app/validateZipCode');



describe("Testing Valid 5 digit zip code", function(){
	
	
	
	it("No input should fail", function(){		
		assert.isFalse(validateZipCode(""));
	});
	
	it("A space and nothing entered should fail", function(){		
		assert.isFalse(validateZipCode(" "));
	});
	
	it("Two spaces and nothing entered should fail", function(){		
		assert.isFalse(validateZipCode("  "));
	});
	
	it("Null should fail", function(){		
		assert.isFalse(validateZipCode("null"));
	});
	
	it("Undefined should fail", function(){		
		assert.isFalse(validateZipCode("undefined"));
	});
	
	it("5 characters should fail", function(){		
		assert.isFalse(validateZipCode("bbbbb"));
	});
	
	it("1 digit should fail", function(){		
		assert.isFalse(validateZipCode("3"));
	});
	
	it("6 digits should fail", function(){		
		assert.isFalse(validateZipCode("123456"));
	});
	
	it("4 digits should fail", function(){		
		assert.isFalse(validateZipCode("1234"));
	});
	
	it("5 digits should pass", function(){		
		assert.isTrue(validateZipCode("12345"));
	});
	
	it("whitespace before should pass", function(){		
		assert.isTrue(validateZipCode("    12345"));
	});
	
	it("whitespace after should pass", function(){		
		assert.isTrue(validateZipCode("12345   "));
	});
	
	it("Characters between digits should fail", function(){		
		assert.isFalse(validateZipCode("1-2-3-4-5"));
	});
	
	it("mixture of numbers and letters should fail", function(){		
		assert.isFalse(validateZipCode("123c4"));
	});
	
	
});