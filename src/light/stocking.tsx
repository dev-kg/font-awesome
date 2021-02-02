import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 0H96C78.3 0 64 14.3 64 32v64c0 17.7 14.3 32 32 32v123.5l-39 26C-1.8 316.7-17.7 396.2 21.5 455c24.7 37 65.2 57 106.6 57 24.4 0 49.1-7 70.9-21.5l81.7-54.5c44.6-29.7 71.2-79.5 71.2-133.1V128c17.7 0 32-14.3 32-32V32C384 14.3 369.7 0 352 0zm-32 302.9c0 42.9-21.3 82.7-57 106.5l-81.8 54.5C165.4 474.5 147 480 128.1 480c-32.2 0-62.2-16-80-42.8-14.2-21.3-19.3-46.9-14.3-72.1 5-25.1 19.5-46.8 40.9-61l39-26 14.2-9.5V128h192v174.9zM352 96H96V32h256v64z"/>
        </svg>
    )
}

export default Icon
