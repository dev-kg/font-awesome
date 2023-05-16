import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-207.691 96h63.382c6.884 0 12.357 5.78 11.982 12.654l-7.418 136c-.347 6.364-5.609 11.346-11.982 11.346h-48.546c-6.373 0-11.635-4.982-11.982-11.346l-7.418-136c-.375-6.874 5.098-12.654 11.982-12.654zM224 398c-25.405 0-46-20.595-46-46s20.595-46 46-46 46 20.595 46 46-20.595 46-46 46z"/>
        </svg>
    )
}

export default Icon
