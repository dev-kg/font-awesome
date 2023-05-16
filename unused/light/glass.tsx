import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 0H32A32 32 0 0 0 .06 34l32 448A32 32 0 0 0 64 512h256a32 32 0 0 0 31.94-30l32-448A32 32 0 0 0 352 0zm0 32l-9.15 128H41.14L32 32zM64 479.72L43.43 192h297.14L320 480z"/>
        </svg>
    )
}

export default Icon
