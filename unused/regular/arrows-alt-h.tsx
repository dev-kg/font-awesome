import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M508.485 247.515l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485V228H123.03v-71.03c0-10.691-12.926-16.045-20.485-8.485l-99.03 99.029c-4.686 4.686-4.686 12.284 0 16.971l99.03 99.029c7.56 7.56 20.485 2.206 20.485-8.485V284h265.941v71.03c0 10.691 12.926 16.045 20.485 8.485l99.03-99.029c4.686-4.687 4.686-12.285-.001-16.971z"/>
        </svg>
    )
}

export default Icon
