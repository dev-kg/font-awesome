import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M48 224h223.9c42.6 0 64.2-51.7 33.9-81.9l-111.9-112c-18.7-18.7-49.1-18.7-67.9 0l-112 112C-16 172.2 5.3 224 48 224zM160 64l112 112H48L160 64z"/>
        </svg>
    )
}

export default Icon
