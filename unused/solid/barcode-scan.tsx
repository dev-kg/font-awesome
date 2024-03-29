import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M288 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zM160 8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v152h96V8zM64 504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V352H64v152zM480 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm96 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zM384 8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h32V8zm128 496c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-288 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm192 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-64 0c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V352h-32v152zm280-280H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"/>
        </svg>
    )
}

export default Icon
