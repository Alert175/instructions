'use strict';

var ArrayInstructions = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Reprehenderit veritatis, minus officiis reiciendis tempore? Sapiente ullam non impedit, obcaecati hic recusandae deleniti corporis quasi iusto minima distinctio quis eaque harum, qui voluptatibus magnam, quo nobis voluptate! Quo nulla, aspernatur aperiam, reiciendis perferendis dolorem eligendi, similique consequuntur itaque vitae, minus soluta.\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis',
  'jkljkl',
  'uoipiop',
  'retert',
  '123',
  '234',
  '345',
  '456',
  '567',
  '678',
  '789',
  'uio',
  'opkl',
  ',m.m',
  'nm,nm,',
  'vbnvbn',
  'xcvxcv',
  'zxczxc',
  'ZXZx',
  'afsdf',
  'fghfgh',
  'ghjghj',
  'hjkhjk',
  'jkljk',
  'kl;kl;',
  '-',
  '456',
  '789',
  '123',
  '789'
];

var text = document.getElementById('textarea');
var string = String(string);
var buff = document.querySelector('textarea');
var range = document.createRange();
var ArrayInstructions_Index;

var SuccessSearchElement = String(SuccessSearchElement);


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

function func(key) {
  ArrayInstructions_Index = key.id;
  string = ArrayInstructions[ArrayInstructions_Index];
  text.value = string;
  buff.value = text.value;
  Copy();
};


function SearchElement(key){
  if (event.keyCode == 13) {
    var RegularParametrToSearch = new RegExp(key.value, );
    for (var i = 0; i < ArrayInstructions.length; i++) {
      if (RegularParametrToSearch.test(ArrayInstructions[i]) == true) {
        text.value = ArrayInstructions[i];
        buff.value = text.value;
        Copy();
      }
    }
  }
};
