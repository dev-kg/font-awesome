import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M568 0H8C3.58 0 0 3.59 0 8.02v16.04c0 4.43 3.58 8.02 8 8.02h24v287.78c0 17.69 14.34 32.09 32 32.09h208v49.13l-85.66 85.89c-3.12 3.13-3.12 8.21 0 11.34l11.31 11.34a7.985 7.985 0 0 0 11.31 0L288 430.41l79.03 79.24a7.985 7.985 0 0 0 11.31 0l11.31-11.34c3.12-3.13 3.12-8.21 0-11.34L304 401.08v-49.13h208c17.66 0 32-14.4 32-32.09V32.09h24c4.42 0 8-3.59 8-8.02V8.02c0-4.43-3.58-8.02-8-8.02zm-56 320H64V32h448v288z"/>
        </svg>
    )
}

export default Icon