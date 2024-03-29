import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 176c17.7 0 32-14.3 32-32V0c-42.1 21-88.5 32-135.5 32H135.6C88.5 32 42.1 21 0 0v144c0 17.7 14.3 32 32 32h32v64H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v208c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V288h288v208c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V288h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-64zm-248 64H112v-64h120zm168 0H280v-64h120zM48 128V68.9C76.6 76.2 106.1 80 135.5 80h240.9c29.5 0 59-3.8 87.5-11.1V128z"/>
        </svg>
    )
}

export default Icon
