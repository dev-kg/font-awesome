import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M495.87 320h-47.26c-63 0-119.82 22.23-160.61 57.92v-96.67A79.8 79.8 0 0 0 367.56 144 79.78 79.78 0 1 0 256 32.44 79.78 79.78 0 1 0 144.44 144 79.81 79.81 0 0 0 224 281.25v96.67C183.21 342.23 126.37 320 63.39 320H16.13c-9.19 0-17 7.72-16.06 16.84C10.06 435 106.43 512 223.83 512h64.34c117.4 0 213.77-77 223.76-175.16.92-9.12-6.87-16.84-16.06-16.84zM256 192a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"/>
        </svg>
    )
}

export default Icon
