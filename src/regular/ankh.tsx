import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M304 272h-76.92c29.46-36.35 54.82-87.85 54.82-134.86C281.9 52.98 227.33 0 160 0S38.1 52.98 38.1 137.14c0 47 25.36 98.51 54.82 134.86H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h120v176c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V320h120c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM160 48c44.21 0 73.9 35.82 73.9 89.14 0 53.83-49.69 119.49-73.9 133.35-24.21-13.85-73.9-79.52-73.9-133.35C86.1 83.82 115.8 48 160 48z"/>
        </svg>
    )
}

export default Icon
