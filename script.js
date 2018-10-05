'use strict';

var ArrayInstructions = [
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789',
  '123465789'
];

var text = document.getElementById('textarea');
var string = String(string);
var Event = document.getElementsByTagName('button');
var buff = document.querySelector('textarea');
var range;


for (var i = 0; i < Event.length; i++) {
  string = ArrayInstructions[i];
  Event[i].onclick = function(){
    text.value = string;
    buff.value = text.value;
  };
}

function Copy() {
  range.selectNode(buff);
  window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
      console.log('Complete copy!');
   }
   catch {
     console.log('Not range');
   }
    window.getSelection().removeAllRanges();
};
