import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm269.6 263.5L228 361.1V152c0-13.3-10.7-24-24-24h-24c-13.3 0-24 10.7-24 24v209.1l-65.6-65.6c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L175 481.9c9.4 9.4 24.6 9.4 33.9 0l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.3-9.4-24.5-9.4-33.8 0z"/>
        </svg>
    )
}

export default Icon
