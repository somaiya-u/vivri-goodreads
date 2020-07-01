import React from "react";
import Book from './Book';
import { Pagination, Row } from 'react-bootstrap';

export const defaultMaxPerPage = 5;
let initPageSettings = {
  pageStart : 0,
  pageEnd: defaultMaxPerPage-1,
  maxResultsPerPage: defaultMaxPerPage
}

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initPageSettings,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.books !== this.props.books) {
      this.refresh();
    }
  }
  refresh(){
    this.handleFirst();
  }
  getNoOfBooks(){
    return this.props.books.length;
  }
  handleNext(){
    this.setState((state)=>{
      let pageStart = state.pageStart+state.maxResultsPerPage;
      let pageEnd;
      if(state.pageEnd+state.maxResultsPerPage >= this.getNoOfBooks()){
        pageEnd = this.getNoOfBooks()-1;
      }
      else{
        pageEnd = state.pageEnd+state.maxResultsPerPage;
      }
      return {pageStart,pageEnd}
    })
  }
  handlePrev(){
    this.setState((state)=>{
      let pageEnd = state.pageStart-1;
      let pageStart;
      if(state.pageStart-state.maxResultsPerPage < 0){
        pageStart = 0;
      }
      else{
        pageStart = state.pageStart-state.maxResultsPerPage;
      }
      return {pageStart,pageEnd}
    })
  }
  handleFirst(){
    if(this.getNoOfBooks() < defaultMaxPerPage){
      initPageSettings.maxResultsPerPage = this.getNoOfBooks();
      initPageSettings.pageEnd = this.getNoOfBooks()-1;
    }
    else{
      initPageSettings.maxResultsPerPage = defaultMaxPerPage;
      initPageSettings.pageEnd =  defaultMaxPerPage-1;
    }
    this.setState(initPageSettings);
  }
  handleLast(){
    this.setState((state)=>{

      let pageStart;
      let pageEnd = this.getNoOfBooks()-1;
       if(this.getNoOfBooks() % state.maxResultsPerPage === 0){
          pageStart = this.getNoOfBooks()-state.maxResultsPerPage;
       }
       else{
          pageStart = Math.floor(this.getNoOfBooks()/state.maxResultsPerPage)*state.maxResultsPerPage;
       }
       return {pageStart,pageEnd}
    });
  }
  render() {
    return (
      <div >
        <Row className="justify-content-between align-items-center">
          <div>{this.getNoOfBooks()===0? <div>No Results</div>:<div>Showing results of {this.state.pageStart+1}-{this.state.pageEnd+1} of {this.getNoOfBooks()}</div>}</div>
          <Pagination>
            <Pagination.First onClick={this.handleFirst} disabled={this.state.pageStart <= 0}/>
            <Pagination.Prev  onClick={this.handlePrev} disabled={this.state.pageStart <= 0}/>
            <Pagination.Next  onClick={this.handleNext} disabled={this.state.pageEnd>=this.getNoOfBooks()-1} />
            <Pagination.Last  onClick={this.handleLast} disabled={this.state.pageEnd>=this.getNoOfBooks()-1} />
          </Pagination>
        </Row>
        
        <div>
          {
            this.props.books.slice(this.state.pageStart,this.state.pageEnd+1).map(book=><Book item={book} key={book.id} />)
          }
        </div>
      </div>
    );
  }
}

export default BookList;
