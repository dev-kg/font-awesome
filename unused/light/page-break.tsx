import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M232 272a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM128 32h192v112a16 16 0 0 0 16 16h112v64h32v-82.77a31.93 31.93 0 0 0-9.35-22.6C447 94.92 384.8 32.78 361.23 9.23A31.54 31.54 0 0 0 338.75 0H128a32 32 0 0 0-32 32v192h32zm224 13.25L434.77 128H352zM568 272H424a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm-408 24v-16a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8zm288 184H128V352H96v128a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V352h-32z"/>
        </svg>
    )
}

export default Icon
