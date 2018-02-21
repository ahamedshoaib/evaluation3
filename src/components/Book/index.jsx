import React from 'react';

import './Book.css';

const Book = props => (
  <div className="book">
    {props.book.Name}
  </div>
);

export default Book;
