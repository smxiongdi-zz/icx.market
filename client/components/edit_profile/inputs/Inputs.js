import React from 'react';

import { editProfile } from './../../../redux/actions/settings';

class Edit extends React.Component {

    constructor() {
        super();

        this.state = {
            profile: {
                profile_name: "",
                location: "",
                about_me: "",
            },
            location_selection: ["United States", "Canada", "South Korea", "Japan", "Taiwan", "China", "Thailand", "Malaysia", "Mexico", "Brazil"]

        }

        this.handleEditProfileName = this.handleEditProfileName.bind(this);
        this.handleEditLocation = this.handleEditLocation.bind(this);
        this.handleEditAboutMe = this.handleEditAboutMe.bind(this);

        this.updateProfile = this.updateProfile.bind(this);

        this.editProfile = this.editProfile.bind(this);
    }

    componentDidMount() {
        this.props.profile !== undefined ?
            this.setState({profile: this.props.profile}) :
            this.props.fetchProfile().then(() => {
                this.setState({profile: this.props.profile});
            })
    }

    componentWillMount() {
    }

    editProfile() {
        this.props.dispatch(editProfile(this.state.profile));
    }

    updateProfile(editedProfile) {
        this.setState({profile: editedProfile});
    }

    handleEditProfileName(evt) {
        if(evt.target.value.length < 50) {
            var editedProfile = this.state.profile;
            editedProfile.profile_name = evt.target.value;
            this.updateProfile(editedProfile);
        }
    }

    handleEditLocation(evt) {
        var editedProfile = this.state.profile;
        editedProfile.location = evt.target.value;
        this.updateProfile(editedProfile);
    }

    handleEditAboutMe(evt) {
        if(evt.target.value.length < 1000) {
            var editedProfile = this.state.profile;
            editedProfile.about_me = evt.target.value;
            this.updateProfile(editedProfile);
        }
    }
    // put all the inputs in one file
    // make a container file
    // better split structure

    render() {
        return (
            <div>

                {/* Profile Name Input */}
                <div className="form-group row">
                    <div className="col-2">
                        <label>profile name</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" type="text" onChange={this.handleEditProfileName} value={this.state.profile.profile_name} />
                    </div>
                </div>

                {/* Location Input */}
                <div className="form-group row">
                    <div className="col-2">
                        <label>location</label>
                    </div>
                    <div className="col-4">
                        <select className="custom-select" onChange={this.handleEditLocation} value={this.state.location}>
                            <option selected>{this.state.profile.location}</option>
                            {this.state.location_selection.map((x) => <option value = {x}>{x}</option>)}
                        </select>
                    </div>
                </div>


                {/* About Me Input */}
                <div className="form-group">
                    <label>About</label>
                    <textarea className="form-control" rows="3" value={this.state.profile.about_me} onChange={this.handleEditAboutMe}></textarea>
                </div>

                {/* Submit change */}
                <button className="btn btn-outline-secondary btn-text" onClick={this.editProfile}>
                    Save changes
                </button>

            <div className="edit-msg">{this.props.message}</div>

            </div>
        );
    }
}

export default Edit;
