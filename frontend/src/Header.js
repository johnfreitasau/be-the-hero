import React from 'react';

function Header({title}) {
    return (
        <div>
            <header>
                Be The Hero!
                {title}
            </header>
        </div>
    );
}

export default Header;