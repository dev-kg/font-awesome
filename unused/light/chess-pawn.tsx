import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M312 480H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h304a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM56 256h40v32c0 73.62-11.36 128.34-33 160h36.8c18.66-37.54 28.2-91 28.2-160v-32h64v32c0 69 9.54 122.46 28.2 160H257c-21.6-31.66-33-86.38-33-160v-32h40a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-25.78a112 112 0 1 0-156.44 0H56a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm24-112a80 80 0 1 1 80 80 80.09 80.09 0 0 1-80-80z"/>
        </svg>
    )
}

export default Icon
