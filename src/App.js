import React from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Image } from 'react-bootstrap';
import BookSearch from './components/BookSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BooksList';
import Spinner from './components/Spinner';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row className="justify-content-center">
            <Col  md={6} className="mt-4 mb-4">
              <Row className="justify-content-center">
                <Image src="/logo.png" className="app-logo" thumbnail/>
              </Row>
              <BookSearch />
              <BookList />
            </Col>
          </Row>
        </Container>
        {this.props.showSpinner && <Spinner />}
     </div>
    );
  }
}

const mapConnectToProps = (state) => {
  return {
    showSpinner: state.books.showSpinner
  };
};

export default connect(
  mapConnectToProps,
  null
)(App);


