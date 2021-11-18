import { props } from 'bluebird';
import React from 'react';


const BookViewer = (props) => {
    return ( <div className="row-spacer">
    <div className="col-md-4">
        <button onClick={props.previousBook}>Previous Book</button>
    </div>
    <div className="col-md-4">
    <h1>{props.book.title}</h1>
    <h4>{props.book.author}</h4>
    </div>
    <div className="col-md-4">
        <button onClick={props.nextBook}>NextBook</button>
    </div>
</div> );
}


export default BookViewer;