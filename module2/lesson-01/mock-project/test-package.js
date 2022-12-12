function sayHello(name){
    return `Hello ${name}`;
}

function sayGoodbye(name){
    return `Goodbye ${name}`;
}

module.exports = { 
    sayHello: sayHello, 
    sayGoodbye: sayGoodbye
}