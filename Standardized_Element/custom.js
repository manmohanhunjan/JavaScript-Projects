myBody.myData = {
    name : 'xyz',
    age : '195',
}

console.log(myBody.myData.name);

Element.prototype.sayHello  = function () {
    console.log(this.tagName);

}
document.documentElement.sayHello();
document.body.sayHello();

const div  = document.querySelector('div');
div.sayHello();

const inp = document.querySelector('input')
inp.sayHello();

Element.prototype.udaDo = function () {
    this.remove();
}

inp.udaDo();

const chld = document.querySelector('#chld')

Element.prototype.parantUdaDo  = function () {
    this.parentElement.remove();
}

chld.parantUdaDo();

Element.prototype.addKroData = function(){
    const inppp = document.createElement('input')
    this.appendChild(inppp);
}

div.addKroData();