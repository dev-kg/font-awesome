import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 446 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 0H64A64 64 0 0 0 0 64v416a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a64 64 0 0 0-64-64zM184 64a24 24 0 1 1-24 24 24 24 0 0 1 24-24zM64 88a24 24 0 1 1 24 24 24 24 0 0 1-24-24zm160 360a144 144 0 1 1 144-144 144 144 0 0 1-144 144zm36.87-163.66a51.23 51.23 0 0 1-73.74 0 51.79 51.79 0 0 1-73.24 1A110.76 110.76 0 0 0 112 304a112 112 0 0 0 224 0 110.76 110.76 0 0 0-1.89-18.69 51.79 51.79 0 0 1-73.24-1z"/>
        </svg>
    )
}

export default Icon
