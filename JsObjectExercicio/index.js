function exercicio1() {
    var student = {name : "David Rayy",sclass : "VI",rollno : 12 };
    for (let key in student) {
        console.log(key); 
    }
    
}
function exercicio2() {
    var student = {name : "David Rayy",sclass : "VI",rollno : 12 };
    delete student.rollno;
    for (let key in student) {
        console.log(key); 
    } 
}
function exercicio3() {
    var student = {name : "David Rayy",sclass : "VI",rollno : 12 };
    var objectLenght = Object.keys(student).length; 
        console.log("The lenght of this object is " + objectLenght); 
}
function exercicio4() {
    var library = [
        {author: 'Bill Gates',title: 'The Road Ahead',readingStatus: true},
        {author: 'Steve Jobs',title: 'Walter Isaacson',readingStatus: true},
        {author: 'Suzanne Collins',title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}
    ]; 
    for (let key in library) {
        console.log(library[key]); 
    } 
}
function exercicio5() {
     const pi = 3.14;
     var height = 5;
     var radius = 5;
     var volume =  pi * Math.pow(radius, 2) * height;
     console.log(volume.toFixed(4));
}
function exercicio6() {
    console.log(bubbleSort([6,4,0,3,-2,1]));
}
function bubbleSort(arrNumeros)
{
    var tudoOrdenado = false;
    var ultimoOrdenado = arrNumeros.length;
   while(!tudoOrdenado){
    tudoOrdenado = true;
    for(var i = 0;i < ultimoOrdenado -1;i++){
        if(arrNumeros[i] > arrNumeros[i+1]){
            tudoOrdenado = false;
            var temp = arrNumeros[i];
            arrNumeros[i] = arrNumeros[i+1];
            arrNumeros[i+1] = temp;
        }
    }
    ultimoOrdenado--;

   }
   return arrNumeros;
}
function exercicio7() {
   var word = "dog"
   var subset = [];
   for (var i = 0; i < word.length; i++) 
   {
     for (var x = i+1; x<word.length+1; x++) 
     {
       subset.push(word.slice(i,x));
     
     }
   }
   for(var i = 0;i < subset.length;i++ ) {
    console.log(subset[i]); 
   }
}
function exercicio8(raio) {
    const pi = 3.14;
    console.log("Área: " + pi * Math.pow(raio,2));
    console.log("Perimetro: " + 2 * pi * raio);
}
function ultimosQuatroExercicios() { 
    //exercicio 9  
    var myPenguin = {character :"Whiteblack",origin : "Whiteblack the Penguin Sees the World",author : "H. A. Rey and Margret Rey" };
    //exercicio 10  
    console.log("Hello, I'm a penguin and my name is " + myPenguin.character + "!"); 
    //exercicio 11 
    myPenguin.canFly = false;
   //exercicio 12
    myPenguin.chirp = function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
   }; 
   myPenguin.chirp();

}
 