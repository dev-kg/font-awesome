import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 383.968v-255.93c0-28.425-34.488-42.767-54.627-22.627l-128 127.962c-12.496 12.496-12.497 32.758 0 45.255l128 127.968C157.472 426.695 192 412.45 192 383.968zM32 256l128-128v256L32 256z"/>
        </svg>
    )
}

export default Icon
