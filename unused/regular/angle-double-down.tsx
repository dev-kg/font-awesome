import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M151.5 427.8L3.5 281c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 362.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0zm17-160l148-146.8c4.7-4.7 4.7-12.3 0-17l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L160 202.7 40.3 84.2c-4.7-4.7-12.3-4.7-17 0L3.5 104c-4.7 4.7-4.7 12.3 0 17l148 146.8c4.7 4.7 12.3 4.7 17 0z"/>
        </svg>
    )
}

export default Icon
