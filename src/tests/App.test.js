import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import {App} from '../App';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BooksList';
import Spinner from '../components/Spinner';


describe('<App /> Component test suite', () => {
  it('<App /> component contains <BookSearch /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookSearch)).to.have.lengthOf(1);
  });

  it('<App /> Component contains <BookList /> component ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookList)).to.have.lengthOf(1);
  });

  it('<App /> should not show spinner when showSpinner from props is false', () => {
    const testProps = {showSpinner: false};
    const wrapper = shallow(<App {...testProps}/>);
    expect(wrapper.find(Spinner)).to.have.lengthOf(0);    
  });

  it('<App /> should  show spinner when showSpinner from props is true', () => {
    const testProps = {showSpinner: true};
    const wrapper = shallow(<App {...testProps}/>);
    expect(wrapper.find(Spinner)).to.have.lengthOf(1);    
  });

});