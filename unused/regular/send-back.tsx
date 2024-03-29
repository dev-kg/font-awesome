import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 208V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v160a48 48 0 0 0 48 48h160a48 48 0 0 0 48-48zM48 48h160v160H48zm384 176h48v-80a48 48 0 0 0-48-48H288v48h144zM96 160h64V96H96zm496 96H432a48 48 0 0 0-48 48v160a48 48 0 0 0 48 48h160a48 48 0 0 0 48-48V304a48 48 0 0 0-48-48zm0 208H432V304h160zM208 288h-48v80a48 48 0 0 0 48 48h144v-48H208zm336 64h-64v64h64z"/>
        </svg>
    )
}

export default Icon
