import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM616 160h-8v-16a48 48 0 0 0-48-48H232.24l61.39 48H560v64h32v96h-32v48.25l44.18 34.53A47.74 47.74 0 0 0 608 368v-16h8a24 24 0 0 0 24-24V184a24 24 0 0 0-24-24zM48 368V134.74l-32.79-25.63A47.74 47.74 0 0 0 0 144v224a48 48 0 0 0 48 48h359.76l-61.39-48z"/>
        </svg>
    )
}

export default Icon
