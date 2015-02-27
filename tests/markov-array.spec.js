'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var Markov = require('../lib/index');

var foo = 'bar';

describe('Load data from file', function() {

    it('should populate with array', function() {
        var array = require('./wordarray');
        var markov = new Markov();
        markov.addArrayToChain(array);
        console.log(markov.ask());

        expect(foo).to.be.a('string')          
    });

      
});
