import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SearchResult extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() { }

    render() {
        let last_online = new Date(this.props.result.last_online);
        let now = new Date();
        let since = now - last_online;
        let since_string = '';

        if(since < 3600000) {
            since_string = "Less than an hour ago";
        } else if(since < 172800000) {
            since_string = Math.round(since/3600000) + " hours ago";
        } else {
            since_string = Math.round(since/86400000) + " days ago";
        }

        return (
            <li className = "list-group-item result">
                <div className = "container">
                    <Link to = { "/profile/" + this.props.result._id}>
                        {this.props.result.profile_name}
                    </Link>
                    <div className = "row">
                        <div className = "col-4">Location: {this.props.result.location}</div>
                    </div>
                    <div className = "row">
                        <div className = "col-8">Last online: {since_string}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default SearchResult;
