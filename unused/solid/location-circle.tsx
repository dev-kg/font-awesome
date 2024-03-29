import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm110.24 169.74l-95.95 207.89c-11.2 23.99-46.38 15.99-46.38-9.59v-87.96h-87.96c-25.59 0-33.58-35.18-9.59-46.38l207.89-95.95c19.2-7.99 39.99 12.8 31.99 31.99z"/>
        </svg>
    )
}

export default Icon
