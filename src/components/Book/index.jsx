import React from 'react';

import './Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);

    if (props.book.like === 'like') {
      this.state = {
        like: true,
        buttonColor: '#d23526',
      };
    } else {
      this.state = {
        like: false,
        buttonColor: '#7b7b7b',
      };
    }
  }

  like = () => {
    if (this.state.like) {
      fetch(
        `/books/${this.props.book.id}/dislike`,
        {
          method: 'PATCH',
        },
      );
      this.setState({
        like: false,
        buttonColor: '#7b7b7b',
      });
    } else {
      fetch(
        `/books/${this.props.book.id}/like`,
        {
          method: 'PATCH',
        },
      );
      this.setState({
        like: true,
        buttonColor: '#d23526',
      });
    }
  }

  render(props) {
    return (
      <div className="book">
        <div className="book-info">
          <button className="like-button" style={{ backgroundColor: this.state.buttonColor }} onClick={this.like}>like</button>
          <div className="book-info-name">{this.props.book.Name}</div>
          <div className="book-info-rating">{this.props.book.rating}</div>
          <div className="book-info-author">{this.props.book.Author}</div>
        </div>
      </div>
    );
  }
}

export default Book;
