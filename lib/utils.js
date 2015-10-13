var consts = require('./consts');

module.exports = (function() {
    
    return {
        shuffleArray: function(source) {
            var len = source.length;
            var order = Math.ceil(Math.log10(len) + 1);
            var limit = Math.floor(Math.exp(order * Math.log(10)));
            var result = [];
            
            for(var i = 0; i < len; i++) { 
                var randomIndex = (Math.floor((limit * Math.random())) % i) || 0;
                if (randomIndex !== i) {
                    result[i] = result[randomIndex];
                }
                result[randomIndex] = source[i];
            }
            
            return result;
        }, 
        
        getDeck: function () { 
            var all = consts.SUITES.reduce(function(all, s) { 
                var suiteRanks = consts.RANKS.map(function(r) { return s + r; });
                [].push.apply(all, suiteRanks);
                return all;
            }, []);
            return this.shuffleArray(all);
        }
    };
})();