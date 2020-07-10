import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const div = (
//     <div className='cards'>
//         {card({title:'My Title',subTitle:'My sub title'})}
//         {card({title:'My second',subTitle:'My super sub title'})}
//     </div>
// );

const cars = [
    {sn:'1234',model:'Civic',man:'Honda',year:2020}
];
const div = (
    <div className='cards'>
        <Card title='My Title' subTitle='My sub title'/>
        <Card title='My Second' subTitle='My super subtitle'></Card>
    </div>
);

function Card(props){
    console.log(props);
    console.log(props.title, props.subTitle);
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
        </div>
    );
}


ReactDOM.render(div,document.querySelector('#root'));