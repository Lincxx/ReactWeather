var names = ['Jeremy', 'Andrew', 'Josh', 'Jeff'];

names.forEach(function (name) {
    console.log('forEach', name);
});

//arrow functions
names.forEach((name) => {
    console.log('arrowFun', name);

});

names.forEach((name) => console.log(name));


var returnMe = (name) => name + '!';

console.log(returnMe('Jeremy'));


var person = {
    name: 'Mike',
    greet: function () {
        names.forEach( (name) => {
           console.log(this.name + ' says hi to ' + name)
        });
    }
};

person.greet();

//challenge Area

function add(a, b) {
    return a + b;
}

console.log(add(1, 4));

//statement
var addmore = ((num1, num2) => {
    console.log('arrowFun', num1 + num2);

});

addmore(12, 233);
//expression
var add2 = (num1, num2) => num1 + num2;

console.log(add2(3,6));