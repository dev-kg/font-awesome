import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M503.88 261.29L279.8 10.64C273.45 3.55 264.72 0 256 0s-17.45 3.55-23.8 10.64L8.12 261.29c-11.81 13.21-10.6 33.5 2.69 45.22l224.08 197.52c6.03 5.32 13.57 7.97 21.11 7.97 7.54 0 15.08-2.66 21.11-7.97L501.19 306.5c13.29-11.71 14.49-32.01 2.69-45.21zM256 297.95l-75.86-50.57 75.86-177 75.86 177L256 297.95zm-107.28-58.24L47.69 264.97 220.97 71.12l-72.25 168.59zm214.56 0L291.03 71.12 464.5 265.01l-101.22-25.3zM31.91 282.62l.01.04-.03-.02.02-.02zm17.03 15.03l108.34-27.09 82.76 55.19v140.22L48.94 297.65zM271.96 465.9V325.75l82.76-55.19 108.2 27.06L271.96 465.9z"/>
        </svg>
    )
}

export default Icon
