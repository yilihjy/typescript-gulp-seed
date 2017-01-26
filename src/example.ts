export  class Example{
    example(words:string):string{
        return `Argument is ${words}`;
    }
}
if(typeof alert != "undefined"){
    let ex = new Example();
    alert(ex.example("Hello!"));
}