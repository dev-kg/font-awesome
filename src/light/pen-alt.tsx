import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M493.25 56.26l-37.51-37.51C443.24 6.25 426.86 0 410.49 0c-16.38 0-32.76 6.25-45.25 18.74l-67.88 67.88L274.74 64c-12.5-12.5-32.76-12.5-45.25 0L99.37 194.12c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L252.1 86.63l22.62 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.12l-.03.23C-1.45 499.72 9.88 512 23.95 512c5.73 0 111.06-6.99 198.03-93.95l271.28-271.28c24.99-25 24.99-65.52-.01-90.51zm-293.9 339.16c-45 45-103.93 74.41-166.1 83.39 9.13-62.64 38.5-121.32 83.34-166.16l180.77-180.77.01.01.01-.01 82.76 82.76-180.79 180.78zm271.28-271.28l-67.88 67.88-82.77-82.77 67.88-67.88c12.5-12.5 32.74-12.51 45.25 0l37.51 37.51c12.51 12.5 12.52 32.74.01 45.26z"/>
        </svg>
    )
}

export default Icon
