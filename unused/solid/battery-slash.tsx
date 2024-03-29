import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M64 352V179.48l-62.13-48A47.23 47.23 0 0 0 0 144v224a48 48 0 0 0 48 48h322l-82.81-64zm544 16v-16h8a24 24 0 0 0 24-24V184a24 24 0 0 0-24-24h-8v-16a48 48 0 0 0-48-48H165.31L45.47 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.35 454.73a16 16 0 0 0 22.47-2.81l19.64-25.27a16 16 0 0 0-2.81-22.45l-58.14-44.94A47.85 47.85 0 0 0 608 368zm-32-80h-32v64h-47.46L248.12 160H544v64h32z"/>
        </svg>
    )
}

export default Icon
