import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 0H32C14.3 0 0 14.3 0 32v128c0 17.7 14.3 32 32 32v304c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V192c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM64 192h96v128H64V192zm0 288V352h256v128H64zm384 0h-96V352h96v128zm0-160H192V192h256v128zm32-160H32V32h448v128z"/>
        </svg>
    )
}

export default Icon
