/**
@license markov | (c) Andy Parry. | https://github.com/MontyGoose/markov/blob/master/LICENSE
*/

'use strict';

var _ = require('lodash');

exports = module.exports = Markov;

/** Memory Map **/
var memoryMap = {};
/** chain order **/
var chainOrder = 2 //default

/** 
 * @private
 * Create an initial array to hold states - this needs to cope
 * with n-order Markov chains (finite)
 */
function initialState(order) {
    return _.times(order, _.constant(''));
}

	
/** 
 * @constructor
 * @public
 * @param {number} order
 */
function Markov(order)
{
    chainOrder = order || 2; //default to 2nd order
};

/**
 * Adds an array or words to the Markov chain
 * @param {Array.<string>} words The words to add to the Markov chain
 */
Markov.prototype.addArrayToChain = function(array) {
    _.each(array,this.addToChain);
};

/**
 * Adds an element to the Markov chain
 * @param {string} element (word, sentence, ...)
 */
Markov.prototype.addToChain = function(element) {
		
    var prev = initialState(chainOrder), 
        //map = this.map,
        parts = element.split('');
    _.each(parts, step); 
    updateMap(prev,'');
    
    function step(next) {
        updateMap(prev,next)
        prev.shift();
        prev.push(next);
    }
    
    function updateMap(key,value) {
        if (!memoryMap[key]) {
            memoryMap[key] = [];
        }
        memoryMap[key].push(value);
    }
};


Markov.prototype.ask = function(seed) {
    var map = this.map;
    
    if (!seed) seed = initialState(chainOrder);

    return seed.concat(step(seed,[])).join('');
    
    function step(state,ret) {
        var nextAvailable = memoryMap[state] || [''],
            next = _.chain(nextAvailable).sample(1).first().value();

        //we don't have anywhere to go
        if (!next) {
            return ret;
        }
 
        ret.push(next);
        var nextState = state.slice(1);
        nextState.push(next);
        return step(nextState, ret);
    }
    
}

