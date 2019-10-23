import React from 'react';

export default () => {
    const linkedinUrl = 'https://www.linkedin.com/in/eli-cohen-19066/';
    const portfolioUrl = 'https://elico5.github.io/';
    const githubUrl = 'https://github.com/elico5';
    const openNewTab = url => {
        window.open(url, '_blank');
    }
    return (
        <footer className='footer'>
            <div onClick={() => openNewTab(linkedinUrl)} className='linkedin-icon-container'>
                <i className='fab fa-linkedin' />
            </div>
            <div onClick={() => openNewTab(portfolioUrl)} className='portfolio-icon-container'>
                <i className='fas fa-walking' />
            </div>
            <div onClick={() => openNewTab(githubUrl)} className='github-icon-container'>
                <i className='fab fa-github' />
            </div>
        </footer>
    );
};