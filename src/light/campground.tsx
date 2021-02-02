import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M632 480h-24L339.74 109.19l63-87.09c2.6-3.57 1.8-8.57-1.77-11.17l-12.93-9.4c-3.57-2.6-8.58-1.81-11.18 1.77L320 81.9 263.14 3.3a7.999 7.999 0 0 0-11.18-1.77l-12.93 9.4c-3.57 2.6-4.37 7.6-1.77 11.17l63 87.09L32 480H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-409.81 0L320 343.06 417.81 480H222.19zm234.96 0L333.02 306.23c-6.38-8.93-19.66-8.93-26.04 0L182.85 480H71.49L320 136.48 568.51 480H457.15z"/>
        </svg>
    )
}

export default Icon
