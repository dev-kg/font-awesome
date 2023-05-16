import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H464c-17.7 0-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32v27.8c0 40.8 28.7 78.1 69.1 83.5 30.7 4.1 58.3-9.5 74.9-31.7 18.4 24.7 50.4 38.7 85.3 29.7 25.2-6.5 46.1-26.2 54.4-50.8 4.9-14.8 5.4-29.2 2.8-42.4h163.2c-2.7 13.2-2.2 27.6 2.8 42.4 8.4 25.1 29.9 44.9 55.6 51.1 52.8 12.8 100-26.9 100-77.6 0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17.1-6.7-33.3-18.7-45.3zM80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm320 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm-48-176v-48h37.5c4.2 0 8.3 1.7 11.3 4.7l43.3 43.3H480zM32 304h336c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v208c0 17.7 14.3 32 32 32zM304 80h32v176h-32V80zm-80 0h32v176h-32V80zm-80 0h32v176h-32V80zm-80 0h32v176H64V80z"/>
        </svg>
    )
}

export default Icon
