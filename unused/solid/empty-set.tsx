import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M507.31 27.31L484.69 4.69c-6.25-6.25-16.38-6.25-22.63 0l-72.09 72.09C352.57 48.78 306.31 32 256 32 132.29 32 32 132.29 32 256c0 50.3 16.78 96.57 44.78 133.96l-72.09 72.1c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l72.09-72.09C159.43 463.22 205.7 480 256 480c123.71 0 224-100.29 224-224 0-50.3-16.78-96.57-44.78-133.96l72.09-72.09c6.25-6.26 6.25-16.39 0-22.64zM112 256c0-79.4 64.6-144 144-144 28.11 0 54.16 8.41 76.35 22.39L134.39 332.35C120.41 310.16 112 284.11 112 256zm288 0c0 79.4-64.6 144-144 144-28.11 0-54.16-8.41-76.35-22.39L377.6 179.65C391.59 201.84 400 227.89 400 256z"/>
        </svg>
    )
}

export default Icon
