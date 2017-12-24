import React from 'react';
import { connect } from 'react-redux';
import Search from './Search.js';
import { search } from './../../redux/actions/search';

const mapStateToProps = state => {
    return ({
        results: state.results,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
        fetchSearch: () => dispatch(search()),
    })
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
