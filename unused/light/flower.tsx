import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M461.5 256c30.7-26.8 50.5-65.8 50.5-109.7C512 65.5 446.5 0 365.7 0 321.8 0 282.8 19.8 256 50.5 229.2 19.8 190.2 0 146.3 0 65.5 0 0 65.5 0 146.3c0 43.9 19.8 82.9 50.5 109.7C19.8 282.8 0 321.8 0 365.7 0 446.5 65.5 512 146.3 512c43.9 0 82.9-19.8 109.7-50.5 26.8 30.7 65.8 50.5 109.7 50.5 80.8 0 146.3-65.5 146.3-146.3 0-43.9-19.8-82.9-50.5-109.7zm-95.8 224c-32.9 0-63.3-14-85.6-39.5L256 412.9l-24.1 27.6C209.6 466 179.2 480 146.3 480 83.3 480 32 428.7 32 365.7c0-32.9 14-63.3 39.5-85.6L99.1 256l-27.6-24.1C46 209.6 32 179.2 32 146.3 32 83.3 83.3 32 146.3 32c32.9 0 63.3 14 85.6 39.5L256 99.1l24.1-27.6C302.4 46 332.8 32 365.7 32c63 0 114.3 51.3 114.3 114.3 0 32.9-14 63.3-39.5 85.6L412.9 256l27.6 24.1c25.5 22.3 39.5 52.7 39.5 85.6 0 63-51.3 114.3-114.3 114.3zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
        </svg>
    )
}

export default Icon
