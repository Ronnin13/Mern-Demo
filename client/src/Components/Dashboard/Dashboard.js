import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import get from "lodash/get";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";

function ProfileComponent({ profile }) {
    console.log(profile);
    if (!profile)
        return (
            <React.Fragment>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to="/create-profile" className="btn btn-primary my-1">
                    Create Profile
                </Link>
            </React.Fragment>
        );
    return (
        <React.Fragment>
            <DashboardActions />
        </React.Fragment>
    );
}

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
    React.useEffect(() => {
        getCurrentProfile();
    }, []);

    const { user_details } = auth;

    let welcomeString = "Welcome!";
    if (user_details && user_details.first_name) {
        welcomeString = `Welcome, ${user_details.first_name}!`;
    }
    const usr_profile = get(profile || {}, "profile", undefined);

    return (
        <React.Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user"> {" " + welcomeString}</i>
            </p>
            <ProfileComponent profile={usr_profile} />
        </React.Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
