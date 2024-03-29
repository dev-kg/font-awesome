import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M624 352h-48V64a64.19 64.19 0 0 0-64-64H128a64.19 64.19 0 0 0-64 64v288H16a16 16 0 0 0-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48a16 16 0 0 0-16-16zM112 64a16.22 16.22 0 0 1 16-16h384a16.22 16.22 0 0 1 16 16v288H112zm480 352a48.05 48.05 0 0 1-48 48H96a48.05 48.05 0 0 1-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592zM408 160h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon
