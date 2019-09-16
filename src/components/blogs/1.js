// Adding blog posts

const one = `# How I learned to Stop Worrying and Love the MVP
When I first started looking into coding bootcamps, I had no idea if this was something that I wanted to do. After a few months I found a few different ones I was interested in but I still felt unsure. Even after enrolling in the Software Engineering course at the Flatiron school I was unsure about my decision.

As I learned more about Ruby and object orientation I felt more confident in the material and my ability to understand it but something was still missing. I didn't have that 'Aha' moment where I knew that I had made the correct decision. It was not until we began working on our CLI application projects last week that I felt certain that this was something that I wanted to do.

While my project partner, RJ and I began to map out how we were going to divide the work and what topic we wanted to use, I began to think about more than just completing the assignments. I started to consider how to simplify our idea down to a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product).

After reading up on Minimum Viable Product and the benefits of this product development strategy, I approached RJ with an updated suggestion on where we should start. We began to plan out an MVP that was specific to our project and determine what it would take to get there.

When visualizing what an MVP for our project would look like I began to think about more than just writing methods. I started to consider how much time we could save by creating a working version and then building off of it for the rest of the week. I was hoping that we would be able to complete our MVP within the first couple of days and then start adding more intricacy for the last two days.

Luckily, as a result of this coordinated planning and preparation we were able to complete our MVP on the first day. As we had the rest of the week to add it, there was much less pressure to "complete" the project and we had time to improve on a working application.

![](https://media.giphy.com/media/9rjRwzhpZgt3QAYss5/giphy.gif)

Even though it was just a simple CLI application, this project proved to me that taking some time to plan it out before you get started can completely change the way you approach a project. I had no idea if I was going to like working on a CLI app or if I was going to like this coding bootcamp. However, after making something that works and turning it into something that looks and functions much better, I can say that I made the right choice and can't wait for what comes next!\n

You can find RJ and I's project on [Github](https://github.com/vizushu/module-one-final-project-guidelines-seattle-web-051319)`

const two = `# Rails Layouts
In my coding bootcamp we have started the Rails section of the curriculum. Last week it seemed very overwhelming, as if there was so much Rails content that I would not be able to understand enough to build an app.

At the start of this week, I still feel that I have barely scraped the surface of what Rails can really do.However, I did find one thing in particular that I really enjoy about the Rails apps we have made so far.

## Layouts ##

Layouts allow you to do a great many things with your application but to keep it simple, lets break down three simple ways that a layout can impact your application.

### Default Layout ###

This is the layout that will persist throughout your application. A default layout may contain a link to your homepage, a login / logout link, and a help link.This might look something like this. 

\`\`\`ruby
<%= link_to 'Home', root_path %>
<%= link_to 'Login', login_path %>
<%= link_to 'Help', help_path %>
<%= yield %>
\`\`\`

### Rendering a layout ###

Much like how you can render a view page, you can render a specific layout as well.For example, you may want to have a different layout on your login page than you do for your homepage.Rendering a layout uses a very similar syntax to rendering a specific view.

\`\`\`ruby
render layout: 'login'
\`\`\`

### Controller vs Method ###

By default your controller will look for a layout file that matches the controller model.For example, for your users controller, Rails will look for a users view file in your layouts folder.However, if you want to use a specific layout for one of your methods, you can still specify that with the render layout command that we saw above.

### Moving Forward ###

Layouts are an excellent way of keeping your code dry as something such as a 'Home' link might be found on nearly every page of your app.They also have the benefit of allowing you to include links that help you to navigate and test your app quickly.While it may not seem like much, I very much appreciate the ability to navigate my apps directly without having to manually enter URLs.`

const three = `# For Loops, for...of, and forEach Oh My!
As someone who has spent the better part of the past month and a half learning and writing in Ruby, transitioning to Javascript has been a bit disorienting.

Arrays in particular are a type of data that I have had the opportunity to play around with quite a bit over the past month and a half. As a result of using primarily Ruby, I am quite familiar with the each enumerable.

\`\`\`ruby

array1 = [1, 2, 3, 4]

def return_all(array)
array.each do | number |
    puts number
  end
end

return_all(array)

# => "1"
# => "2"
# => "3"
# => "4"

\`\`\`

## For loops

Naturally, I was a bit apprehensive when considering how to iterate through an array in Javascript. I had some idea of what a for loop was but I was under the impression that I would have to write a much longer function than I would in Ruby.

\`\`\`js

const array1 = [1, 2, 3, 4]

function returnAll(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

returnAll(array);

// => 1
// => 2
// => 3
// => 4
// => undefined
\`\`\`

As you can see, the above function is a bit longer in terms of syntax than the ruby function above. Although a for loop is the most standard way to iterate over an array in Javascript, as a Ruby user, I was looking for another way to iterate over an array.

In reading more about arrays in Javascript I stumbled across two other ways of iterating over an array. The first, a for ... of statement can be used to loop over more than just an array. According to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) a for ... of statement can iterate over strings, arrays, typedarrays, maps, and sets.

## for ... of

A for ... of statement allows you to use a variable that represents a piece of the data type that you are iterating over. In this way it is very similar to the .each enumerable from Ruby although the syntax looks a bit different.

\`\`\`js

const array1 = [1, 2, 3, 4]

function returnAll(array) {
    for (let number of array) {
        console.log(number)
    }
};

returnAll(array);

// => 1
// => 2
// => 3
// => 4
// => undefined

\`\`\`

In the above code, our returnAll function has been slimmed down quite a bit from the larger for loop that we saw initially. Our for ... of statement closely resembles the Ruby function that we wrote out at the start. A for ... of statement is also very easy to read. When I look at the above function I get a better idea of what it will do than our earlier for loop.

## .forEach

Another way to iterate over an array in Javascript is using the forEach method. When we reference the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) on the forEach method, we can see that this method is specific to arrays and is therefore not as versatile as the for ... of statement that we saw above. In my opinion however, it is still a simpler way to iterate over an array than our for loop.

\`\`\`js

const array1 = [1, 2, 3, 4]

function returnAll(array) {
    array.forEach(element => {
        console.log(element)
    })
};

returnAll(array);

// => 1
// => 2
// => 3
// => 4
// => undefined

\`\`\`
The forEach method is a bit different from both our for loop and the for ... of statement that we saw above. Rather than writing out a for statement, we are calling a method on our array. However, I still prefer the forEach method to a for loop when iterating over arrays in terms of readability.

One particular proverb that I have heard quite a few times is "There is more than one way to skin a cat". Although I have never really liked this particular proverb because of it's imagery, I have always been able to appreciate it's message. In my programming journey so far, I have found that this particular proverb is particularly apt.

When looking at the 3 different iterators above, I can say that the for ... of statement is particularly clear to me. I will undoubtedly have to use for loops much more often as I continue my Javascript journey but for now, I have found a particular way of iterating that makes the most sense to me.`

const four = `# Classes as an Organizational Tool
As someone who is currently in the react section of my coding bootcamp, I have been trying to get a better understanding of Javascript classes recently.

Hopefully, by the end of this article you and I both have a better understanding of what Javascript classes are and how they work.

## What is a Javascript Class?

A Javascript Class is really just a special type of function. Just like how you can have a function expression and a function declaration, classes also have class expressions and declarations.

### Function Expression
\`\`\`js
let foo = (a, b) => console.log(a + b)

foo(2, 3)

    // => 5
\`\`\`
### Function Declaration
\`\`\`js
foo(2, 3)

function foo(a, b) {
    console.log(a + b)
}

//=> 5
\`\`\`

While both methods of writing a function will return the same result, the function expression we saw will be undefined if we call it the same way that we called our function declaration. Function declarations are hoisted, which means that they are evaluated and saved before we run the line calling our function. Although this is important for our functions, it works a bit differently for classes.

## Class Declaration

As promised, declaration for classes is a bit different. A class declaration is not hoisted in the same fashion as a function declaration which means that you cannot create new instances of that class before you have created it.

#### Brief sidebar on Hoisting

For the purposes of this blog all we need to understand about hoisting is that it will cause our function declaration to be interpreted before we call the function directly. This means that we can call a function before we declare it and still have the function call be successful.

### Class Expression
\`\`\`js
let foo = class bar {
    constructor(hello, world) {
        this.hello = hello,
            this.world = world
    }
}

const baz = new foo("Hello", "World")
console.log(baz.hello)
console.log(baz.world)

    //=> "Hello"
    //=> "World"
\`\`\`
### Class Declaration
\`\`\`js
class fooBar {
    constructor(hello, world) {
        this.hello = hello,
            this.world = world
    }
}

const baz = new fooBar("Hello", "World")
console.log(baz.hello)
console.log(baz.world)

    //=> "Hello"
    //=> "World"
\`\`\`
In this case, both our expression and declaration have to be made before we try to create new instances of these classes. However, we are able to use the class expression to reference the bar class using foo.


## Why do Javascript classes matter?

Javascript classes are great for containing code. They allow us to define a class, create a constructor for that class and then write methods that modify the class. For example, if you wanted to write a function that takes two sides of a right triangle and displays the hypotenuse, you can easily incorporate that with a class.

### Triangle Class

\`\`\`js
class triangle {
    constructor(a, b) {
        this.a = a,
            this.b = b
    }
    findHypotenuse() {
        return Math.sqrt((this.a ** 2) + (this.b ** 2))
    }
    get c() {
        return this.findHypotenuse()
    }
}

const foo = new triangle(3, 4)
console.log(foo.c)

    //=> 5
\`\`\`
Using the findHypotenuse function that we wrote, we are able to get the hypotenuse for a right triangle and save that value as c. By describing the getter c function we are able to call .c on our triangle to return the length of the hypotenuse.

While this may seem like a lot of work to just find the hypotenuse, this class can also be used to create additional functions that we use to interact with right triangles. In that sense it allows us to better organize our code by keeping all of the functions for our triangles in one place.

## Using 'extends' to share functions between classes

The extends keyword can be used to allow child classes to inherit the structure of their parent class. In keeping with our geometric example above, we can see this displayed as a a parent 'shape' class that might have a constructor function to save and display length and width.

\`\`\`js
class shape {
    constructor(length, width) {
        this.length = length,
            this.width = width
    }
}
class triangle extends shape {
    findHypotenuse() {
        return Math.sqrt((this.length ** 2) + (this.width ** 2))
    }
    get hypotenuse() {
        return this.findHypotenuse()
    }
}
class rectangle extends shape {
    findArea() {
        return this.length * this.width
    }
    get area() {
        return this.findArea()
    }
}

const foo = new triangle(3, 4)
console.log(foo.hypotenuse)
const bar = new rectangle(4, 5)
console.log(bar.area)

    //=> 5
    //=> 20
\`\`\`
In this example I was able to write our two functions for our rectangle and triangle classes that inherited the constructor from the parent shape class. As the parent class has attributes that both of the children are using, we are saved from having to create an additional constructor for each of these child classes.

This also means that as we increase the complexity of our program and add more shapes we are saving increasingly more lines of code. We can also consider that our parent class can have functions that are also passed down to the children.

## References
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function`
const five = `# Why You Should Use Arrow Functions in React
The more time I have to work with Javascript, the more I am enjoying the language itself. When I was first learning Javascript a few weeks ago, we touched on arrow functions a bit. I understood how to write them and had some idea of what they did. However, it wasn't until we started getting into react that I really learned what arrow functions can do and why they are so advantageous.

## What are Arrow Functions

An arrow function is a type of function syntax in Javascript that on first glance appears to be a shorthand function expression.

\`\`\`js
"Function Expression"

let foo = function foo(bar) { return bar + 1 }
--------------------------------
"Arrow Function Expression"

let foo = bar => bar + 1
\`\`\`

Before we touch on the lack of a return in our arrow function let's just compare the two function expressions. Both functions will take 1 argument and then return that argument + 1.


As you can see, the arrow function is a shorter way of writing a function expression. One of the nicer things about arrow functions is their ability to further compact their syntax. In the above function, I neither wrapped my argument in parentheses nor provided a return statement.

Both implicit returns and optional parentheses for single argument functions are some nice syntactic sugar for our arrow functions. Even though we do not need to provide parentheses for one argument functions, we will need parentheses if our function takes any more or any less arguments.


## Why are Arrow Functions Important

One of the most important parts about arrow functions is another implicit action that is not immediately obvious from looking at an arrow function. That is the preservation of the 'this' keyword.

With a standard function expression or declaration in Javascript, the definition of 'this' is dependent on where the function was called. As a result in order to ensure that 'this' is acting on the correct object or class you may need to use the bind method to ensure the 'this' keyword maintains the correct reference.

\`\`\`js
let foo = {
    bar: 50,
    getBar: function () {
        return this.bar
    }
}

let unboundGetBar = foo.getBar
console.log(unboundGetBar())
//=> undefined

let boundGetBar = unboundGetBar.bind(foo)
console.log(boundGetBar())
    //=> 50
\`\`\`
We have to use the bind method to tell getBar what 'this' should refer to. When getBar is not bound in the first example, it is inheriting the definition of 'this' from the global scope and as a result the console log returns undefined. With an arrow function, we do not have to worry about binding 'this' because an arrow function does not have its own 'this'. Because of this, an arrow function will inherit 'this' from its enclosing scope.

## Arrow Functions in React

In React this can be a bit of an issue. When writing a class component, all of the functions that you write out will need to be bound to the constructor so that the 'this' keyword will behave in the appropriate manner to allow you properly render your data.

This can look a bit messy if you need to use the 'this' keyword in several different functions. At this point, the arrow function swoops in to save the day.

\`\`\`js
import React from 'react';

export default class App extends Component {
    constructor() {
        super()
        this.exampleOne = this.exampleOne.bind(this)
    }

    exampleOne() {
        return this
    }

    exampleTwo = () => {
        return this
    }

    exampleThree() {
        return this
    }

    render() {
        return <>
            <h1>{exampleOne()}</h1>
            <h1>{exampleTwo()}</h1>
            <h1>{() => exampleThree()}</h1>
        </>
    }
}
\`\`\`
Example three will be able to return this without being bound in the constructor because the arrow function expression allows it to inherit the 'this' definition from the App constructor. As a result this allows us to write React functions without having to explicitly bind this. There are other ways to bind this, another way to preserve 'this' is to write an anonymous function to invoke your unbound function.

In the render method, we have an example of preserving 'this' using an anonymous function. We used an anonymous function to ensure that 'this' references the appropriate information. Although all of the three examples above are ways to ensure that we maintain the correct definition of 'this', the arrow function lets you write the least amount of code to accomplish the same goal.

As long as you keep an eye on the definition of the 'this' keyword you will be fine but if you want to avoid making the mistake of forgetting to bind or anonymously call a function I would recommend using an arrow function. Arrow functions may be newer and look a bit different but they can be a useful tool in certain situations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
* https://reactjs.org/docs/components-and-props.html`
const six = `# Spreadin' Out
What is the spread operator and why does it matter? This is a question that I thought about quite a bit as I started to get into React.

As I continue my JavaScript journey I want to take advantage of these blogs to not only learn more about different features of the language but hopefully to be helpful to others who are trying to make sense of this wacky and powerful language.

## What is the spread operator?

\`MDN's definition can seem a bit confusing at first.\` Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

Here is a brief example of one use of the spread operator.
\`\`\`js
let account = {
   username: '',
   password: ''
}

account = {...account, username: 'Foo'}
\`\`\`

Alright, so what does this mean ? In the above block we used the spread operator to maintain our previous account object but overwrite the username key's value. It might seem a bit forced in this example as we could have simply overwrote the username value of the account. However, the idea is that the spread operator 'spread' out the key-value pairs of the account object into our re-assignment of account.

\`\`\`js
let account = { username: '', password: '' }
/*
If we are assigning key-value pairs when creating the account
object, the spread operator is 'spreading' out those key-value
pairs into distinct pairs rather than being wrapped in
the original account object.
*/
...account = username: '', password: ''
\`\`\`

One way to conceptualize this may be to consider that the spread operator is dropping the brackets off of the account object so that we have access to its key - value pairs.

## Why does it matter ?

The spread operator is very useful in React. When we are always updating our state, we want to make sure that we don't ever modify the state but use setState to redefine our state with a new object. The spread operator allows us to make a copy of our current state without actually modifying our current state.

This means that we can spread out our current state and modify only 1 portion. I have found this to be very useful when dealing with nested states.

\`\`\`js
state = {
   user: {
      username: '',
      password: ''
   },
   isLoading: false
}

this.setState({user: {...this.state.user, username: 'Foo'}})
\`\`\`

In the example above we are modifying the username like we did in the first example. However, we are dealing with a nested object and we don't want to modify the user's password. By using the spread operator we can modify the username and use the password from the initial declaration.

We can also use the spread operator for arrays to allow us to achieve a similar interaction to a concat action.

\`\`\`js
state = {
   numbers: [1,2,3]
}

this.setState({numbers: [...this.state.numbers, 4]})

this.setState({numbers: this.state.numbers.concat(4)})
\`\`\`

This is similar to the previous examples where we are spreading out an object to preserve the original state. However, here as we are dealing with an array rather than just an object, we can simply provide a value to be appended to the array.The second example, concat is also not a destructive action and therefore will not be improperly modifying our state. However, the concat method is more commonly used to merge two or more arrays. As a result, the spread operator is a bit better here as we know what values we are adding to our array.

There are plenty of non - destructive actions that we can use to update our state without modifying the original. However, the spread operator has been one that I have found myself using again and again.It's versatility as well as non-destructive qualities make it the most appealing way to handle updates to state where we cannot simply overwrite one value but have to preserve some other part of our state object.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat`

export const blogs = {
    one,
    two,
    three,
    four,
    five,
    six
}

