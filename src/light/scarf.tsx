import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M509.7 395.7l-68.8-68.6-74.4-74.1 24.1-24.7c48.6-53.7 13-113.3 11.5-115.8l-43.6-73.1c-4.3-7.2-9.9-13.3-16.8-18C320.1 6.9 288.3 0 256.6 0h-1.2c-31.7 0-63.6 6.9-85.2 21.5-6.9 4.7-12.5 10.8-16.8 18l-43.6 73.1c-1.5 2.5-37.1 62.1 11.5 115.8l24.1 24.7-74.3 74.2-68.8 68.4c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l68.8-68.6 22.6 22.6-68.8 68.6c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l68.8-68.6 22.5 22.5-68.7 69.7c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0L256 366l140.5 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-68.7-69.7 22.5-22.5 68.8 68.6c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-68.8-68.6 22.6-22.6 68.8 68.6c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.3-3.1 3.3-8.1.2-11.3zM184 394.6l-67.5-67.4 51.4-51.3 66 67.5-49.9 51.2zm144 0L145.1 206.8c-31.9-35.2-10.4-73.6-7.7-77.9l43.6-73C192 37.4 233.3 32 255.4 32h1.2c22.1 0 63.4 5.4 74.5 23.8l43.6 73c2.6 4.3 24.1 42.7-7.7 77.9l-23 23.6-65.3-65.2 41.8-41.7c8.2-8.2 11.3-20.2 8.2-31.4-3.2-11.2-12.2-19.7-23.5-22.4-17.9-4.2-34.2-5.3-49.1-5.2-14.8 0-31.1 1-49.1 5.2-11.3 2.6-20.3 11.2-23.5 22.4-3.2 11.2-.1 23.2 8.2 31.4l203.9 203.7-67.6 67.5zM214.2 100.9c11.4-2.7 25.8-4.5 41.8-4.6 16 0 30.4 1.9 41.8 4.6L256 142.6l-41.8-41.7z"/>
        </svg>
    )
}

export default Icon
