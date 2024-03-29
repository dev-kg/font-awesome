import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M488 191H24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zm-360 96H32v-64h96v64zm352 0H160v-64h320v64zm8-256H24C10.7 31 0 41.7 0 55v80c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24V55c0-13.3-10.7-24-24-24zm-168 96H32V63h288v64zm160 0H352V63h128v64zm8 224H24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24zm-232 96H32v-64h224v64zm224 0H288v-64h192v64z"/>
        </svg>
    )
}

export default Icon
