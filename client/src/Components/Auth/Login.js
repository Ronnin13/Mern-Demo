import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { loginUser } from "../../API/Auth";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../../actions/types";

const Login = (props) => {
    const { login, setAlert, isAuthenticated } = props;
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await loginUser({ email, password })
            .then((res) => {
                login(LOGIN_SUCCESS, res.data);
                console.log("SUCCESS", res);
            })
            .catch((e) => {
                console.log("Err", e.response);
                if (e.response && e.response.data && e.response.data.errors) {
                    e.response.data.errors.forEach((err) => {
                        setAlert(err.msg, "danger");
                    });
                }
                login(LOGIN_FAILED);
            });
    };

    if (isAuthenticated) return <Redirect to="/dashboard" />;

    return (
        <React.Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Log in to your account
            </p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
            <p className="my-1">
                Don't an account? <Link to="/register">Sign Up</Link>
            </p>
        </React.Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setAlert })(Login);
