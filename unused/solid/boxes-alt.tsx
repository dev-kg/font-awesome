import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M240 288h-80v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-88H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-64-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm384 64h-80v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-88h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z"/>
        </svg>
    )
}

export default Icon
