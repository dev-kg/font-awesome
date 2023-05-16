import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M227.03 388.97H156V123.03h71.03c10.691 0 16.045-12.926 8.485-20.485l-99.029-99.03c-4.686-4.686-12.284-4.686-16.971 0l-99.029 99.03c-7.56 7.56-2.206 20.485 8.485 20.485H100v265.94H28.97c-10.691 0-16.045 12.926-8.485 20.485l99.029 99.03c4.686 4.686 12.284 4.686 16.971 0l99.029-99.03c7.56-7.559 2.206-20.485-8.484-20.485z"/>
        </svg>
    )
}

export default Icon
