import React from 'react';

import Bookshelf from '../Bookshelf';

import './Library.css';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
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
        if (Object.keys(library).length > 0) {
          this.setState({
            library,
            page: 2,
          });
        }
      });
  };

  importLibrary = () => {
    fetch('/books/save')
      .then(() => {
        fetch('/books/db')
          .then(response => response.json())
          .then((library) => {
            if (Object.keys(library).length > 0) {
              this.setState({
                library,
                page: 2,
              });
            }
          });
      });
  }

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
    if (this.state.page === 1) {
      return (
        <div className="library">
          <div className="library-name">
            the book shelf
          </div>
          <div className="library-import">
            import now
            <button onClick={this.importLibrary}>import</button>
          </div>
        </div>
      );
    }
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
