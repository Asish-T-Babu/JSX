// const heading = React.createElement('h1', {id: "heading"}, "Hello world from react!")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(root,"root")
// root.render(heading)

// the above line is for creating an html tag with it's value in the index.html file
////////////////////////////////////////////////////////////////////////////////////////////////
// now we need to create tree like structure (below is an example) in the index.html file 

{/* <div id='parent'>
    <div id='child'>
        <h1>I am an h1 tag!</h1>
    </div>
</div>

ReactElement -> is an object ->becomes html when browser understand
*/}
// const heading = React.createElement('h1',{},"I am an h1 tag!")
// const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement('div', {id: 'child'}, heading)
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)
////////////////////////////////////////////////////////////////////////////////////////////////////
// right now i need to create sibilings

{/* <div id='parent'>
    <div id='child'>
        <h1>I am an h1 tag!</h1>
        <h2>I am an h2 tag!</h2>
    </div>
</div>

ReactElement -> is an object ->becomes html when browser understand
*/}

// const heading1 = React.createElement('h1',{},"I am an h1 tag!")
// const heading2 = React.createElement('h2',{},"I am an h2 tag!")
// const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement('div', {id: 'child'}, [heading1, heading2])
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

////////////////////////////////////////////////////////////////////////////////////////////////////

// if i need to create more complex structure
{/* <div id='parent'>
    <div id='child1'>
        <h1>I am an h1 tag!</h1>
        <h2>I am an h2 tag!</h2>
    </div>
    <div id='child2'>
        <h1>I am an h1 tag!</h1>
        <h2>I am an h2 tag!</h2>
    </div>
</div>*/}

const heading1 = React.createElement('h1',{},"I am an h1 tag!")
const heading2 = React.createElement('h2',{},"I am an h2 tag!")
const parent = React.createElement(
    'div',
    {id: 'parent'},
    [React.createElement('div', {id: 'child1'}, [heading1, heading2]),React.createElement('div', {id: 'child2'}, [heading1, heading2])]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

//jsx
// we can make the above code more eaiser with jsx
/////////////////////////////////////////////////////////////////////////////////////////////////////////////