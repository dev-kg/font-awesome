import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 480h-.34a32 32 0 0 1-25.25-12.8l-263-350.65L53.73 281.88a16 16 0 0 1-22.46 2.7L6.12 264.82a16 16 0 0 1-2.7-22.47L150.84 44.23A32 32 0 0 1 176 32h.34a32 32 0 0 1 25.25 12.8l263 350.65 121.68-165.33a16 16 0 0 1 22.46-2.7l25.15 19.76a16 16 0 0 1 2.7 22.47L489.16 467.77A32 32 0 0 1 464 480z"/>
        </svg>
    )
}

export default Icon
