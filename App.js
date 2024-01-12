import React from "react"
import ReactDOM from "react-dom"

// const heading = React.createElement('h1',{},"I am an h1 tag!")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// who can i create ReactElement without createElement function

const heading = <h1> React using JSX </h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

// some developers might thing we are writing html in JavaScript- the answer is no the above line is JSX not HTML

// The JSX is a HTML like or XML like syntax

// how the above code is running?
// the above code is transplied into ReactElement(JS object)
// the end of the day it is createElement in react = It is the same thing as the above commend line of codes


// The Babel is converting JSX code into JS