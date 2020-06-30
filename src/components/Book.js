import React from "react";
import { Card, Row } from 'react-bootstrap';

class Book extends React.Component {
  render() {
    return (
        <Card className="mt-2">
            <Row className="justify-content-center">
                 <Card.Img variant="top" src="/book.png" style={{width: '150px',height:'150px'}}  />
            </Row>
            <Card.Body>
                <Card.Title className="book-info"><b>Book Name:</b><span>{this.props.item.title}</span></Card.Title>
                
                    <div className="book-info"><b>Author:</b><span>{this.props.item.author}</span></div>
                    <div className="book-info"><b>Year:</b><span>{this.props.item.year}</span></div>
                    <div className="book-info"><b>Edition:</b><span>{this.props.item.edition}</span></div>
                    <div className="text-truncate book-info"><b>Description:</b>{this.props.item.description?this.props.item.description:<span>Not Available</span>}</div>
                    
                
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last read {Math.floor(Math.random() * (60 - 1) + 1) } mins ago</small>
            </Card.Footer>
      </Card>
    );
  }
}

export default Book;
