import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M634 471L36 3.5A16 16 0 0 0 13.49 6l-10 12.5A16 16 0 0 0 6 41l598 467.5a16 16 0 0 0 22.5-2.5l10-12.5A16 16 0 0 0 634 471zM352 96l-24.76 74.27L378 210l38-114h144v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a15.86 15.86 0 0 0-14.18 8.94L232.24 96zm-16 336h-32l25.68-77-50.77-39.7L240 432h-32a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
