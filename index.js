// let node=document.createElement('h1')
// node.innerHTML="Hello world!"
// let root=document.getElementById('root')
// root.appendChild(node)



// const heading=React.createElement("h1",
// {
//     id:"heading", xyz:"some"
// },
//     "Hello world from react!")  //here object iis creating
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)  //rendre method converting the object into h1 and putting into the dom
// console.log(heading);
// console.log(root);


//Nesting od react element <div><div><h1>"I am the new h1"

// let parent=React.createElement("div",{id:"first"},
// React.createElement("div",{className:"second"},React.createElement("h1",{},"I am the new h1")))
// let root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

//if you want create the sibling just create the array for the third argument
// let parent=React.createElement("div",{id:"first"},
// React.createElement("div",{className:"second"},
// [React.createElement("h1",{},"I am the new h1"),
// React.createElement("h2",{},"I am the new h2")]))
// let root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)


//if you want to create agai a child 2
let parent=React.createElement("div",{id:"first"},
[React.createElement("div",{className:"second"},
[React.createElement("h1",{},"I am the new h1"),
React.createElement("h2",{},"I am the new h2")]),React.createElement("div",{className:"second"},
[React.createElement("h1",{},"I am the new h1"),
React.createElement("h2",{},"I am the new h2")])])
let root=ReactDOM.createRoot(document.querySelector('body'))
root.render(parent)
