import React from 'react';
import Book from '../Book/Book';

const BookViewer = (props) => {
    return ( 
    <div className="row-spacer">
        <div className="col-md-4">
            <button onClick={props.previousBook}>Previous Book</button>
        </div>
        <div className="col-md-4">
            <Book book={props.book} />
        </div>
        <div className="col-md-4">
            <button onClick={props.nextBook}>NextBook</button>
        </div>
    </div> 
    );
}


export default BookViewer;