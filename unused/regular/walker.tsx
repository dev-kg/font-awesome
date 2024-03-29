import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M408 388.75V88a88 88 0 0 0-88-88H186a88 88 0 0 0-85.37 66.66L.48 488.23a16 16 0 0 0 11.64 19.4l15.52 3.89a16 16 0 0 0 19.41-11.64L101.16 272H360v116.75a64 64 0 1 0 48 0zM112.56 224l34.6-145.7A40 40 0 0 1 186 48h134a40 40 0 0 1 40 40v136zM384 464a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"/>
        </svg>
    )
}

export default Icon
