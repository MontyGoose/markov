'use strict';

var expect = require('chai').expect;
var Markov = require('../lib/index');

var somewords = require("./wordarray");

describe('1st order Markov', function() {

  var markov = new Markov({order:1});
  
  it('should return empty string if no chain', function() {
    var response = markov.ask();      
    expect(response).to.be.a('string');
    expect(response).to.equal('');
  });
    
  it('should for single entry return input string', function() {
    markov.addToChain("markov");
    var response = markov.ask();      
    expect(response).to.be.a('string');
    expect(response).to.equal('markov');
  });
    
  it('should accept mutliple entries and return string', function() {
    markov.addToChain("hello");
    markov.addToChain("again");
    markov.addToChain("andrey");
    markov.addToChain("markov");
    var response = markov.ask();
    expect(response).to.be.a('string')
  });

});


describe('2nd order Markov', function() {

  var markov = new Markov({order:2});
  var somewords = require("./wordarray");

  it('should return empty string if no chain', function() {
    var response = markov.ask();      
    expect(response).to.be.a('string');
    expect(response).to.equal('');
  });
    
  it('should for single entry return input string', function() {
    markov.addToChain("markov");
    var response = markov.ask();      
    expect(response).to.be.a('string');
    expect(response).to.equal('markov');
  });
    
  it('should accept mutliple entries and return string', function() {
    markov.addToChain("hello");
    markov.addToChain("again");
    markov.addToChain("andrey");
    markov.addToChain("markov");
    var response = markov.ask();
    expect(response).to.be.a('string')
  });
    
});


describe('1st order Markov (sentences)', function() {

  var markov = new Markov({order:1,element:'sentence'});
  
  it('should return empty string if no chain', function() {
    var response = markov.ask();      
    expect(response).to.be.a('string');
    expect(response).to.equal('');
  });
    
  it('should for single entry return input string', function() {
    markov.addToChain("The cat");
    var response = markov.ask();      
    expect(response).to.be.a('string');
    expect(response).to.equal('The cat');
  });
    
  it('should accept mutliple entries and return string', function() {
    markov.addToChain("Fuzzy Wuzzy was a bear");
    markov.addToChain("Fuzzy Wuzzy has no hair");
    markov.addToChain("Fuzzy Wuzzy wasn't fuzzy was he");
    markov.addToChain("The cat sat on the mat");      
    var response = markov.ask();
    expect(response).to.be.a('string')
  });
    
});