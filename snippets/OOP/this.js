// Im Webbrowser ist das window Objekt das globale Objekt:
console.log(this === window); // true
a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b);  // "MDN"
console.log(b);  