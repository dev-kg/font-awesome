import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm268.1 86.86L361 301.71c-11.09-18.28-38.81-18.28-49.9 0l-83.2 137.15c-11.08 18.28 2.77 41.14 24.95 41.14h166.3c22.18 0 36.03-22.86 24.95-41.14zM264 224h144a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24H264a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24z"/>
        </svg>
    )
}

export default Icon
