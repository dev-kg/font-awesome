import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M96 224c53 0 96-43 96-96s-43-96-96-96S0 75 0 128s43 96 96 96zm0-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm192 208c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm93.9-381.2L57.2 475c-2.3 3.1-5.9 5-9.7 5H12c-9.6 0-15.3-10.7-10-18.7L327.2 37c2.3-3.1 5.9-5 9.7-5H372c9.6 0 15.3 10.8 9.9 18.8z"/>
        </svg>
    )
}

export default Icon
