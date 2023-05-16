import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M468 0h-88c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h45.4l-95.5 95.5C305.2 107.8 274 96 240 96s-65.2 11.8-89.9 31.5l-28.9-28.9 31.1-31.1c4.7-4.7 4.7-12.3 0-17l-5.7-5.7c-4.7-4.7-12.3-4.7-17 0L98.6 76l-44-44H100c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H12C5.4 0 0 5.4 0 12v88c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V54.6l44 44-31.1 31.1c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l31.1-31.1 28.9 28.9C107.8 174.8 96 206 96 240c0 74.1 56 135.2 128 143.1V424h-52c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h52v44c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-44h52c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-52v-40.9c72-8 128-69 128-143.1 0-34-11.8-65.2-31.5-89.9L448 54.6V100c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12zM240 352c-61.9 0-112-50-112-112 0-61.9 50-112 112-112 61.9 0 112 50 112 112 0 61.9-50 112-112 112z"/>
        </svg>
    )
}

export default Icon
