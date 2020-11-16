# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer:
  You would use the method super() in react if a state is needed for a component. You also use it inside a constructor for a class.

  Researched answer:
  The super keyword refers to the parent class.

  It is used to call the constructor of the parent class and to access the parent's properties and methods.

  You use it in a constructor when the constructor is extending another class and adding more properties & you want the extended class to include all the properties of the parent class.

  The parent class doesn't need super because it is at the top of the prototypal inheritance chain.



2. What is a virtual DOM?

  Your answer: it is the space between the code and what renders that is making decisions about how things will render on screen depending on user behavior or changes.

  Researched answer:
   A virtual COM (VDOM) is where an ideal, or "virtual" representation of  UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM- this process is called reconciliation.

   You tell react what state you want the UI to be in, and it makes sure the DOM matches that state. It is more of a pattern than a specific technology.

   It is a lightweight copy of the actual DOM- for every object that exists in the original DOM there is an object for it in the react virtual DOM. manipulating the virtual DOM is much faster than manipulating the real DOM.

   React contains 2 virtual DOM at any one time- one is the updated Virtual DOM and one is the pre-update version of this updated DOM>


3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
  you need a render, return with a <div> that says Hello World, import, export, & DOM in the app.js file

  Researched answer:

  I researched "react elements" and found this:
  An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.

  An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen. You can’t call any methods on the element. It’s just an immutable description object with two fields: type: (string | ReactClass) and props: Object1.

  The react DOM is the Document Object Model. It is a structured representation of the HTML elements that are present in a webpage or web app. It contains a node for each HTML element present in the web document.



4. What is JSX?

  Your answer:
  JSX is a way to use HTML syntax within React. It is slightly different from HTML but it is kind of like a mashup of HTML & JS. It was created at Facebook

  Researched answer:





5. What is state in React?

  Your answer:
  State is the how code will currently render based on the actions of a user. It can be changed or set with setState upon a user action.

  Researched answer:
  JSX stands for Javascript XML. JSX allows us to write & add HTML in React. It is a syntax extension to JavaScript and it is the best way to describe what the UI should look like inside react.

  You can put any valid Javascript expression inside curly braces in JSX


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
  Using variables before they are declared.  It is possible but it is not recommended.

  Researched answer:

  Hoisting is Javascripts default behavior of moving declarations to the top. It is preventable if you always declare your variables at the beginning of every scope. Hoisting can cause bugs if you are not aware of it.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
  - these are special methods we can declare on a component class to run a code whenever an component mounts or unmounts.
  - mounting is when a component is rendered to the DOM for the first time.
  - unmounting is a way to free up resources whenever some


- React props
  - props stands for properties
  - props is a keyword that stands for the arbitrary inputs that components accept
  - components accept props object arguments and return a react element.

- event.preventDefault()
  - The event. preventDefault() method stops the default action of an element from happening.
  - this method tells the user agent that is the event doesn't get explicitly handled, its default action should not be taken as it normally would be.

- DOM events
  - DOM events allow Javascript to register different event handlers on elements in an HTML document. Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button.)

- MVC
  - MVC stands for Model View Controller and it is a very often used software design pattern for implementing UI


  MVC: M
The Model is the data structure of the program. It will flow into the Views and populate our program with live data.

MVC: V
Views make up the representation of data that the user sees. This is the UI that the user interacts with. In ReactJS, the views also fulfill a 'Controller' type responsibility and communicate directly with the model. We will have several views, the App view passing the data into the rest of the views.

MVC C:
The controller is the go-between for the Model and Views. Given a change in the Model or an event in the View, that change or event will be reflected or communicated reciprocally on the other via the controller.

2 advantages of using an MVC framework to develop a web app are modularity and separation of concerns. Modularity refers to the re-usability of code & separation of concerns allows the ease of workflow for development teams. 
