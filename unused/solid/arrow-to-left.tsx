import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm280.5-66.4L214.9 292H424c13.3 0 24-10.7 24-24v-24c0-13.3-10.7-24-24-24H214.9l65.6-65.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L94.1 239c-9.4 9.4-9.4 24.6 0 33.9l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.3 9.4-24.5 0-33.8z"/>
        </svg>
    )
}

export default Icon
