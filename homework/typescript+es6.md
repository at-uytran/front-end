# Typescript + ES6

## Typecript
**Typescript**
> TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. We need Typescript because of it provide a richer environment to find errors when we code. It makes Javascript came be easier and reliable

**Install Typescript**
> First we have to install npm:
```
npm install 
```
> Then we install typescript

```
npm install -g typescript
```
**Compile typescript file**
> To compile typescript file, we have to create a file named like js file in it's folder.
> At terminal, run(with typescript file named test.ts ):
```
tsc -w test.ts
```
**Which Object Oriented terms are supported by TypeScript? Write an example.**
> Type script is support all OOP terms like another OOP languages: 
> - Constructor:
> - Private and  public properties
> - Extends
> - Interface
> - Implements

*Constructor:*
```typescript
class Vehicle {
	constructor(){
		this.name = "Car";
		this.wheel = "4";
	}
}

```
*Private and  public properties*

```typescript
class Vehicle {
    private color:string;
    public sound:string;

	constructor(){
		this.name = "Vehicle";
		this.wheel = "4";
	}
}

```
*Extends*

```typescript
class Car extends Vehicle {
  
    constructor(name:string, wheel:string)
    {
        super(name, whell);
 
        this.name = "Car";
 
        console.log(this.name, "has", this.wheel.getType(), "wheel");
    }
 
```

*Interface*

```typescript
interface IDrive{
	isDriving:boolean;
	turnOn():void;
	turnOf():void;
}
```


*Implement*


```typescript
public CarDriving implements IDrive{
	public isDriving:boolean;
	constructor(){
		this.isDriving = false;
	}
	public turnOn():void{
		console.log("Car is driving");
		this.isDriving = true;
	}
	public turnOff():void{
		console.log("This car is stopped");
		this.isDriving = false;
	}
}
```
**Write example: **
*Block scope variables:*
```typescript
function f(a: boolean) {
    if (a) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'
```

*Temlate Literals:*

> -  Tag template:
> In a tag ${ ... }, we can type whatever javascript methods.
> 
```typescript
`${ $b.value } <br/>`
```

```typescript
var cat = {
    name: 'Móm',
    work: function() {
        return 'climbing tree!?';
    }
};
console.log(`${cat.name} is ${cat.work()}`);

```

*Multi-line strings: *

```typescript
`string text`

console.log('string text line 
string text line 2');

```

*Arrow function: *
> Its like and also called a lambda function in Typescript

```typescript
var inc = (x)=>x+1;

```

*For...of*

```typescript
var a = [4, 5, 6];
for (var i of a) {
    console.log(i);// => output: 4,5,6
}
```


*Default parameters*

> Default parameters help us to initialize a function with default values
> - A default value is used when an argument is undefined or either omitted.

```typescript
function multiply (a, b = 2) {
  return a * b;
}
multiply(5); //=> output is 10
```
