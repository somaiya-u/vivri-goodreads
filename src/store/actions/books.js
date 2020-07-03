import axios from 'axios';
import {getBooksInfoFromXml}  from '../../utils/utils';
export const LOAD_BOOKS = "LOAD_BOOKS";
export const CLEAR_BOOKS = "CLEAR_BOOKS";
export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";



// Used a 3rd party cors proxy server to bypass cors error from goodreads api as it does not allow browser based requests.
const goodreadsapiurl = "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=4LTXwACMwO1JeQpDvR9Q&q=";

export const loadBooks = payload => {
    return {
        type: LOAD_BOOKS,
        payload
    }
};

export const searchBooks = (str,page) => {
    return (dispatch) => {
        dispatch(showSpinner());
        let pageNo = page || 1;
        axios.get(goodreadsapiurl+str+"&page="+pageNo)
        .then(function (response) {            
            dispatch(loadBooks(getBooksInfoFromXml(response.data)));
            dispatch(hideSpinner());
        })
        .catch(function (error) {
            dispatch(hideSpinner());
            console.error("Error in parsing api or api error", error);
        });
    };  
};

export const clearBooks = payload => {
    return {
        type: CLEAR_BOOKS    
    }
};

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    };
};

export const hideSpinner = () => {
    return {
        type: HIDE_SPINNER
    };
};
