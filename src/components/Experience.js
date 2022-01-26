import React from 'react';
import Button from './utility/Button';

import "../utility/common.scss";
import "./Experience.scss";

const Experience = () => {
    return (
        <div className="cred-experience photo-section">
            <div className="max-width">
                <div className="photo-section-child">
                    <div className="photo-section-top">
                        <div className="photo-section-heading experience-heading">
                        we take your money matters seriously.
                        </div>
                        <div className="photo-section-subheading">
                        so that you don’t have to.
                        </div>
                    </div>
                    <div className="photo-section-bottom">
                        <div className="photo-section-description experience-description">
                        never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.
                        </div>
                        <div>
                        <Button buttonText="Experience the upgrade" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

