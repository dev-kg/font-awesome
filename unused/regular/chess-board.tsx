import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 384v-64h-64v64zm0-127.93v-64h-64v64zM320.07 448h64v-64h-64zm-127.94 0h64v-64h-64zM64.2 256.1v64h64v-64zM448 64.2h-64v64h64zm-255.87 0h-64v64h64zm-127.93 64v64h64v-64zm255.87-64h-64v64h64zm-64 255.87v64h64v-64zm-64 0h-64v64h64zM384 192.13v-64h-64v64zm-64 127.94h64v-64h-64zm-64-127.94v-64h-64v64zm64 64v-64h-64v64zm-64 0h-64v64h64zm-64-64h-64v64h64zm-64 191.9H64v64h64zM480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-16 464H48V48h416z"/>
        </svg>
    )
}

export default Icon
