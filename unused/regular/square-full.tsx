import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 0v512h512V0H0zm464 464H48V48h416v416z"/>
        </svg>
    )
}

export default Icon
