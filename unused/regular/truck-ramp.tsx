import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M544 48h96V0H384c-17.7 0-32 14.3-32 32v340.6L5.9 465.4c-4.3 1.1-6.8 5.5-5.7 9.8l8.3 30.9c1.1 4.3 5.5 6.8 9.8 5.7L416.5 405c2.7 59.5 51.4 107 111.5 107 61.9 0 112-50.1 112-112s-50.1-112-112-112c-44.6 0-82.8 26.3-100.8 64H400V48h144zm-16 288c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z"/>
        </svg>
    )
}

export default Icon
