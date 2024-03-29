import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M502.12 232.14L279.86 9.88C273.27 3.29 264.64 0 256 0s-17.27 3.29-23.86 9.88L9.88 232.14c-13.18 13.18-13.18 34.55 0 47.73l222.25 222.25c6.59 6.59 15.23 9.88 23.86 9.88s17.27-3.29 23.86-9.88L502.1 279.87c13.19-13.19 13.19-34.55.02-47.73zM280 77.9l166.38 166.38L280 315.6V77.9zm-48 237.7L65.62 244.29 232 77.9v237.7zm0 52.22v66.27L116.04 318.13 232 367.82zm48 0l115.97-49.69L280 434.1v-66.28z"/>
        </svg>
    )
}

export default Icon
