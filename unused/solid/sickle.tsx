import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M129.94 308.69a16 16 0 0 0-22.63 0l-22.62 22.62a16 16 0 0 0 0 22.63l2.74 2.75-82.74 82.74a16 16 0 0 0 0 22.63L50 507.31a16 16 0 0 0 22.63 0l82.75-82.75 2.74 2.74a16 16 0 0 0 22.63 0l22.62-22.62a16 16 0 0 0 0-22.63zM320 0c-96 0-166.25 69.31-184.12 151.44-13.74 63.14 10.71 128.65 56.41 174.34L224 355.87l35.42-35.42c-38.53-64.2-23.88-151.27 46.88-196 43.09-27.24 99.58-28.9 144.05-4a148.11 148.11 0 0 1 47.33 41.42c5.08 6.9 15.79 1.93 14.14-6.48C501.17 100.72 448 0 320 0z"/>
        </svg>
    )
}

export default Icon
