'use strict';

var expect = require('chai').expect;
var Markov = require('../lib/index');

describe('Load data from file', function() {

    it('should populate with array', function() {
        var array = require('./wordarray');
        var markov = new Markov();
        markov.addArrayToChain(array);
        
        var ask = markov.ask();

        expect(ask).to.be.a('string')          
    });

      
});
