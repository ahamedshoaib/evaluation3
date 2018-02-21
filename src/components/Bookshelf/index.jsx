import React from 'react';

import Book from '../Book';

import './Bookshelf.css';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  renderBooks = () => {
    const books = [];
    this.props.books.forEach((book) => {
      books.push(<Book
        key={book.id}
        book={book}
      />);
    });
    return books;
  }

  render() {
    return (
      <div className="bookshelf">
        <div className="shelf-name">
          {this.props.author}
        </div>
        <div className="shelf-content">
          {this.renderBooks()}
        </div>
      </div>
    );
  }
}

export default Bookshelf;
