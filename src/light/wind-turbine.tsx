import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 514 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M323.48 430.84a45.94 45.94 0 0 0 77.94-47l-67.74-155.58a16.75 16.75 0 0 1-.22-12.89L393.92 62.7A45.82 45.82 0 0 0 314.18 19L218 152.06a16.9 16.9 0 0 1-11 6.74L39.45 185.34a45.93 45.93 0 0 0 2.24 91L207 294.27 195 480h-32.3a36.94 36.94 0 0 0-33 20.42 8 8 0 0 0 7.11 11.58h240a8 8 0 0 0 7.15-11.58 36.93 36.93 0 0 0-33-20.42h-32.33l-3.86-59.58 7 8.3zM227 480l9.83-151.64 43.16 51L286.56 480zm17-199.46a48.85 48.85 0 0 0-32.84-18l-166-18a13.83 13.83 0 0 1-12.35-13.44v-.2a13.82 13.82 0 0 1 11.65-14L212 190.41a48.75 48.75 0 0 0 31.91-19.6l96.2-133.09a13.83 13.83 0 0 1 24.06 13.19l-60.46 152.68a48.77 48.77 0 0 0 .64 37.45l67.73 155.52a13.82 13.82 0 0 1-5.49 17.33l-.17.1a13.83 13.83 0 0 1-18-3.17zM256.8 200a24 24 0 1 0 24 24 24 24 0 0 0-24-24z"/>
        </svg>
    )
}

export default Icon
