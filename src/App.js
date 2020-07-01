import React from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Image } from 'react-bootstrap';
import BookSearch from './components/BookSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BooksList';
import { getBooks } from './store/selectors';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books
    };
    this.searchClicked = this.searchClicked.bind(this);
    this.clearClicked = this.clearClicked.bind(this);
  }

  searchClicked(input){
    this.setState({
      books: this.props.books.filter(book=>book.title.toLowerCase().includes(input.toLowerCase()))
    });
  }

  clearClicked(){
    this.setState({books:this.props.books});
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row className="justify-content-md-center ">
            <Col  md={6} className="mt-4 mb-4">
              <Row className="justify-content-center">
                <Image src="/logo.png" className="app-logo" thumbnail/>
              </Row>
              <BookSearch searchClicked={this.searchClicked} clearClicked={this.clearClicked}/>
              <BookList books={this.state.books}/>
            </Col>
          </Row>
        </Container>
     </div>
    );
  }
}

const mapConnectToProps = (state) => {
  return {
    books: getBooks(state)
  };
};

export default connect(
  mapConnectToProps,
null
)(App);

