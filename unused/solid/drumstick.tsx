import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M462.43 49.57a169.21 169.21 0 0 0-239.31 0C187.66 85 160 128 160 192v85.83l-40.59 40.59c-9.71 9.69-24 11.07-36.76 6a60.31 60.31 0 0 0-65 98.72c15.27 15.27 36.5 19.58 56.1 15.09-4.49 19.6-.18 40.83 15.09 56.1a60.32 60.32 0 0 0 98.73-65c-5.09-12.73-3.72-27 6-36.75l40.6-40.58H320c64 0 107-27.66 142.44-63.12a169.22 169.22 0 0 0-.01-239.31z"/>
        </svg>
    )
}

export default Icon
