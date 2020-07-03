import React from "react";
import { connect } from "react-redux";
import Book from './Book';
import { Pagination, Row } from 'react-bootstrap';
import { getBooks } from '../store/selectors';
import {searchBooks} from '../store/actions/books';


export class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
  }
  handleNext(){
    let pageNo = this.state.pageNo;
    this.setState({pageNo:pageNo+1});
    this.props.searchBooks(this.props.queryString,pageNo+1);
  }
  handlePrev(){
    let pageNo = this.state.pageNo;
    this.setState({pageNo:pageNo-1});
    this.props.searchBooks(this.props.queryString,pageNo-1);
  }
  handleFirst(){
    this.setState({pageNo:1});
    this.props.searchBooks(this.props.queryString,1);
  }
  handleLast(){
    let booksPerPage = this.props.books.length;
    let pageNo;
    if(this.props.totalResults % booksPerPage === 0){
      pageNo = this.props.totalResults/booksPerPage;
    }
    else{
      pageNo = Math.floor(this.props.totalResults/booksPerPage)+1;
    }
    this.setState({pageNo});
    this.props.searchBooks(this.props.queryString,pageNo);
  }
  render() {
    return (
      <div >
        <Row className="justify-content-between align-items-center">
          <div>{this.props.totalResults===0? <div>No Results</div>:<div>Showing results of {this.props.resultsStart}-{this.props.resultsEnd} of {this.props.totalResults} books</div>}</div>
          <Pagination>
            <Pagination.First onClick={this.handleFirst} disabled={this.props.resultsStart <= 1}/>
            <Pagination.Prev  onClick={this.handlePrev} disabled={this.props.resultsStart <= 1}/>
            <Pagination.Next  onClick={this.handleNext} disabled={this.props.totalResults === this.props.resultsEnd} />
            <Pagination.Last  onClick={this.handleLast} disabled={this.props.resultsEnd === this.props.totalResults} />
          </Pagination>
        </Row>
        
        <div>
          {
            this.props.books.map(book=><Book item={book} key={book.id} />)
          }
        </div>
      </div>
    );
  }
}

const mapConnectToProps = (state) => {
  const {resultsStart,resultsEnd,totalResults,queryString} = state.books;
  return {
    resultsStart,resultsEnd,totalResults,queryString,
    books: getBooks(state),
  };
};

export default connect(
  mapConnectToProps,
  {searchBooks},
null
)(BookList);

