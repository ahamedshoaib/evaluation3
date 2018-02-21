import React from 'react';

import Bookshelf from '../Bookshelf';

import './Library.css';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      library: {},
    };
  }

  componentDidMount = () => {
    this.sync();
  }

  sync = () => {
    fetch('/books/db')
      .then(response => response.json())
      .then((library) => {
        console.log(library);
        this.setState({
          library,
        });
      });
  };

  renderBookshelves = () => {
    const bookshelves = [];
    Object.keys(this.state.library).forEach((author) => {
      bookshelves.push(<Bookshelf
        key={author}
        books={this.state.library[author]}
        author={author}
      />);
    });
    return bookshelves;
  }

  render() {
    return (
      <div className="library">
        <div className="library-name">
          the book shelf
        </div>
        {this.renderBookshelves()}
      </div>
    );
  }
}

export default Library;
