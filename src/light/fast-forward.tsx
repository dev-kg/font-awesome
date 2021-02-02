import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M500 63h-8c-6.6 0-12 5.4-12 12v157.7c-.9-1-1.9-2-3-2.9L276.5 70.4C255.9 53.3 224 67.6 224 95v117.8L52.5 70.4C31.9 53.3 0 67.6 0 95v320c0 27.4 31.9 41.8 52.5 24.6L224 296.2V415c0 27.4 31.9 41.8 52.5 24.6L477 279c1.1-.9 2.1-1.9 3-2.9V435c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V75c0-6.6-5.4-12-12-12zM219.5 254.4l-.2.1-.2.1L32 415V95l187.3 159.2.1.1.1.1zm231.5.5l-194.8 160-.1.1h-.1V95l.1.1.1.1L451 254v.9z"/>
        </svg>
    )
}

export default Icon
