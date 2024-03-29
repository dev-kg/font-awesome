import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32zm-87.3 400h-273c-7.9 0-14.7-5.9-15.9-14.4L85.9 304h340.4l-17.8 114.3c-1.1 7.8-7.9 13.7-15.8 13.7zm41.1-176H78.4L50.7 80h410.6l-27.5 176z"/>
        </svg>
    )
}

export default Icon
