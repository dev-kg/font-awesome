import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M446.2 341.5l-22.2-64c-4.5-12.9-16.6-21.5-30.2-21.5H384V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h-9.8c-13.6 0-25.8 8.6-30.2 21.5l-22.2 64C-5.4 362.3 10 384 32 384v120c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V384h320v120c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V384c22 0 37.4-21.7 30.2-42.5zM288 37.9c37.2 13.2 64 48.4 64 90.1v128h-64zM192 32h64v224h-64zm-96 96c0-41.7 26.8-76.8 64-90.1V256H96zM32 352l22.2-64h339.6l22.2 64z"/>
        </svg>
    )
}

export default Icon
