import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-16 464H48V48h416zm-32-32v-88h-88v88zm0-176v-88h-88v88zM80 80v88h88V80zm264 0h-88v88h88zM168 432h88v-88h-88zm88-264h-88v88h88zm0 176h88v-88h-88zm-88-88H80v88h88z"/>
        </svg>
    )
}

export default Icon
