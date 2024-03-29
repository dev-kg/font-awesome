import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 0H128L0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V147.9L147.9 48H384c8.8 0 16 7.2 16 16v384zm-80-272h48V80h-48v96zm-80 0h48V80h-48v96zm-80 0h48V80h-48v96z"/>
        </svg>
    )
}

export default Icon
