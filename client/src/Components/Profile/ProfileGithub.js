import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProfileGithub = (props) => {
    const { github_username, repos } = props;
    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">Github Repos</h2>
            {repos.map((repo) => (
                <div key={repo.id} className="repo bg-white p-1 my-1">
                    <div>
                        <h4>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {repo.name}
                            </a>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div>
                        <ul>
                            <li className="badge badge-primary">
                                Stars: {repo.stargazers_count}
                            </li>
                            <li className="badge badge-dark">
                                Watchers: {repo.watchers_count}
                            </li>
                            <li className="badge badge-light">
                                Forks: {repo.forks_count}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

ProfileGithub.propTypes = {
    repos: PropTypes.array.isRequired,
    github_username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    repos: state.profile.repos,
    github_username: state.profile.profile.github_username,
});

export default connect(mapStateToProps)(ProfileGithub);