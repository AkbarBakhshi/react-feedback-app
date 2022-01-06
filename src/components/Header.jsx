// type _rfce
// import React from 'react'    -- no need to import react anymore

import PropTypes from 'prop-types'

// function Header(props) {
function Header({ text, bgColor, textColor }) {

    const headerStyles = { backgroundColor: bgColor, color: textColor }
    return (
        <header style={headerStyles}>
            <div className="container">
                {/* <h2>props.text</h2> */}
                <h2>{text}</h2>
            </div>
        </header>
    )
}

//in case no prop is passed:

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

//to check the type of props -- don't forget to import PropTypes

Header.protoTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
