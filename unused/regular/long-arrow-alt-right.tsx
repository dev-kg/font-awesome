import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z"/>
        </svg>
    )
}

export default Icon
