import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M519.38 243a12 12 0 0 0-17 0l-50.89 50.89a12 12 0 0 0 0 17l5.65 5.66a12 12 0 0 0 17 0L525 265.59a12 12 0 0 0 0-17zm80.52-115h-56v-16a16 16 0 0 0-16-16h-128a16 16 0 0 0-16 16v16H200.15V79.94H240a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v15.94a16 16 0 0 0 16 16h40.18V128H39.9a40 40 0 0 0-40 40v272a40 40 0 0 0 40 40h560a40 40 0 0 0 40-40V168a40 40 0 0 0-40-40zM176.2 416.06a112 112 0 1 1 112-111.95 111.95 111.95 0 0 1-112 111.95zm288 0a112 112 0 1 1 112-111.95 111.95 111.95 0 0 1-112 111.95zm-284-191.92h-8a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12h8a12 12 0 0 0 12-12v-72a12 12 0 0 0-12-12z"/>
        </svg>
    )
}

export default Icon
