import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M415 263.8L352 248V144c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32v434.7c0 8.5 3.4 16.6 9.4 22.6L32 512h64l32-32 32 32h64l32-32 32 32h64l32-32 32 32h64l22.6-22.6c6-6 9.4-14.1 9.4-22.6V388c0-58.8-40-110-97-124.2zM48 48h288v48H48V48zm416 368H48V144h256v48h-72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h72v32h-72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h82.1l89.3 22.3c35.7 8.9 60.6 40.8 60.6 77.6V416z"/>
        </svg>
    )
}

export default Icon
