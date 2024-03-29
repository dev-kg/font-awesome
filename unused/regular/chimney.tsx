import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 0H32C14.3 0 0 14.3 0 32v160c0 17.7 14.3 32 32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V224c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM304 464H80v-80h224v80zM80 336V224h80v112H80zm352 128h-80v-80h80v80zm0-128H208V224h224v112zm32-160H48V48h416v128z"/>
        </svg>
    )
}

export default Icon
