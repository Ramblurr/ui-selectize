import Ember from 'ember';
const { computed, observer, $, A, run, on, typeOf, debug, keys, get, set, inject } = Ember;    // jshint ignore:line

export default Ember.Controller.extend({
  demoChoices: ['Frog','Monkey','Lion'],
  myValue: 'bar',
  myStartingTags: ['foo','baz'],
  mySelection: 'Monkey',
  myTags: ['Monkey'],
  groupedChoices: [
    {id:'arm', name:'Arm', group:'body'},
    {id:'leg', name:'Leg', group:'body'},
    {id:'chest', name:'Chest', group:'body'},
    {id:'red', name:'Red', group:'color'},
    {id:'blue', name:'Blue', group:'color'},
    {id:'green', name:'Green', group:'color'},
    {id:'monkey', name:'Monkey', group:'animal'},
    {id:'lion', name:'Lion', group:'animal'},
    {id:'rabbit', name:'Rabbit', group:'animal'}
  ],
  things: computed(function() {
    return this.store.find('thing');
  }),
  groups: computed(function() {
    return this.store.find('group');
  }),
  optGroup: [
    {id: 'color', name: 'Colors'},
    {id: 'animal', name: 'Animals'},
    {id: 'body', name: 'Body'}
  ],
  animals: [
  {id:'monkey', name:'Monkey', group:'animal', synonyms: ['ape','gorilla']},
  {id:'lion', name:'Lion', group:'animal', synonyms: 'king'},
  {id:'rabbit', name:'Rabbit', group:'animal'}
  ],
  edAnimals: computed(function() {
    return this.store.find('animal');
  }),
  isolate: false,
  disabledToggle: true
});
