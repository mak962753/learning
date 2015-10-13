var logic = require("../lib/logic");
var assert = require("assert");

describe("logic", function() {
    describe("creation", function() { 
        it("should not allow 1 or less actor", function () { 
            assert.throws(logic.bind(null, 1), Error);
            assert.throws(logic.bind(null, 0), Error);
            assert.throws(logic.bind(null, -1), Error);
        });
    });
});