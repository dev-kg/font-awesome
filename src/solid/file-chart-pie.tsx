import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-87.49 302.53c-28.73-11.16-51.87-34.3-63.04-63.03C43.42 298.14 90.91 224.8 160 210.66V352h141.34c-14.14 69.09-87.48 116.58-164.83 86.53zm175.63-118.55c0 .01.01.02 0 .02H192V199.86c0-.01.01 0 .02 0 66.34.01 120.11 53.78 120.12 120.12zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/>
        </svg>
    )
}

export default Icon
