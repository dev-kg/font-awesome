import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 416c0 35.35-28.65 64-64 64s-64-28.65-64-64 28.65-64 64-64 64 28.65 64 64zm139.24-124.44c6.55-6.46 6.33-17.06-.57-23.15-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.45-33.99z"/>
        </svg>
    )
}

export default Icon
