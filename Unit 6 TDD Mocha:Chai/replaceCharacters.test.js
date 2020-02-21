// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var replaceCharacters= require('../app/replaceCharacters');



describe("Replacing the following special characters '/<> with '-' ", function(){
	
	
	it("Nothing entered should fail", function(){		
		assert.isFalse(replaceCharacters(""));
	});
	
	it("A space should fail", function(){		
		assert.isFalse(replaceCharacters(" "));
	});
	
	it("Null should fail", function(){		
		assert.isFalse(replaceCharacters("null"));
	});
	
	it("Undefined should fail", function(){		
		assert.isFalse(replaceCharacters("undefined"));
	});
	
	it("Should pass and replace to a dash", function(){		
		assert.isTrue(replaceCharacters("'"));
	});
	
	it("Should pass and replace to a dash", function(){		
		assert.isTrue(replaceCharacters("/"));
	});
	
	it("Should pass and replace to a dash", function(){		
		assert.isTrue(replaceCharacters("&lt;"));
	});
	
	it("Should pass and replace to a dash", function(){		
		assert.isTrue(replaceCharacters("&gt;"));
	});

	it("Apostrophe at end should replace to a dash", function(){		
		assert.isTrue(replaceCharacters("hello'"));
	});
	
	it("Apostrophe in the middle should replace to a dash", function(){		
		assert.isTrue(replaceCharacters("hel'lo"));
	});
	
	it("Apostrophe at the beginning should replace to a dash", function(){		
		assert.isTrue(replaceCharacters("'hello"));
	});
	
	it("Should fail because dash stays a dash and newInValue will equal inValue", function(){		
		assert.isFalse(replaceCharacters("-hello"));
	});
	
	
	
});