import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import {App} from '../App';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BooksList';


describe('<App /> Component test suite', () => {
  it('<App /> component contains <BookSearch /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookSearch)).to.have.lengthOf(1);
  });

  it('<App /> Component contains <BookList /> component ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookList)).to.have.lengthOf(1);
  });

  it('<App /> clearClicked method updates state with passed books value ', () => {
    const testBooks = [{id: 1,title: "name"}];
    const wrapper = shallow(<App books={testBooks}/>);
    const instance = wrapper.instance();
    instance.clearClicked();
    expect(wrapper.state('books')).equals(testBooks);
  });

  it('<App /> searchClicked method updates state with passed search string', () => {
    const testBooks = [{id: 1,title: "name"}];
    const wrapper = shallow(<App books={testBooks}/>);
    const instance = wrapper.instance();
    instance.searchClicked('null');
    expect(wrapper.state('books')).to.have.length(0);
  });

  it('<App /> searchClicked method updates state with passed search string', () => {
    const testBooks = [{id: 1,title: "name"}];
    const wrapper = shallow(<App books={testBooks}/>);
    const instance = wrapper.instance();
    instance.searchClicked('name');
    expect(wrapper.state('books')).deep.equal(testBooks);
  });

});