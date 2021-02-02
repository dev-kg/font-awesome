import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M377.8 167.9c-8.2-14.3-23.1-22.9-39.6-22.9h-94.4l28.7-87.5c3.7-13.8.8-28.3-7.9-39.7C255.8 6.5 242.5 0 228.2 0H97.7C74.9 0 55.4 17.1 52.9 37.1L.5 249.3c-1.9 13.8 2.2 27.7 11.3 38.2C20.9 298 34.1 304 48 304h98.1l-34.9 151.7c-3.2 13.7-.1 27.9 8.6 38.9 8.7 11.1 21.8 17.4 35.9 17.4 16.3 0 31.5-8.8 38.8-21.6l183.2-276.7c8.4-14.3 8.4-31.5.1-45.8zM160.1 457.4L206.4 256H47.5L97.7 48l127.6-.9L177.5 193H334L160.1 457.4z"/>
        </svg>
    )
}

export default Icon
