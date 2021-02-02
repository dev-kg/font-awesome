import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M231.81 64a23.44 23.44 0 0 0-16.78 7l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441a23.47 23.47 0 0 0 16.81 7c12.33 0 24.19-9.52 24.19-24V88c0-14.51-11.86-24-24.19-24zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34z"/>
        </svg>
    )
}

export default Icon
