import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 368V144a48 48 0 0 0-48-48H208a48 48 0 0 0-48 48v224a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48zM208 144h224v224H208zM48 48h160v16h48V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v160a48 48 0 0 0 48 48h80v-48H48zm544 208h-80v48h80v160H432v-16h-48v16a48 48 0 0 0 48 48h160a48 48 0 0 0 48-48V304a48 48 0 0 0-48-48zM96 160h32v-16a79.24 79.24 0 0 1 16.41-48H96zm448 192h-32v16a79.24 79.24 0 0 1-16.41 48H544z"/>
        </svg>
    )
}

export default Icon
