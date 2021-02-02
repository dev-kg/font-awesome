import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M512 123a74.13 74.13 0 0 0-52.26-70.74A74.05 74.05 0 0 0 358.12 6.73a80.49 80.49 0 0 0-106 41.57L34 266.45a116 116 0 0 0 0 164.05L81.5 478a116 116 0 0 0 164.05 0L463.7 259.87a80.49 80.49 0 0 0 41.57-106A73.46 73.46 0 0 0 512 123zM163.52 464a67.54 67.54 0 0 1-48.08-19.92l-47.52-47.52a67.27 67.27 0 0 1-17.1-29.71A216.16 216.16 0 0 0 112 376c92.14 0 170.78-58.11 201.75-139.52a171.27 171.27 0 0 1 98.57 6.9l-200.7 200.7a67.55 67.55 0 0 1-48.1 19.92zM268.43 99.88A167.07 167.07 0 0 1 280 160c0 92.64-75.38 168-168 168a168 168 0 0 1-56.44-10.07 67.89 67.89 0 0 1 12.37-17.54z"/>
        </svg>
    )
}

export default Icon
