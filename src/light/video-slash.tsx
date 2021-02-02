import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M637 485.2L142.7 96l-16.2-12.7L23 1.8C19.6-1 14.5-.4 11.8 3l-10 12.5C-1 19-.4 24 3 26.8L438.9 370l9.1 7.2 169 133.1c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.6 2.2-8.6-1.2-11.4zM396.2 416H83.8c-10.7 0-19.8-7.2-19.8-15.8V135.9l-31.9-25.1c0 .4-.1.7-.1 1.1v288.4c0 26.4 23.2 47.8 51.8 47.8h312.4c16.6 0 31.2-7.3 40.7-18.5l-25.3-19.9c-3.7 3.7-9.1 6.3-15.4 6.3zm0-320c10.7 0 19.8 7.2 19.8 15.8v138.3l32 25.2v-65.8L576 128v248.1l28.4 22.4c2.1-4.2 3.6-8.8 3.6-14v-257C608 109 592.5 96 575.9 96c-6.2 0-12.5 1.8-18.2 5.7L448 171.6v-59.8c0-26.4-23.2-47.8-51.8-47.8H179.6l40.6 32h176z"/>
        </svg>
    )
}

export default Icon
