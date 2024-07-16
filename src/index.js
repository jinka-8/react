import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
    author = 'jinka';
    title = 'telugu stories';
    img = './books/book1.jpg';
};
const secondBook {
author = 'Ravindranath Tagore';
title = 'Geethanjali';
const img = './books/book1.jpg';
}

const BookList = () => {
    return <section className='booklist'>
        <Book author = {author} title= {title} img = {img}/>
        <Book author = {author} title= {title} img = {img}/>
        
        
    </section>;
};

const Book = (props) => {
    console.log(props);
    return <article className='book'>
            <img src= {props.img} alt= {props.title}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
          
            

            {console.log(props)}
    </article>
};



const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<BookList/>);