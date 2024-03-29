import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M19.6 224C7 236.5 0 253.5 0 271.3v141.8c0 37 29.9 66.9 66.9 66.9h141.8c17.7 0 34.7-7 47.3-19.6l58.9-58.9L78.5 165.1 19.6 224zM443.3 59.3l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0l-109 109-71.9-71.9c-13.1-13.1-34.2-13.1-47.3 0l-68.7 68.7 236.4 236.4 68.7-68.7c13.1-13.1 13.1-34.2 0-47.3l-72-71.9 109-109c6.3-6.3 6.3-16.4 0-22.7z"/>
        </svg>
    )
}

export default Icon
