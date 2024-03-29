import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 368V144a48 48 0 0 0-48-48H208a48 48 0 0 0-48 48v224a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48zM64 64h192V32a32 32 0 0 0-32-32H32A32 32 0 0 0 0 32v192a32 32 0 0 0 32 32h96v-64H64zm544 192h-96v64h64v128H384v32a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V288a32 32 0 0 0-32-32z"/>
        </svg>
    )
}

export default Icon
