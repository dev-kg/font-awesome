import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M160.09 367.91c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-51.73l-48-37.53v89.26zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200 0-37.79 10.73-73.04 29.02-103.21l312.54 244.35C353.33 433.47 303.25 456 248 456zm-39.91-261.67v-10.42h48c22.06 0 40 17.94 40 40 0 11.56-5.08 21.79-12.95 29.1l-75.05-58.68zm210.9 164.88l-97.96-76.59c14.19-15.56 23.06-36.01 23.06-58.71 0-48.53-39.47-88-88-88h-80c-8.84 0-16 7.16-16 16v4.9l-53.65-41.94C142.67 78.53 192.75 56 248 56c110.28 0 200 89.72 200 200 0 37.79-10.73 73.04-29.01 103.21z"/>
        </svg>
    )
}

export default Icon
