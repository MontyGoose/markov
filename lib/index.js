/**
@license markov | (c) Andy Parry. | https://github.com/MontyGoose/markov/blob/master/LICENSE
*/

'use strict';

var _ = require('lodash');

exports = module.exports = Markov;

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
 * @options {order, element} 
 */
function Markov(opt) {
    var opt = opt || {};
    this.memoryMap = {};
    this.globals = {};

    this.globals.order = opt.order || 2; //default to 2nd order
    this.globals.element = opt.element || 'word'; //default to no seperator (letters)
    this.globals.seperator = this.globals.element === "word" ? "" : " ";
};

/**
 * Adds an array or words to the Markov chain
 * @param {Array.<string>} words The words to add to the Markov chain
 */
Markov.prototype.addArrayToChain = function(array) {
    _.each(array,this.addToChain.bind(this));
};

/**
 * Adds an element to the Markov chain
 * @param {string} element (word, sentence, ...)
 */
Markov.prototype.addToChain = function(element) {
    var prev = initialState(this.globals.order), 
        parts = element.split(this.globals.seperator),
        that = this;
    
    _.each(parts, step); 
    updateMap(prev,'');
    
    function step(next) {
        updateMap(prev,next)
        prev.shift();
        prev.push(next);
    }
    
    function updateMap(key,value) {
        if (!that.memoryMap[key]) {
            that.memoryMap[key] = [];
        }
        that.memoryMap[key].push(value);
    }
};



/**
 * get a response from the Markov chain
 * @opt set min, max and seed conditions
 */
Markov.prototype.ask = function(opt) {

    var opt = opt || {},
        //seed = opt.seed || initialState(this.globals.order),
        seed = initialState(this.globals.order),        
        that = this;
    
    return _.without(seed.concat(step(seed,[])),"").join(this.globals.seperator); 
    
    function step(state,ret) {
        var nextAvailable = that.memoryMap[state] || [''],
            next = _.chain(nextAvailable).sample(1).first().value();

        if (!next) {
            return ret;
        }
 
        ret.push(next);
        var nextState = state.slice(1);
        nextState.push(next);
        return step(nextState, ret);
    }
    
}

