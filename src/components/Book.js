import React from "react";
import { Card, Row } from 'react-bootstrap';

class Book extends React.Component {
  render() {
    return (
        <Card className="mt-2">
            <Row className="justify-content-center">
                 <Card.Img className="mt-2 book-img" variant="top" src={this.props.item.image_url}  />
            </Row>
            <Card.Body>
                <Card.Title className="book-info"><b>Book Name:</b><span>{this.props.item.title}</span></Card.Title>
                
                    <div className="book-info"><b>Author:</b><span>{this.props.item.author}</span></div>
                    <div className="book-info"><b>Year:</b><span>{this.props.item.original_publication_year}</span></div>
                    <div className="book-info"><b>Average Rating:</b><span>{this.props.item.average_rating}</span></div>
                    <div className="book-info"><b>Ratings Count:</b><span>{this.props.item.ratings_count}</span></div>
                    <div className="book-info"><b>Reviews:</b><span>{this.props.item.text_reviews_count}</span></div>
            </Card.Body>
      </Card>
    );
  }
}

export default Book;
