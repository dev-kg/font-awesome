import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v72H80V16A16 16 0 0 0 64 0H48a16 16 0 0 0-16 16v392a32 32 0 0 0 32 32h192v40a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v72H80V152h176v40a32 32 0 0 0 32 32zm16-176h44.12l32 32H496v96H304zm0 288h44.12l32 32H496v96H304z"/>
        </svg>
    )
}

export default Icon
