const myInformation = require('./information.js');

var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `I'm ${myInformation.name} and i'm on the ${myInformation.campus} campus.` ,
    e : "oO",
    T : "U "
}));
