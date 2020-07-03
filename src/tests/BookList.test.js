import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { Pagination } from 'react-bootstrap';
import {spy} from 'sinon';

import  {BookList}  from '../components/BooksList';
import  Book  from '../components/Book';

describe('<BookList /> Component test suite', () => {
  it('<BookList /> component should contain Pagination components', () => {
    const testProps = {books:[],resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game'};
    const wrapper = shallow(<BookList {...testProps} />);
    expect(wrapper.find(Pagination)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.Prev)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.Next)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.First)).to.have.lengthOf(1);
    expect(wrapper.find(Pagination.Last)).to.have.lengthOf(1);
  });

  it('<BookList /> component should contain n of Book component as books count in props', () => {
    const testProps = {books:[{id:1}]};
    const wrapper = shallow(<BookList {...testProps} />);
    expect(wrapper.find(Book)).to.have.lengthOf(testProps.books.length);
  });

  it("<BookList /> component method 'handleNext' should set next state pageNo with incremented value", () => {
    const testProps = {resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageNo).to.equal(1);
    instance.handleNext();
    expect(wrapper.state().pageNo).to.equal(2);    
  });

  it("<BookList /> component method 'handleNext' should call searchBooks callback with next pageNo and querystring", () => {
    const testProps = {resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    let spied = spy(testProps,'searchBooks');
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    assert(spied.notCalled);
    let pageNoState = wrapper.state().pageNo;
    instance.handleNext();
    assert(spied.calledOnce);
    assert(spied.calledOnceWith(testProps.queryString,pageNoState+1));
  });

  it("<BookList /> component method 'handlePrev' should set next state pageNo with decremented value", () => {
    const testProps = {resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    wrapper.setState({pageNo: 2});
    expect(wrapper.state().pageNo).to.equal(2);
    instance.handlePrev();
    expect(wrapper.state().pageNo).to.equal(1);    
  });
  
  it("<BookList /> component method 'handlePrev' should call searchBooks callback with query string and pageNo", () => {
    const testProps = {resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    let spied = spy(testProps,'searchBooks');
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    wrapper.setState({pageNo: 2});
    expect(wrapper.state().pageNo).to.equal(2);
    instance.handlePrev();
    expect(wrapper.state().pageNo).to.equal(1); 
    assert(spied.calledOnce);
    assert(spied.calledOnceWith(testProps.queryString,1));   
  });

  it("<BookList /> component method 'handleFirst' should set next state pageNo initial value", () => {
    const testProps = {resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    wrapper.setState({pageNo: 10});
    expect(wrapper.state().pageNo).to.equal(10);
    instance.handleFirst();
    expect(wrapper.state().pageNo).to.equal(1);    
  });

  it("<BookList /> component method 'handleFirst' should call searchBooks callback with query string and first page no", () => {
    const testProps = {resultsStart:1,resultsEnd:20,totalResults:80,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]};
    let spied = spy(testProps,'searchBooks'); 
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    wrapper.setState({pageNo: 10});
    expect(wrapper.state().pageNo).to.equal(10);
    instance.handleFirst();
    expect(wrapper.state().pageNo).to.equal(1); 
    assert(spied.calledOnce);
    assert(spied.calledOnceWith(testProps.queryString,1));   
  });

  it("<BookList /> component method 'handleLast' should set next state pageNo with last pae no", () => {
    const testProps = {resultsStart:1,resultsEnd:5,totalResults:20,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5}]};
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageNo).to.equal(1);    
    instance.handleLast();
    expect(wrapper.state().pageNo).to.equal(4);    
  });

  it("<BookList /> component method 'handleLast' should call searchBooks callback with query string and last page no", () => {
    const testProps = {resultsStart:1,resultsEnd:5,totalResults:20,queryString:'game',searchBooks:()=>{},books:[{id:1},{id:2},{id:3},{id:4},{id:5}]};
    let spied = spy(testProps,'searchBooks'); 
    const wrapper = shallow(<BookList {...testProps} />);
    const instance = wrapper.instance();
    expect(wrapper.state().pageNo).to.equal(1);    
    instance.handleLast();
    expect(wrapper.state().pageNo).to.equal(4);  
    assert(spied.calledOnce);
    assert(spied.calledOnceWith(testProps.queryString,4));
  });

});