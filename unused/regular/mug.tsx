import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 64H64a32 32 0 0 0-32 32v256a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-64h48a112 112 0 0 0 0-224zm-96 288a48 48 0 0 1-48 48H128a48 48 0 0 1-48-48V112h288zm96-112h-48V112h48a64 64 0 0 1 0 128z"/>
        </svg>
    )
}

export default Icon
