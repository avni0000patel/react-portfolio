import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    const styles = {
        header: {
            backgroundColor: '#274C77',
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '1',
        },
        float: {
            position: 'absolute',
            right: '25px',
            marginTop: '5px',
        }
    }
    return (
        <header>
            <ul style={styles.header} className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}

                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"

                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"

                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <div style={styles.float}>
                        <h3>Avni Patel</h3>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default NavTabs;
