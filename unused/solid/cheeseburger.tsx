import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 256h-48l-96 64-96-64H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zM58.6 224h394.7c34.6 0 54.6-43.9 34.8-75.9C448 83.2 359.5 32.1 256 32c-103.5.1-192 51.2-232.2 116.1-19.8 32 .3 75.9 34.8 75.9zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm352 272H32a16 16 0 0 0-16 16v16a64.06 64.06 0 0 0 64 64h352a64.06 64.06 0 0 0 64-64v-16a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
