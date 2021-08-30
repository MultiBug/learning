
document.write("<h1>Hello World!</h1>");
console.log("Hello from console!");
console.log("JS is fun");
var x = 100;
document.writeln(x+'<br>');
var x = 101;
    console.log(x);
x = 42;
    console.log(x);
    /* // This is a single line comment
    alert("This is an alert box"); */
/*  This code
    create an
    alert box
    alert("This is an alert box!"); */
var num = 42; // Число без десятичных знаков
var price = 55.55; // Число с десятичными знаками
document.writeln(price+'<br>');
var name = ' John <br> '
    document.writeln(name);
var text = ' My name is John Smith <br>';
    document.writeln(text);
var text = " My name is 'John' <br>";
    document.writeln(text);
var sayHello = ' Hello world! \'I am a JavaScript programmer.\' <br>';
    document.writeln(sayHello);
var isActive = true;
var isHoliday = false;
var x = 10 + 5;
    document.writeln(x+'<br>');
var x = 10;
var y = x + 5 - 22 + 45 + 6548;
    document.writeln(y+'<br>');
var x = 10 * 5;
    document.writeln(x+'<br>');
var x = '10' * '5';
    document.writeln(x+'<br>');
var x = 100 / 5;
    document.writeln(x+'<br>');
var myVariable = 26 % 6;
    document.writeln(myVariable+'<br>');
var result = 20;
    result *= 5;
    document.writeln(result+'<br>');
var num = 10;
    // num == 8 will return false
var x = (4>2) && (10<15);
    document.writeln(x+'<br>');
age = 18 // age < 18 = Too young, age > 18 = Old enough
var isAdult = (age < 18) ? "Too young": "Old enough";
    document.writeln(isAdult+'<br>');
var mystring1 = 'I am learning';
var mystring2 = ' JavaScript with Sololearn.';
    document.writeln(mystring1 + mystring2+'<br>');
function main() {
    var distance = parseInt(readLine(), 10); //NodeJS
    console.log((distance/40)*60);
}
/* var myNum1 = 7;
var myNum2 = 10;
if (myNum1<myNum2) {
    alert('JavaScript is easy to learn');
} */
var myNum1 = 7;
var myNum2 = 10;
if (myNum1>myNum2) {
    alert('JavaScript is easy to learn');
}
else {
    document.writeln('7 > 10 = ERROR'+'<br>');
}
var course = 3; // меняя значение, будет разное выполнение кода
if (course == 1) {
    document.writeln('<h3>HTML Tutorial</h3>');
} else if (course == 2) {
    document.writeln('<h3>CSS Tutorial</h3>');
} else {
    document.writeln('<h3>JavaScript Tutorial</h3>');
}
var day = 2; // меняя значение, будет разное выполнение кода
switch (day) {
    case 1:
        document.writeln('Monday'+'<br>');
        break;
    case 2:
        document.writeln('Tuesday'+'<br>');
        break;
    case 3:
        document.writeln('Wednesday'+'<br>');
        break;
    default:
        document.writeln('Another day'+'<br>');
}
var color = 'yellow';
switch (color) { // меняя значение, будет разное выполнение кода
    case 'blue':
        document.writeln('This is blue.'+'<br>');
        break;
    case 'red':
        document.writeln('This is red.'+'<br>');
        break;
    case 'green':
        document.writeln('This is green.'+'<br>');
        break;
    case 'orange':
        document.writeln('This is orange.'+'<br>');
        break;
    default:
        document.writeln('Color not found.'+'<br>');
}
for (i=1; i<=5; i++) {
    document.writeln(i+'<br>');
}
var i=1;
for (; i<=5; i++) {
    document.writeln(i);
}
document.writeln('<br>')
for (i=1, text=''; i<=5; i++) {
    document.writeln(i);
}
document.writeln('<br>')
var i=0;
for (; i<10; ) {
    document.writeln(i);
    i++;
}
document.writeln('<br>')
var i=0;
while (i<=10) {
    document.writeln(i);
    i++;
}
document.writeln('<br>')
var i=20;
do {
    document.writeln(i);
    i++;
}
while(i<=25);
document.writeln('<br>')
for (i=0; i<=10; i++) {
    if (i==5)   {
        break;
    }
    document.writeln(i);
}
document.writeln('<br>')
for (i=0; i<=10; i++) {
    if (i==5) {
        continue;
    }
    document.writeln(i);
}
document.writeln('<br>')
var sum=0;
for (i=4; i<8; i++) {
    if (i==6) {
        continue;
    }
    sum+=i;
}
document.writeln(sum);
document.writeln('<br>')
var x=0;
while (x<6) {
    x++;
}
document.writeln(x);
document.writeln('<br>')
function main() {  //NodeJS
    var depth = parseInt(readLine(), 10);
    var day = 0;
    var total = 0;
    while (total < depth) {
        day = day + 1;
        total = total + 7;
        if (total >= depth) {
            console.log(day);
            break;
        }
        total = total - 2;
    }
}
/*function myFunction() {
    alert('Calling a Function!');
}
myFunction();*/
/*function sayHello2(name) {
    alert("Hi, " + name);
}
sayHello2("Vladislav");*/
/*function sayHello3(name) {
    alert('Hi, ' + name);
}
sayHello3('David');
sayHello3('Sarah');
sayHello3('John');*/
function sayHello4(name, age) {
    document.writeln(name + ' is ' + age + ' years old.');
}
sayHello4('Vladislav', '30');
document.writeln('<br>')
function myFunction(a, b) {
    return a * b;
}
var x = myFunction(5,6);
document.writeln(x);
document.writeln('<br>')
function addNumbers(a, b) {
    var c = a+b;
    return c;
}
document.writeln(addNumbers(40,2));
document.writeln('<br>')
/*alert('Hello\nHow are you?');*/
/*var user = prompt('Please enter your name');
alert(user);*/
/*var result = confirm('Do you really what to leave this page?');
if (result == true) {
    alert('Thanks for visiting');
}
else {
    alert('Thanks for staying with us');
}*/
function test(number) {
    while (number<5) {
        number++;
    }
    return number;
}
document.writeln(test(2));
document.writeln('<br>')
function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    convert = amount * rate;
    console.log(convert);
}
var person = {
    name: 'John', age: 31,
    favColor: 'green', height: 183
};
var x = person.age;
var y = person['age'];
var course = {
    name: 'JS', lessons: 41
};
document.writeln(course.name.length);
document.writeln('<br>')
var person = {
    name: 'John', age: 42, favColor: 'green'
};
function person23(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var p1 = new person23('John', 42, 'green')
var p2 = new person23('Amy', 21, 'red');
document.writeln(p1.age);
document.writeln('<br>')
document.writeln(p2.name);
document.writeln('<br>')
var John = {
    name: 'John',
    age: 25
};
var James = {
    name: 'James',
    age: 21
};
document.writeln(John.age);
document.writeln('<br>')
document.writeln(James.name);
document.writeln('<br>')
function person11(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2021 - this.age;
}
var p = new person11('Vladislav', 31);
document.writeln(p.yearOfBirth());
document.writeln('<br>')
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(){
        console.log(this.name + ': ' + this.number)
    };
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321)
a.print();
b.print();
var courses = new Array('HTML', 'CSS', 'JS',);
document.writeln(courses[0]); //меняя индекс массива, разный вывод
document.writeln('<br>')
var courses = ['HTML', 'CSS', 'JS'];
document.writeln(courses.length);
document.writeln('<br>')
var person = [];
person['name'] = 'John';
person['age'] = '46';
document.writeln(person['age']);
document.writeln('<br>')
document.writeln(Math.PI);
document.writeln('<br>')
var number = Math.sqrt(4);
document.writeln(number);
document.writeln('<br>')
/*var n = prompt('Enter a number', '');*/
var answer = Math.sqrt(n);
document.writeln('The square root of ' + n + ' is ' + answer);
document.writeln('<br>')
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours + ':' + mins + ':' + secs;
}
/*setInterval(printTime, 1000);*/
function main() {
    var inc = parseInt(readLine(), 10);
    var p = [98.99, 15.2, 20, 1026];
    var s = p[0]+inc;
    var s1 = p[1]+inc;
    var s2 = p[2]+inc;
    var s3 = p[3]+inc;
    console.log([s,s1,s2,s3]);
}
document.body.innerHTML = 'Some text';
var elem = document.getElementById('demo');
elem.innerHTML = 'Hello World!';


























