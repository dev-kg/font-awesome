import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 432h-24V304a16 16 0 0 0-16-16h-36a16 16 0 0 0-13.57 7.52l-20 32A16 16 0 0 0 304 352h24v80h-24a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM344 32a72 72 0 0 0 0 144 71.1 71.1 0 0 0 18.84-2.82 59.56 59.56 0 0 1-42.32 34.42A15.84 15.84 0 0 0 308 223.16v16.77a16 16 0 0 0 18.71 15.83A108.19 108.19 0 0 0 416 149.38V104a72.08 72.08 0 0 0-72-72zm0 96a24 24 0 1 1 24-24 24 24 0 0 1-24 24zM164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384z"/>
        </svg>
    )
}

export default Icon
