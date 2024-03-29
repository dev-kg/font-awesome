import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M488 351H24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zm-24 80H289v-32h175v32zm24-240H24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zm-24 80H161v-32h303v32zm24-240H24C10.7 31 0 41.7 0 55v80c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24V55c0-13.3-10.7-24-24-24zm-24 80H353V79h111v32z"/>
        </svg>
    )
}

export default Icon
