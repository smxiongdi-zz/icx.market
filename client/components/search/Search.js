import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchResult from './result/SearchResult.js';

class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            searchLoaded: false,
        }
    }

    componentDidMount() {
        this.props.fetchSearch().then(() => {
            this.setState({searchLoaded:true});
        });
    }

    render() {

        if(!this.state.searchLoaded) {
            return (
                <div className="load_wrapper">
                    <div className="loading" />
                </div>
            );
        } else {
            return (
                <div className = "ptext">
                    {
                        this.props.results.map((x) => <SearchResult result = {x} />)
                    }

                </div>
            );
        }
    }
}

export default Search;
