
module.exports = function (actorCount) { 

    if (actorCount <= 1 || actorCount > 6)
        throw new Error("invalid actor count.");
        
    var result = {

        state: { 
            activeCards: [],
            inactiveCards: [],
            topSuite: null,
            actors: [],
            currentCardPairs: [],
            currentActor: null
        },
        
        start : function () { 
            
            
        }
    };
    
    return result;
    
};