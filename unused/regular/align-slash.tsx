import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M634 471L36 3.5A16 16 0 0 0 13.49 6l-10 12.5A16 16 0 0 0 6 41l598 467.5a16 16 0 0 0 22.5-2.5l10-12.5A16 16 0 0 0 634 471zM528 296h-39.94l52.69 41.19A15.6 15.6 0 0 0 544 328v-16a16 16 0 0 0-16-16zm16-112a16 16 0 0 0-16-16H324.34l61.39 48H528a16 16 0 0 0 16-16zm-16-96a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16H160.61L222 88zM112 424a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h367.37L418 424zm0-80h203.65l-61.39-48H112a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16z"/>
        </svg>
    )
}

export default Icon
