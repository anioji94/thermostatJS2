# Thermostat in Javascript
A quick exercise to help me solidify my JS foundational knowledge.

## User Stories
```
As a User
So that I can know how warm it is now
I would like to be able to see the current temperature

As a User
So that I can make it warmer
I would like to be able to increase the temperature

As a User 
So that I can make it colder
I would like to be able to decrease the temperature

As a User
So that I do not waste too much energy
I would like to be able to activate a Powersaving Mode

As a User
So that I can use more energy if I need to
I would like to be able to deactivate Powersaving Mode

As a User
So that I know how much energy I'm using
I would like the power usage to be visible
```

## The DOM API
The DOM API, or Domain Object Model, is an interface which allows programmers to manage the HTML or XML of a webpage. Usually this involves changing the document's structure, style and context. For example, you could include a button which allows you to change the background of the page to a random colour or insert a Heading into a blank div block.

The DOM reads through the HTML or XML of a webpage and represents each element as an object that can be interacted with using the coding language of your choice. I'll be using Javascript on this project. Using the API (application programming interface), we can make calls to the DOM in javascript file and interact with these elements in an Object Oriented way. 

The DOM as we know it today is actually built with several APIs that work in tandem. As mentioned before, they are language agnostic. You can interact with it using a separate javascript file (using the <script></script> tag) or you can use the same tag and link the file from the working directory. 

### Interactable Data Types
- Document
    This is the root object of your webpage. Every other data type is an aspect of the Document object.
- Node
    Every object within the document is a node. This includes headings, script elements and the like. In fact any attribute of an element such as `onClick()` functions or backgroundColor is considered a node too.
- Element
    These are nodes of the element type. For example a <h1> element would count as an element node. In terms of the API's perspective, elements can be interacted with using the Element interface of the API or the Node interface. This is because it counts as both.
- NodeList
    A node list is an array of elements returned by `document.querySelectorAll()`. They can be interacted with either `list.item(1)` or `list[1]`. The first method uses the `item()` method while the second uses standard array notation.
- Attribute
    An attribute (such as the background color or `onClick()` functions) can be created via the `createAttribute()` method. They are also nodes as mentioned above.
- NamedNodeMap
    This works like a Ruby Hash in that these maps are arranged as a Key-Value pair. You can use the Key to access a value or use standard Array notation to access certain indices. However the former is the best option since the specificity is there and they are usually un-ordered so indices might be pretty useless.

### Tech Used
- Mocha and Chai JS for testing purposes
- Everything installed via NPM
- Intend to use an API for weather information

## Specification
- Thermostat starts at 20 Degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default but it can also be turned off
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
- A visual interface will represent the thermostat
- `high-usage` will be indicated with a Red colour, `medium-usage` with a black colour and `low-usage` with green.

I'll be attempting this challenge using Test Driven Development