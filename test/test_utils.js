var utils = require("../lib/utils");
var consts = require("../lib/consts");
var assert = require("assert");

describe("utils", function() {
    describe("shuffleArray", function() { 
        var source = [1,2,3,4,5,6,7,8];
        var result = utils.shuffleArray(source);
        
        it("should have same length after shuffling", function () { 
            assert.equal(source.length, result.length);
        });
        
        it("should create copy", function () { 
            assert.notEqual(source, result);
        });       
        
        it("should not deep equal", function () { 
            assert.notDeepEqual(source, result);
        }); 
        
        it("should contain all items from original", function () { 
            assert.ok(source.every(function(v) {return result.indexOf(v) !== -1;}));
        }); 
    });
    
    describe("getDeck", function() { 
        var values = utils.getDeck();
        var expectedCount = consts.SUITES.length * consts.RANKS.length;
        
        it("should generate certain number of values", function() { 
            assert.equal(expectedCount, values.length);
        });
        
        it("should not have duplicates", function() { 
            var noDuplicates = values.every(function(v,i) {
                return !values.some(function(vv,ii) { 
                    return vv == v && ii !== i;
                });
            });
            assert.ok(noDuplicates);
        });
        
    });
    
    
});