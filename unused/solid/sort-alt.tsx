import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm203.29-219.31l-80-96a16 16 0 0 0-22.62 0l-80 96C186.65 142.74 193.78 160 208 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.19 0 21.36-17.24 11.29-27.31z"/>
        </svg>
    )
}

export default Icon
