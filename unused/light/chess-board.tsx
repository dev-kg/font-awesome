import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M320.07 448h64v-64h-64zm-127.95 0h64v-64h-64zM64.18 256.1v64h64v-64zM192.12 64.17h-64v64h64zM448 256.1v-64h-64v64zm0-191.93h-64v64h64zm0 319.88v-64h-64v64zM320 64.17h-64v64h64zm-255.89 64v64h64v-64zm255.89 128v-64h-64v64zm-64-64v-64h-64v64zm-64 0h-64v64h64zM128 384.1H64v64h64zm64-64h-64v64h64zm192.05-127.98v-64h-64v64zm-127.95 64h-64v64h64zm0 64v64h64v-64zm64 0h64v-64h-64zM480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm0 480H32V32h448z"/>
        </svg>
    )
}

export default Icon
