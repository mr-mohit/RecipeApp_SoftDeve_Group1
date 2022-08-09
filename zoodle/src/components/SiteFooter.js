import React from 'react';

function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="row align-items-start">
                <div className="brand col-33">
                    <h2 className="site-name">Zoodle</h2>
                    <p>
                        Lorem Ipsum.
                    </p>
                </div>

                <div className="col">
                    <h3 className="heading">Quicklinks</h3>
                    <nav>
                        <a>Login</a>
                        <a>Register</a>
                    </nav>
                </div>

                <div className="col">
                    <h3 className="heading">Support</h3>
                    <nav>
                        <a>FAQ</a>
                        <a>Helpdesk</a>
                    </nav>
                </div>

                <div className="col">
                    <h3 className="heading">Legal</h3>
                    <nav>
                        <a>Terms Of Use</a>
                        <a>Privacy</a>
                    </nav>
                </div>
            </div>
            <p id="copyright">&copy; Zoodle. All Rights Reserved.</p>
        </footer>
    );
}

export default SiteFooter;