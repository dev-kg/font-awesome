import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M299.83 32h-1.49a32.27 32.27 0 0 0-19.64 7L0 255.87V448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V255.87C512 136.05 418 38.2 299.83 32zm3.77 48.4c87.74 7.67 155.63 79.47 159.64 167.42H88.47zM464 432H48V295.89h416z"/>
        </svg>
    )
}

export default Icon
