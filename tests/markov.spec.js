'use strict';

var expect = require('chai').expect;
var Markov = require('../lib/index');

var foo = 'bar';

describe('Markov', function() {

  var markov = new Markov(2);
  var somewords = require("./wordarray");
  
  it('should load words', function() {
    markov.addArrayToChain(somewords);      
    expect(foo).to.be.a('string')
      
  });
    
    
  it('should return string when asked', function() {
    var response = markov.ask();
    console.log(response);
    expect(response).to.be.a('string')
  });
    
  it('should return string larger than 3 and less than 10', function() {
    var response = markov.ask(3,10);
    console.log(response);
    expect(response).to.be.a('string')
      
  });
    
    
});
