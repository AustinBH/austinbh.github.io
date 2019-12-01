// Adding blog posts
const one = {
    title: 'How I learned to stop worrying and love the MVP', id: 1, preview: 'Recap of my first project at Flatiron School. I cover what an MVP is and why it helped me when working on my first project.', text: `# How I learned to Stop Worrying and Love the MVP
When I first started looking into coding bootcamps, I had no idea if this was something that I wanted to do. After a few months I found a few different ones I was interested in but I still felt unsure. Even after enrolling in the Software Engineering course at the Flatiron school I was unsure about my decision.

As I learned more about Ruby and object orientation I felt more confident in the material and my ability to understand it but something was still missing. I didn't have that 'Aha' moment where I knew that I had made the correct decision. It was not until we began working on our CLI application projects last week that I felt certain that this was something that I wanted to do.

While my project partner, RJ and I began to map out how we were going to divide the work and what topic we wanted to use, I began to think about more than just completing the assignments. I started to consider how to simplify our idea down to a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product).

After reading up on Minimum Viable Product and the benefits of this product development strategy, I approached RJ with an updated suggestion on where we should start. We began to plan out an MVP that was specific to our project and determine what it would take to get there.

When visualizing what an MVP for our project would look like I began to think about more than just writing methods. I started to consider how much time we could save by creating a working version and then building off of it for the rest of the week. I was hoping that we would be able to complete our MVP within the first couple of days and then start adding more intricacy for the last two days.

Luckily, as a result of this coordinated planning and preparation we were able to complete our MVP on the first day. As we had the rest of the week to add it, there was much less pressure to "complete" the project and we had time to improve on a working application.

![](https://media.giphy.com/media/9rjRwzhpZgt3QAYss5/giphy.gif)

Even though it was just a simple CLI application, this project proved to me that taking some time to plan it out before you get started can completely change the way you approach a project. I had no idea if I was going to like working on a CLI app or if I was going to like this coding bootcamp. However, after making something that works and turning it into something that looks and functions much better, I can say that I made the right choice and can't wait for what comes next!\n

You can find RJ and I's project on [Github](https://github.com/vizushu/module-one-final-project-guidelines-seattle-web-051319)`
}

const two = {
    title: 'Rails Layouts', id: 2, preview: 'An explanation of what Rails layouts are and how they can be used in a Rails application.', text: `# Rails Layouts
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
}

const three = {
    title: 'For Loops, for...of, and forEach Oh My!', id: 3, preview: 'An article on looping in JavaScript. Although it is mainly focused on iterating over an array, I do cover general looping syntax.', text: `# For Loops, for...of, and forEach Oh My!
As someone who has spent the better part of the past month and a half learning and writing in Ruby, transitioning to Javascript has been a bit disorienting.

Arrays in particular are a type of data that I have had the opportunity to play around with quite a bit over the past month and a half. As a result of using primarily Ruby, I am quite familiar with the each enumerable.

\`\`\`ruby
array1 = [1, 2, 3, 4]

def return_all(array)
    array.each do | number |
        puts number
    end
end

return_all(array1)

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

returnAll(array1);

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

returnAll(array1);

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

returnAll(array1);

// => 1
// => 2
// => 3
// => 4
// => undefined
\`\`\`
The forEach method is a bit different from both our for loop and the for ... of statement that we saw above. Rather than writing out a for statement, we are calling a method on our array. However, I still prefer the forEach method to a for loop when iterating over arrays in terms of readability.

One particular proverb that I have heard quite a few times is "There is more than one way to skin a cat". Although I have never really liked this particular proverb because of it's imagery, I have always been able to appreciate it's message. In my programming journey so far, I have found that this particular proverb is particularly apt.

When looking at the 3 different iterators above, I can say that the for ... of statement is particularly clear to me. I will undoubtedly have to use for loops much more often as I continue my Javascript journey but for now, I have found a particular way of iterating that makes the most sense to me.`
}
const four = {
    title: 'Classes as an Organizational Tool', id: 4, preview: 'An explanation of what JavaScript classes are and how they can be used to organize and simplify your code.', text: `# Classes as an Organizational Tool
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
}
const five = {
    title: 'Why You Should Use Arrow Functions in React', id: 5, preview: 'An explanation of what arrow functions are in JavaScript and how they can be used in React. I also take and explain the stance that arrow functions should be used rather than .bind.', text: `# Why You Should Use Arrow Functions in React
The more time I have to work with Javascript, the more I am enjoying the language itself. When I was first learning Javascript a few weeks ago, we touched on arrow functions a bit. I understood how to write them and had some idea of what they did. However, it wasn't until we started getting into react that I really learned what arrow functions can do and why they are so advantageous.

## What are Arrow Functions

An arrow function is a type of function syntax in Javascript that on first glance appears to be a shorthand function expression.

\`\`\`js
//Function Expression

let foo = function foo(bar) { return bar + 1 }

//Arrow Function Expression

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
}
const six = {
    title: "Spreadin' Out", id: 6, preview: 'An explanation of the spread operator in JavaScript and how it works. This is a great tool that can be used in React applications.', text: `# Spreadin' Out
What is the spread operator and why does it matter? This is a question that I thought about quite a bit as I started to get into React.

As I continue my JavaScript journey I want to take advantage of these blogs to not only learn more about different features of the language but hopefully to be helpful to others who are trying to make sense of this wacky and powerful language.

## What is the spread operator?

MDN's definition can seem a bit confusing at first. Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

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
}

const seven = {
    title: 'Learning a New Language', id: 7, preview: 'An article explaining why I decided to learn Python after completing my time at the Flatiron Software Engineering bootcamp. It touches on the similarites between Python and JavaScript as well as why I am interested in Python.', text:` # Learning a New Language
As a recent graduate of the Flatiron School's Web Development program, I have spent the past 4 months working with Ruby and JavaScript. I have been exposed to other languages in some capacity before but I had not tried to learn a new language and framework on my own.

## Why Python?

![](https://images.freeimages.com/images/large-previews/5eb/green-tree-python-1312700.jpg)

I was on the fence about a new language and decided (for better or worse) to go with a dynamically typed language rather than something like Java which is statically typed. My main interest was to learn a new language that was strongly typed as a change from JavaScript which I have been focusing on heavily for the past couple months.

### Brief aside on typed languages

For the purposes of understanding the differences between static and dynamically typed languages all you need to understand is that static languages are more strict and do not allow types to be mutated. Furthermore, strongly typed in this scenario is referring to type errors being prevented at runtime. This basically means that instead of returning undefined like in JavaScript, I would receive an error if I was using incorrect types in Python.

## Python Initial Response

![](https://images.freeimages.com/images/large-previews/c1c/dog-1361477.jpg)

Once I got started with Python, I noticed a few things that I liked immediately. List, Dictionary, Set, and Generator comprehensions are things that I very much enjoy using. Although in a general sense it is basically just a way to iterate over these structures, their syntax is very enticing to me. Let's just use a brief example here.

\`\`\`python
new_list = [1, 2, 3, 4, 5]
new_list = [num for num in new_list if num % 2 == 0]
print(new_list)
#=> [2, 4]
\`\`\`
All I did here was iterate over new_list and return only the even numbers.  This is similar to a filter function in JavaScript which we can call on an array.

\`\`\`javascript
newArray = [1, 2, 3, 4, 5]
newArray = newArray.filter(num => num % 2 === 0)
console.log(newArray)
//=> [2, 4]
\`\`\`
However, the list comprehension in python is more powerful than just a filter, it can also perform the same action as a map function in JavaScript.

\`\`\`python
new_list = [1, 2, 3, 4, 5]
new_list = [num * 2 for num in new_list]
print(new_list)
#=> [2, 4, 6, 8, 10]
\`\`\`

This is just the surface of what comprehensions in Python can do but I am very much a fan of their syntax.

## Continuing to learn

For me, one of the best ways for me to learn is to simply use something. In Python, that means writing code and making applications. I have tried to make a few different simple CLI applications to further my understanding of Python. One similarity that made it easier for me to grasp is function definition syntax in both Python and JavaScript
\`\`\`python
# Python

def foo():
    print('Hello World!')
foo()
\`\`\`
\`\`\`javascript
// JavaScript

function foo() {
    console.log('Hello World!')
}
foo()
\`\`\`
Even though these two functions are a bit different, the way that they are invoked is the same which makes it easier for me to grasp how to actually print out 'Hello World!'.

## Next Steps

![](https://images.freeimages.com/images/large-previews/bab/sasha-1378238.jpg)

I am planning to be able to continue to practice Python using the Django web framework. I have started with Django but will need more time to be able to implement it the same way I could with a Rails application right now. I will also likely be writing about Python more as I continue to try to learn it so look out for a few more Python related posts here.

## References
* https://hackernoon.com/i-finally-understand-static-vs-dynamic-typing-and-you-will-too-ad0c2bd0acc7
* https://en.wikipedia.org/wiki/Strong_and_weak_typing
* https://en.wikipedia.org/wiki/Type_system`
}

const eight = {
    title: 'How to Comprehend Comprehensions', id: 8, preview: 'An explanation of comprehensions in Python. I explain what they are, how they work, and where they can be used.', text: `# How to comprehend Comprehensions
Python has been a very fun language for me to learn. So far, the thing I have most enjoyed learning and using are comprehensions. When I first took a look at them, they did not make much sense to me and looked very odd. I would not say that I'm an expert now but I certainly have a much better idea of what they do now than I did a few weeks ago.

Hopefully we all have a better understanding of what comprehensions are and what they can do by the end of this.

## What is a comprehension?

This is not a question about what does the syntax look like (we will get to that) but rather a question about what a comprehension is. The geeks for geeks definition I found is a very good one: \`Comprehensions in Python provide us with a short and concise way to construct new sequences(such as lists, set, dictionary etc.) using sequences which have been already defined.\`

Now let's break that down a little, what this is saying is that we can quickly construct new sequences with sequences that already exist. That still sounds a bit convoluted to me, let's just say that Comprehensions let us quickly create new sequences with old sequences.

## What do they look like?

Now that we have a bit of any idea of what a comprehension is, let's take a look at what a simple comprehension might look like.

\`\`\`python
foo = [1, 2]
bar = [x for x in foo]
    print(bar)
#[1, 2]
\`\`\`

That isn't too bad, it looks kind of similar to a single line \`for loop\` inside of a list. Syntactically, it pretty much stays within this realm even as we add more complicated comprehensions later.

For example, if we want to actually change the original data in our comprehension, we can perform whatever operation we wish to.

\`\`\`python
foo = { 'one': 1, 'two': 2 }
bar = { k: v * 2 for(k, v) in foo.items() }
print(bar)
# { 'one': 2, 'two': 4 }
\`\`\`

Here we had to do something a bit different. Since we need access to both the keys and values, we need to call the \`items\` method on our \`foo\` dictionary so that we have access to both the keys and values. We can access the keys of our dictionary like we did with our list comprehension above but to have both values we need the \`items\` method.

\`\`\`python
foo = { 'one': 1, 'two': 2 }
bar = { item for item in foo }
print(bar)
print(type(bar))

# { 'one', 'two' }
# <class 'set' >
\`\`\`

Wait a second here, this isn't a dictionary, this is a set. We will get into set comprehensions in a bit but for now just remember that if we only access the keys of our dictionary we will be given a set and not a dictionary in return.

## Why do comprehensions matter?

To begin with, comprehensions allow us to operate on our data without mutating it. We are able to both get a new dictionary, list, set, or generator and preserve our original data. This can be great when we need to both change our original data and return new data based on said original data.

For example lets say that we have a list with the first 5 prime numbers. We want to multiply these 5 prime numbers but we still need our original list for comparison.

\`\`\`python
foo = [2, 3, 5, 7, 11]
bar = [x ** 2 for x in foo]
print(bar)

#[4, 9, 25, 49, 121]
\`\`\`

Another great part about comprehensions is that they are allowing us to iterate with much less syntax than using a standard for loop. Let's take a look at the previous example but with a for loop.

\`\`\`python
foo = [2, 3, 5, 7, 11]
bar = []
for num in foo:
    bar.append(num ** 2)
print(bar)

#[4, 9, 25, 49, 121]
\`\`\`

We have to write two extra lines where we are declaring our list and then actually appending each of the numbers onto it. In this sense, our comprehension is not only shorter but also easy to understand once you have seen a few comprehensions.

## A few more examples

I just wanted to throw in a few examples of set and generator comprehensions as we didn't really touch on them before. Set and generator comprehensions use a very similar syntax to the dictionary and list comprehensions.

\`\`\`python
# Dictionary
foo = { 'one': 1, 'two': 2 }
bar = { k: v + 5 for(k, v) in foo.items() }
print(bar)

# { 'one': 6, 'two': 7 }

# Set
foo = { 1, 2, 3}
bar = { num ** 3 for num in foo}
print(bar)

# { 8, 1, 27 }

# List
foo = [1, 2, 3, 4, 5, 6]
bar = [num + 3 for num in foo if num % 2 != 0]
print(bar)

#[4, 6, 8]

# Generator
foo = [1, 2, 3]
bar = (num for num in foo if num % 2 == 0)
    for num in bar:
        print(num)

# 2
\`\`\`

There are a few things going on here first we see the syntactic similarity between Set, List, and Generator comprehensions. The dictionary comprehension looks a bit different (because of the key value pairs) but the \`for\`, \`in\`, and, \`if\` keywords are all in the same order.

Let's also take a quick moment to discuss the syntax on the List and Generator comprehensions. I added an if statement that was not included in the previous examples. The effect of this is that our new set, dictionary, list, or generator will only include elements that the if statement evaluates as true.

To see what this would look like in a standard for loop, it is just a regular old if statement.

\`\`\`python
foo = [1, 2, 3]
bar = []
for num in foo:
    if num % 2 == 0:
        bar.append(num + 2)
print(bar)

#[4]
\`\`\`

All we are doing here is adding 2 to all even numbers. Again, with our comprehension we are able to simplify the syntax (and we also don't have to worry about indentation errors!). 

Comprehensions were the first thing to grab my eye when I was just starting to learn Python and they are still very interesting to me a few weeks later. I certainly enjoy finding these small syntactically sugary treats and understanding more about them. Hopefully this makes it a bit easier to wrap your head around comprehensions, I know it took me a while for it to all sink in a bit.

## References

* https://wiki.python.org/moin/Generators
* https://docs.python.org/3/tutorial/datastructures.html
* https://www.geeksforgeeks.org/comprehensions-in-python/
* https://www.w3schools.com/python/ref_dictionary_items.asp`
}

const nine = {
    title: 'Python Lambdas and You', id: 9, preview: 'An explanation of Lambdas in Python with a focus on anonymous functions in general. I use JavaScript anonymous functions to draw similarities but highlight the specific syntax of Python lambdas.', text: `# Python Lambdas and You
I have greatly enjoyed working with anonymous functions in JavaScript and as I have been learning Python, I came across anonymous functions in a different way. After digging around a bit, I have learned that many languages use lambdas as part of their anonymous functions.

#### Brief aside on anonymous functions

To put it simply, let's just use Wikipedia's definition for now. "An anonymous function is a function definition that is not bound to an identifier." This just means that our anonymous functions will be functions without names.

Let's get back to what we are here for, let's take a look at what lambdas are in Python and how we can use them.

## What is a lambda?

In Python, a lambda is used to create anonymous functions. While it allows you to declare a function without a name (an Anonymous Function) it is also a specific keyword that has to be used in a special manner. For me, the Python documentation does a wonderful job of explaining what a lambda is: Lambda expressions (sometimes called lambda forms) are used to create anonymous functions. The expression \`lambda parameters: expression\` yields a function object.

## What do they look like?

We just saw what the syntax should look like, let's take a look at an example.
\`\`\`python
foo = lambda a: a * 2
print(foo(2))
# 4
\`\`\`
Wait a second, that function is all written on one line. Shouldn't we need to indent and specify what should be returned? This is one of the great parts about lambdas, they allow us to write a simple function in one line. We also don't need to use \`return\` since a lambda cannot contain statements such as \`return\`.

## Why are they useful?

I hinted a bit at some of the benefits of lambdas in the last section, the most important being the lack of a \`return\` statement. This is good for several reasons, first, it simplifies our lambda expression even further. If our main goal with a lambda is to write a short one line function not needing to include a return statement will make it six characters easier.

Anonymous functions are not specific to Python but lambdas are also not used in every language. For example, in JavaScript, an anonymous function is declared by not naming the function rather than using the keyword \`lambda\`.

\`\`\`javascript
// JavaScript
let foo = a => a + 2
console.log(foo(2))
// 4
\`\`\`
\`\`\`python
# Python
foo = lambda a: a + 2
print(foo(2))
# 4
\`\`\`
Both of these examples are anonymous function declarations. You can see several of the syntactic similarities, the lack of a \`return\` statement, and the argument, expression syntax for example are very similar. The arrow function in the JavaScript example allows both of these functions to look the same which helps us to understand what they are doing.

#### Syntax warning!

One important thing to remember though is that in JavaScript, our anonymous functions can include a return statement. That is not possible in Python since lambdas do not accept any statements. This is why there is no \`return\` in all of my examples.

Since both of these functions are doing the same thing we can take our JavaScript or Python knowledge and apply it to the opposite language. This is one of the great benefits to understanding anonymous functions, is that they are used in many languages so if you are able to understand them in one, you can take that understanding and use it to more easily understanding them in another.

## References

* https://en.wikipedia.org/wiki/Anonymous_function
* https://docs.python.org/3/reference/expressions.html
* https://www.w3schools.com/python/python_lambda.asp`}

const ten = {
    title: 'The Four Pillars of Object Oriented Programming', id: 10, preview: 'An explanation of OOP and more specifically the Four Pillars of OOP.', text: `# The Four Pillars of Object Oriented Programming
While not every programming language supports Object Oriented Programming, if you have dabbled with any programming language or browsed reddit, you have undoubtedly come across OOP in some fashion.

Although I just completed a coding bootcamp, we never talked about the four pillars of OOP. Object Oriented Programming was certainly a part of the curriculum and I have used it on all of my projects but I never learned the textbook definitions.

I recently had an interview where I was asked about the four pillars of Object Oriented Programming and wanted to write this article to better understand them myself but hopefully also as a resource for others. We will cover the four pillars of Object Oriented Programming but let's first at least get some understanding of what OOP means.

## OOP Definition

There are plenty of definitions which are a mouthful like Wikipedia's:

\`Object- oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields(often known as attributes or properties), and code, in the form of procedures(often known as methods). A feature of objects is an object's procedures that can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self"). In OOP, computer programs are designed by making them out of objects that interact with one another.\`

We'll break it down by each sentence and hopefully have a succinct and cohesive definition when we are done. Starting with the first sentence lets say that:

\`OOP is a programming paradigm based on the concept of objects which contain data in the form of attributes and code in the form of methods.\`

The first sentence is pretty straightforward here but we can take out some of the explanatory language. Moving on to the second sentence:

\`One feature of objects is the object's methods which can access and change the attributes of the object. Objects also have a notion of 'this' or 'self' which allows them to modify themselves.\`

We actually broke that sentence out into two but hopefully it makes more sense this way. Finally for the third sentence:

\`In OOP, programs are designed by making them with objects that interact with each other.\`

Ok so we have broken up all of these sentences let's put them together and see if we have a coherent definition:

\`OOP is a programming paradigm based on the concept of objects which contain data in the form of attributes and code in the form of methods. One feature of these objects is the object's methods which can access and change the attributes of the object. Objects also have a notion of 'this' or 'self' which allows them to modify themselves. In OOP, programs are designed by making them with objects that interact with each other.\`

Ok it does look very similar to the Wikipedia definition but we did change a few things. Hopefully this definition makes a bit more sense and we can use it as a starting point.

## OOP Examples

To keep this simple, we will just look at 3 languages, JavaScript, Python, and Ruby. For each we will create a rectangle class and create a getter method to return the area of a rectangle.

\`\`\`javascript
// JavaScript
class Rectangle {
   constructor(width, height){
       this.width = width;
       this.height = height;
   }
   get area() {
       return this.width * this.height
   }
}

const foo = new Rectangle(2,3)
console.log(foo.area)
// 6
\`\`\`

\`\`\`python
# Python
class Rectangle():
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def get_area(self):
        return self.width * self.height

foo = Rectangle(2,3)
print(foo.get_area())
# 6
\`\`\`

\`\`\`ruby
# Ruby
class Rectangle
    attr_reader :height, :width
    def initialize(height, width)
        @height = height
        @width = width
    end
    def area
        return @height * @width
    end
end

foo = Rectangle.new(2,3)
puts foo.area
# 6
\`\`\`
Ok so now we have an idea of what a simple class looks like in a few languages. All of the above examples let us access the height and width of our Rectangle as well its area. Let's use these examples to break down our four pillars.

## Abstraction

Abstraction is essentially hiding the inner workings of a class and just allowing the necessary portions be visible. Of our 3 above examples, we can use the \`private\` keyword in Ruby but Python and JavaScript do not support private declarations and expressions in the same manner.

\`\`\`ruby
class Rectangle
    attr_reader :height, :width
    def initialize(height, width)
        @height = height
        @width = width
    end
    private
    def area
        return @height * @width
    end
end

foo = Rectangle.new(2,3)
puts foo.area
# NoMethodError
\`\`\`
So in the above example, I have made the area method a private method which means that we do not have access to it from outside the class. Since OOP is based on using the real world to model our code, let's take the example of a car. One example of Abstraction with a car would be the engine. As a driver, we do not need to understand how the engine works or how to build one ourselves to be able to drive the car. The engine is abstracted away from the driver but is still used to drive the car.

## Encapsulation

Encapsulation encompasses the main elements of abstraction because it refers to the usage of a class to encapsulate your program. In that sense  a class is like a wrapper and it \`encapsulates\` the attributes and methods contained within. In taking a look at all 3 of our original examples, we see the class declaration which is the wrapper in our analogy.

To understand encapsulation in a real world sense, let's look back on our car example. The frame is encapsulation, it wraps the entire car and supports it but it also allows for the abstraction by surrounding the entire vehicle. The interior then does the job of abstracting out the functional parts of the car such as the engine that we don't need to understand in order to use the car.

## Inheritance

Inheritance is all about how classes can interact with each other. Inheritance allows classes to inherit from each other, allowing you to keep your code dry and have access to methods or attributes you have already declared.

Here is an example of what inheritance looks like in Python.

\`\`\`python
class Rectangle():
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def get_area(self):
        return self.width * self.height


class Square(Rectangle):
    def __init__(self, width, height):
        if width == height:
            super().__init__(width, height)
        else:
            raise Exception('Squares have an equal width and height')

foo = Square(2,3)
# Exception: Squares have an equal width and height
\`\`\`
One little thing to note here is that calling super with no arguments like this will only work in Python 3 + for Python 2 we need to use the arguments of the base class and self for super to work as expected.

\`\`\`python
def __init__(self, width, height):
    if width == height:
            super(Rectangle, self).__init__(width, height)
        else:
            raise Exception('Squares have an equal width and height')
\`\`\`

Ok back to inheritance, our Square class in inheriting the width and __init__ and get_area methods from our Rectangle class but we are raising an exception if the width and height are not equal. So we have access to all of the code that we wrote specifically for our Rectangle class but we also get the added checking for if it is actually a square before we initialize an instance of the Square class.

In a real world example, a truck and suv that are manufactured by the same company may use the same engine for both their truck and suv. If their truck and suv are built to do similar things, there is no reason for the company to make an entirely new engine just to do the same thing for their suv and truck. This might be a bit of a stretch but I hope it gets the point across that Inheritance allows you to use less energy(DRYer code).

## Polymorphism

The concept of Polymorphism refers to different objects being able to have many forms. What I mean by that is that we can create a class which inherits from another class which has the same method that the parent class does but it returns a different value. Let's take a look at that with our Rectangle class and a new Triangle class.

\`\`\`javascript
class Rectangle {
   constructor(width, height){
       this.width = width;
       this.height = height;
   }
   get area() {
       return this.width * this.height
   }
}

class RightTriangle extends Rectangle {
    constructor(width, height){
        super(width, height)
    }
    get area() {
        return this.width * this.height / 2
    }
}

const foo = new Rectangle(2,3)
const bar = new RightTriangle(2,3)
console.log(bar.area)
console.log(foo.area)
// 3
// 6
\`\`\`

So here we have our RightTriangle class which has a width and height just like a rectangle but our area method returns a different amount even though we created our Rectangle and RightTriangle instances with the same width and height. Our parent Rectangle class does not have access to the area method from our RightTriangle class. Also, because we have overwritten that method in our RightTriangle class, it does not have access to the Rectangle class' area method. Ultimately, polymorphism is the ability for these two classes to do the same thing in a different way.

If we go back to the truck and suv example from the inheritance section, even if a truck and suv have the exact same length and engine, they are not the same. The truck and suv look differently and the same situation would be handled differently by both.

## Recap

### Abstraction

Only making certain aspects of the program accessible from outside of the class (private methods).

### Encapsulation

Wrapping up the methods and attributes of the class within the class itself.

### Inheritance

A class' ability to inherit attributes and methods from other classes (keeps your code DRY).

### Polymorphism

Classes that inherit from each other being able to invoke the same method and receive a different result.

Hopefully this gives you a better understanding of the four pillars of Object Oriented Programming. I certainly have a better understanding now.

Please take a look at the following resources for more information on the four pillars of Object Oriented Programming.

## Four Pillars Resources

* http://www.corejavaguru.com/java/oop/4pillars
* https://www.linkedin.com/pulse/4-pillars-object-oriented-programming-pushkar-kumar/
* https://www.quora.com/What-are-the-4-pillars-of-OOPs

## Additional References

* https://en.wikipedia.org/wiki/Object-oriented_programming
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* https://www.w3schools.com/python/python_classes.asp
* https://www.geeksforgeeks.org/getter-and-setter-in-python/
* https://ruby-doc.org/core-2.6.5/Class.html`
}

const eleven = {
    title: 'Set it and Forget it', id: '11', preview: 'An explanation of sets in programming with a brief explanation of what a mathematical set is.', text: `# Set it and Forget it
As someone who greatly enjoys fantasy football, the concept of a set it and forget it player is one that I am quite familiar with. It essentially refers to someone who is worth starting regardless of their matchup.

This week I was listening to a fantasy football and hearing set it and forget it made me think about sets in programming. When I had first heard the word set used in a programming context, I immediately thought of two things. The first was the [card game](https://en.wikipedia.org/wiki/Set_(card_game)), and the second was my high school math teacher.

It turns out, I wasn't actually too far off with either answer. To understand what a set is in programming, it would help to understand what a mathematical set is.

## What is a Set in Mathematics?

For a start let's take a look at the Wikipedia definition.

\`A set is a well- defined collection of distinct objects.The objects that make up a set(also known as as the set's elements or members) can be anything: numbers, people, letters of the alphabet, other sets, and so on.\`

That seems pretty straightforward, the keywords there are distinct, and anything.Meaning that a set contains these unique objects and that it doesn't matter what they are.

Now that we have a rudimentary understand of Sets let's take a look at Sets in programming.

## What is a Set in Programming ?

Let's refer to Wikipedia for a definition once more.

\`A set is an abstract data type that can store unique values, without any particular order. It is a computer implementation of the mathematical concept of a finite set.\`

So we can see that a Set is a mathematical set simply implemented by a computer.If we take a look at the keywords again, they would be unique and without order.That means that we are again dealing with a collection of unique / distinct values.We are also working with a data type that does not have a specific order, similar to something like a dictionary, hash, or object.

## What do they look like ?

Let's take a look at sets in two particular languages, JavaScript, which has had sets since the release of EMCAScript 2015, and Python, which has supported sets since the release of 2.4.

Let's start with JavaScript, sets are created with the \`Set\` keyword. Just like with any other object that we are creating in JavaScript we use the \`new objectname\` syntax as we can see below.

\`\`\`javascript
const foo = new Set([1,2,3])
console.log(foo)
// Set { 1, 2, 3 }
\`\`\`

In Python we use something similar, since set is a built in data type we have access to the\`set()\` method. 

\`\`\`python
foo = set([1, 2, 3])
print(foo)
# {1, 2, 3}
\`\`\`

Both Python and JavaScript are using a very similar syntax where we are creating a new set using a list/array respectively.Our set constructors only allow one argument so we have to use this intermediary data type to create a set with multiple values.

JavaScript
\`\`\`javascript
const foo = new Set(1,2,3)
// TypeError
\`\`\`
Python
\`\`\`python
foo = set(1,2,3)
# TypeError
\`\`\`
Trying to pass in multiple arguments would throw this type error since only 1 argument is accepted.

## What purpose do they serve ?

Now that we have an idea of what sets are and how they can be instantiated let's take a look at what we can do with them.

Remember when we were covering the definition of a set ? One of the important features of a set is it's uniqueness. Therefore, one great purpose of sets is to check if a set contains a specific value.

\`\`\`javascript
const foo = new Set([1,2,3])
console.log(foo.has(1))
// true
\`\`\`

\`\`\`python
foo = set([1, 2, 3])
print(1 in foo)
# True
\`\`\`

As sets are not ordered we are able to do things like this, checking if a set contains a value, faster than we would be able to in a list/array. To expand on that further, let's see how we access values in a list/array.

\`\`\`javascript
const foo = [1, 2, 3]
for(let i = 0; i<foo.length; i++) {
    if (foo[i] == 2) {
        console.log(true)
    }
}
// true

const bar = [1, 2, 3]
bar.includes(2)
// true
\`\`\`
\`\`\`python
foo = [1, 2, 3]
for num in foo:
    if num == 2:
        print(True)
# True

bar = [1, 2, 3]
print(2 in bar)
# True
\`\`\`

So, I first used a simple for loop for our list and array. That is to indicate what our includes method or in statement are doing. Since a list/array is ordered, we can access an element via it's index with a runtime of O(1). However, when we need to check if a value is contained within said list/array, we need to iterate over the entire collection. This means that we are going to have a runtime of O(n) since we have to iterate over the collection to check for a value.

Sets can be very useful for things like removing duplicates and comparing for uniqueness due to them containing only unique values.Although sets are a mathematical concept, they don't need to feel or seem scary, they can make certain things quicker and easier.

## References

* https://en.wikipedia.org/wiki/Set_(mathematics)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
* https://wiki.python.org/moin/TimeComplexity
* https://snakify.org/en/lessons/sets/
* https://en.wikipedia.org/wiki/Set_(abstract_data_type)`
}

const twelve = {title: 'Binary Conversion in JavaScript', id: '12', preview: 'A look into binary numbers and how to convert numbers into binary in JavaScript.', text: `# Binary Conversion in JavaScript
This week I had an interview where I was asked to perform an operation using a binary number. It intrigued me to dig into binary numbers a bit more and try to get a bit more comfortable with them.

## What is a Binary Number?

To get an idea of what exactly you need to do to convert a number into binary let's take a look at what exactly a binary number is. Wikipedia's is not a particularly complicated definition, \`In mathematics and digital electronics, a binary number is a number expressed in the base- 2 numeral system or binary numeral system, which uses only two symbols: typically "0"(zero) and "1"(one).\`

## Converting an Integer to Binary

Alright, so now that we know a binary number is a number expressed in base-2 we can take a look at converting our numbers. In the case that our input is an integer, we can use JavaScript's \`toString\` method to convert our number.

The \`toString\` method accepts an argument of the base used to convert a number into a string.

\`\`\`javascript
const myNum = 13
console.log(myNum.toString(2))
//1101
\`\`\`
That is very simple. But what if our input is not a number but in fact a string? We cannot just call \`toString\` on it since it is already a string. Using the \`parseInt\` function, we can convert our string into a number and then convert that number into a base-2 string. Let's see what that looks like...

\`\`\`javascript
const myInput = '13'
console.log(parseInt(myInput).toString(2))
// 1101
\`\`\`

Well that certainly works. But wait, there is an optional argument for the \`parseInt\` function that allows us to specify the base to be used when converting a string to an integer. While this does allow us to specify that we are parsing the string into binary, we do not preserve the entire binary sequence but just the first bit.

\`\`\`javascript
const myInput = '13'
console.log(parseInt(myInput, 2))
// 1
\`\`\`

Another issue with the second argument of our \`parseInt\` function is that it returns NaN when presented with the number 2 and the base of 2.

\`\`\`javascript
const myInput = '2'
console.log(parseInt(myInput, 2))
// NaN
\`\`\`

This is a bit of an issue since 2 can be converted into a binary number. If we take a look at our solution, we can see that we are able to work with the number 2 and return a binary number.

\`\`\`javascript
const myInput = '2'
console.log(parseInt(myNum).toString(2))
// 10
\`\`\`

Well I guess we will have to settle for converting a string into a number and back into a string. It might seem like a bit of a long way to go but it does ensure that we have the entire binary number to work with.

That's it, we have converted our input whether a number or a string into a binary number represented as a string. You can convert it back into an integer if you needed to but if your binary number began with a 0, your integer would not match the binary string since the 0 would just be left off.

\`\`\`javascript
console.log(parseInt('0101'))
// 101
\`\`\`
Nevertheless, we have accomplished our goal, the input number was converted to a binary number. From here we can do whatever it is that we need to do with our binary number. The \`toString\` method does most of the heavy lifting here as it is the one that manages the conversion to binary. 

## References

* https://en.wikipedia.org/wiki/Binary_number
* https://en.wikipedia.org/wiki/Radix
* https://www.geeksforgeeks.org/javascript-tostring-function/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt`}

const thirteen = {title: 'by: ASYNC Bye Bye Bye', id: '13', preview: 'A review of asynchrony and the fetch API.', text: `# by: ASYNC Bye Bye Bye
Asynchrony is a great concept but it is also one that was a bit difficult for me to understand at first. Hopefully the title will make a bit more sense once we get through this one.

## What is it?

Let's first examine what asynchrony is so that we are all on the same page. Wikipedia's definition states:

\`Asynchrony, in computer programming, refers to the occurrence of events independent of the main program flow and ways to deal with such events.\`

My introduction to asynchrony was using the \`fetch\` API. The way that I was able to break the concept of asynchronous code down was to model it like asking a question. Asking the question is like the fetch request that we send. Even if the other person responds quickly, there will still be some delay from when we ask the question to when the other person responds.

## What does it look like?

In keeping with the fetch example, let's see what this would look like.

\`\`\`javascript
fetch("https://pokedex-yeet.herokuapp.com/v2/pokemon")
\`\`\`
This fetch function will return a \`Promise\` object. That is what we will be using to interact with our response.

This \`Promise\` object is what we use to represent our asynchronous code. It allows us essentially wait for our promise to return data before we try to operate on it. That way we are not trying to interact with \`undefined\`. For example, in the following code you can see what happens when we try to operate on our data before we receive a response.

\`\`\`javascript
fetch("https://pokedex-yeet.herokuapp.com/v2/pokemon")
          .then(res => res.json())
          .then(json => console.log(json.length));

let data = fetch("https://pokedex-yeet.herokuapp.com/v2/pokemon");
console.log(data.length);

// undefined
// 807
\`\`\`
This is just a request that we are sending to a Pokemon API that I worked on for a group project. As you can see, our attempt to assign the fetch to a variable and then call the length method on our fetch just returns undefined. However, the full fetch request that we wrote out first logs 807 which is the number of Pokemon featured in the API.

We are using the \`then()\` method which is available since \`fetch\` is returning a \`Promise\`. The \`then()\` method allows us to perform actions based on the response which is returned.

This is also what we used in the original example. One other important thing to notice is that even though our console.log that returns undefined is called after the one that returns 807, they are printed out in the opposite order. That is because our \`Promise\` is asynchronous, meaning that the console.log is not executed until after the Promise is resolved.

## What does that title mean again?

Hopefully you have at least gotten the reference by now but if you haven't, here's the [Wikipedia page](https://en.wikipedia.org/wiki/Bye_Bye_Bye).

Ok, so now that we have a better understanding of asynchrony, imagine that we wrote a snippet that printed out the strings "bye bye bye" and "by: Async".

\`\`\`javascript
setTimeout(() => console.log('Bye Bye Bye'), 1000)
console.log('by: ASYNC')
\`\`\`

Now this is a bit contrived since we are specifically telling JavaScript to wait one second using the \`setTimeout\` function. However, conceptually we should be able to understand how and why this code is executing in this manner.

## Resources

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
* https://eloquentjavascript.net/11_async.html
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
* https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)`}

const fourteen = {
    title: "Inheritance in Python", id: 14, preview: "An overview of inheritance and how we use it in Python.", text: `# Inheritance in Python
    Inheritance is an important part of object oriented programming. It is one of the four pillars I outlined in a [previous post](https://dev.to/austinbh/the-four-pillars-of-object-oriented-programming-5bda). Today I wanted to take a look at inheritance in Python, the syntax, setup, and even differences between Python 2 and 3. With Python 2's pending retirement it might not seem as important but there are a few differences to be aware of just the same.

## What is Inheritance?

Let's first touch on what inheritance is, if you would like a more in-depth explanation feel free to check out the blog post I referenced. To put it simply, inheritance is the ability for classes or objects to be based on other classes or objects.  

## What Does Inheritance Look Like in Python?

\`\`\`python
class Animal():
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight


class Dog(Animal):
    def __init__(self, name, weight, breed):
        super().__init__(name, weight)
        self.breed = breed
\`\`\`

First of all, the above example is written using Python 3 syntax. We will take a look at the Python 2 syntax in a bit, for now lets just walk through this example.

We start by defining a parent class (Animal) with just a simple dunder init method. We then create a child class (Dog) which inherits from it's parent class (Animal). That is accomplished through passing in the Animal class as an argument to the Dog class. 

As a result of this inheritance we can use the \`super()\` function to call the parent class' dunder init method. This allows us to add to the dunder init method without having to write out the entire method again. In this example it may not look like we are saving that much but the more we use inheritance, the cleaner our code is and the DRYer it is.

Now let's have a look at the Python 2 syntax just so that we are familiar with it.

\`\`\`python
class Animal():
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight


class Dog(Animal):
    def __init__(self, name, weight, breed):
        super(Animal, self).__init__(name, weight)
        self.breed = breed
\`\`\`

All we have to do is pass in the parent class and self as arguments. In Python 2, the super function requires these arguments otherwise it will throw an error.

## Overriding methods

One other aspect of inheritance is understanding how we can override methods and still have access to the parent method.

\`\`\`python
class Animal():

    def __init__(self, name, weight):
        self.name = name
        self.weight = weight

    def eat():
        print(f"{self.name} is eating")

class Dog(Animal):

    def __init__(self, name, weight, breed):
        super().__init__(name, weight)
        self.breed = breed

    def eat():
        print(f"{self.name} the {self.breed} is eating")


a1 = Animal("Ted", 50)
a1.eat()

d1 = Dog("Blue", 15, "Pomeranian")
d1.eat()

# Ted is eating
# Blue the Pomeranian is eating
\`\`\`

Here we have a simple example, the eat method of our Animal class will just print out the name of the animal that is eating where our Dog class titles the dog with it's breed. It is just a simple example but this eat method has been overridden for our Dog class.

I have used an f-string in this example, this is another difference between Python 2 and 3, f-strings are available in Python 3 but not in Python 2. We would need to format the string in a different way such as using the \`format\` method.


\`\`\`python
class Animal():

    def __init__(self, name, weight):
        self.name = name
        self.weight = weight

    def eat():
        print("{} is eating".format(self.name))
\`\`\`

We do still have access to the parent class' method through the \`super()\` function. We can invoke this the same way that we do with our dunder init method.

\`\`\`python
class Animal():

    def __init__(self, name, weight):
        self.name = name
        self.weight = weight

    def talk(self):
        print(f"I am {self.name}")

class Dog(Animal):

    def __init__(self, name, weight, breed):
        super().__init__(name, weight)
        self.breed = breed

    def talk(self):
        super().talk()
        print(f"I am a {self.breed}")


d1 = Dog("Lucy", 85, "Rottweiler")
d1.talk

# I am Lucy
# I am a Rottweiler
\`\`\`

Just like with our previous example, to call super in Python 2 we need to pass in the parent class and self as arguments. Here we see just like with our dunder init method, our talk method now invokes the parent class' talk method as part of the Dog's talk method. In this way we are still overriding the original method but because of the \`super()\` function we still have access to the original method.

Inheritance goes much deeper than this and as I mentioned before is a very important and useful part of Object Oriented Programming. Hopefully you now have a bit of a taste for what it is and how you can use it in Python.

## References

* https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)
* https://en.wikipedia.org/wiki/Method_overriding
* https://docs.python.org/3/tutorial/classes.html
* https://www.w3schools.com/python/python_classes.asp`
}

const fifteen = {
    title: "Testing Forms in React using Enzyme and Jest", id: 15, preview: "A look at testing forms in a React application using Enzyme and Jest.", text: ` #Testing forms in React using Enzyme and Jest 
Recently I have been working on a simple blog application mainly to practice my frontend testing. Today I wanted to write about testing forms. Let's start with just my NewPost component here.

\`\`\`javascript
import React from 'react';
import { api } from '../services/api';

const NewPost = props => {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [message, setMessage] = React.useState('');

    const displayMessage = jsonMessage => {
        if (jsonMessage.error) {
            let message = '';
            // Need to catch multiple errors if they exist
            for (let error in jsonMessage.error) {
                message += error + ' ' + jsonMessage.error[error] + ' '
            }
            setMessage(message)
        } else {
            setMessage('Post created successfully!')
        }
    }

    const handleChange = ev => {
        if (ev.target.name === 'title') {
            setTitle(ev.target.value)
        } else if (ev.target.name === 'content') {
            setContent(ev.target.value)
        }
    }

    const handleSubmit = ev => {
        ev.preventDefault()
        // Just using a placeholder user id since there is no login currently
        const post = {title: title, content: content, user_id: 1}
        api.posts.createPost({ post: post}).then(json => displayMessage(json))
    }

    // We want to clear out the message after 4 seconds when a post is submitted
    React.useEffect(() => {
        let timer = setTimeout(() => setMessage(''), 4000);
        return () => clearTimeout(timer);
    }, [message]);

    return (
      <div className="new-post">
        <h1>New Post</h1>
        <form className="new-post-form" onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            onChange={handleChange}
            value={title}
            type="text"
            name="title"
          />
          <label>Content:</label>
          <input
            onChange={handleChange}
            value={content}
            type="text-area"
            name="content"
          />
          <input type="submit" value="Create post" />
        </form>
        <p>{message}</p>
      </div>
    );
}

export default NewPost;
\`\`\`

This form is fairly simple all we have is a title and the content for our post. In order to be able to test React's useState function we are not naming the import but just calling the useState method on our React import.

\`\`\`javascript
const [title, setTitle] = React.useState('');
\`\`\`

This will allow us to test the state calls when we update the title or content fields on our form. To get started with our tests let's add all of our imports and configure our adapter.

\`\`\`javascript
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewPost from "../components/NewPost";

Enzyme.configure({adapter: new Adapter() });
\`\`\`

In a similar manner we are also going to write a describe block for our component to contain all of our form tests.

\`\`\`javascript
describe("<NewPost />", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = Enzyme.mount(Enzyme.shallow(<NewPost />).get(0))
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
\`\`\`

First things first we are initializing a wrapper variable that we will use the \`mount\` function available through Enzyme to have a copy of our component. Then we create a state spy so that we can check that React's useState function is called. Finally, we write our beforeEach and afterEach functions to mount our component and then clear all jest mocks.

Now let's get into the meat of testing our useState calls.

\`\`\`javascript
    describe("Title input", () => {
        it("Should capture title correctly onChange", () => {
            const title = wrapper.find("input").at(0);
            title.instance().value = "Test";
            title.simulate("change");
            expect(setState).toHaveBeenCalledWith("Test");
        });
    });

    describe("Content input", () => {
        it("Should capture content correctly onChange", () => {
            const content = wrapper.find("input").at(1);
            content.instance().value = "Testing";
            content.simulate("change");
            expect(setState).toHaveBeenCalledWith("Testing");
        });
    });
\`\`\`

This first describe block is testing our title input which we can see by finding the first input. From here we set it's value to "Test" and then initiate a change action. We want to check that our setState function is called with this title. The same pattern follows for our content input test. We are checking that our setState function is being called with the updated input of "Testing".`
}

export const blogs = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen
]

