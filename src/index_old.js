import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// let h1 = React.createElement('h1',{id:'myTitle',className:'mySuperClass'},'Hello World! Java 37');
// let p = React.createElement('p',null,'My Text');
// let div = React.createElement('div',null,h1,p);

// ReactDOM.render(h1,document.querySelector("#root"));
// ReactDOM.render(div, document.querySelector("#root2"));
let a = 100;
let b = 200;

let styles = {
  border:'1px solid black',
  fontSize:'25px',
  borderRadius:'5px'
};

let arr = [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
  <li key="3">Item 3</li>
];

let names = ['John','Jack','Tony'];

let div = (
  <div>
    <h1 style={{color:'red',backgroundColor:'green'}}>Hello</h1>
    <p style={styles}>My Text</p>
    <small>{147 + 47} ---- {a + b}</small>
    <br/>
    <input/>
    <hr/>
    {Math.random() > 0.5 ? getText() : getError()}
    <hr/>
    <ul>
      {arr}
    </ul>
    <hr/>
    <ul>
      {getNames()}
    </ul>
    <hr/>
    <ul>
      {names.map((n,i) => <li key={i}>{n}</li>)}
    </ul>
  </div>
);

function getNames(){
  let res = [];
  for(let i = 0; i < names.length; i++){
    res.push(<li key={i}>{names[i]}</li>);
  }
  return res;
}

function getText(){
  return (
    <h2>Some text</h2>
  );
}

function getError(){
  return <h2>Some error</h2>;
}

ReactDOM.render(<h1 id='myTitle' className='mySuperClass'>Hello World from JSX! Java 37</h1>,
  document.querySelector("#root"));
ReactDOM.render(div,document.querySelector('#root2'));
