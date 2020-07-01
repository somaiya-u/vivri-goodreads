import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import {FormControl} from 'react-bootstrap';
import {spy} from 'sinon';

import  BookSearch  from '../components/BookSearch';

describe('<BookSearch /> Component test suite', () => {
  
    it('<BookSearch /> component should contain input control to enter search string', () => {
        const testProps = {searchClicked:()=>{},clearClicked:()=>{}};
        const wrapper = shallow(<BookSearch {...testProps} />);
        expect(wrapper.find(FormControl)).to.have.lengthOf(1);
    });

    it('<BookSearch /> component handleSearch method should call searchClicked callback on invoked', () => {
        const testProps = {searchClicked:()=>{},clearClicked:()=>{}};
        let spied = spy(testProps,'searchClicked');
        const wrapper = shallow(<BookSearch {...testProps} />);
        const instance = wrapper.instance();
        instance.handleSearch();
        assert(spied.calledOnce)
    });

    it('<BookSearch /> component handleSearch method should call searchClicked callback with state input value', () => {
        const testProps = {searchClicked:()=>{},clearClicked:()=>{}};
        const testInput = "test";
        let spied = spy(testProps,'searchClicked');
        const wrapper = shallow(<BookSearch {...testProps} />);
        wrapper.setState({input:testInput});
        const instance = wrapper.instance();
        instance.handleSearch();
        assert(spied.calledWith(testInput))
    });

    it('<BookSearch /> component handleChange method should set state input value with passed value', () => {
        const testProps = {searchClicked:()=>{},clearClicked:()=>{}};
        const testInput = "test";
        const wrapper = shallow(<BookSearch {...testProps} />);
        const instance = wrapper.instance();
        instance.handleChange(testInput);
        expect(wrapper.state().input).to.equal(testInput);
    });

    it('<BookSearch /> component handleClear method should set state input value empty string', () => {
        const testProps = {searchClicked:()=>{},clearClicked:()=>{}};
        const testInput = "test";
        const wrapper = shallow(<BookSearch {...testProps} />);
        wrapper.setState({input:testInput});
        const instance = wrapper.instance();
        expect(wrapper.state().input).to.equal(testInput);
        instance.handleClear(testInput);
        expect(wrapper.state().input).to.equal('');
    });

    it('<BookSearch /> component handleClear method should call clearClicked callback', () => {
        const testProps = {searchClicked:()=>{},clearClicked:()=>{}};
        let spied = spy(testProps,'clearClicked');
        const wrapper = shallow(<BookSearch {...testProps} />);
        const instance = wrapper.instance();
        instance.handleClear();
        assert(spied.calledOnce)

    });

    
});