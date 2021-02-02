import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 176a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm-96-32a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm-96 32a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm352 112a79.33 79.33 0 0 0-28.1-60.4 8.78 8.78 0 0 0 1.2-1.5 72.49 72.49 0 0 0 .6-75.4C442.3 78.7 352.19 32.1 256 32c-96.1.1-186.31 46.7-229.71 118.7a72.45 72.45 0 0 0 .6 75.4 15.76 15.76 0 0 0 1.2 1.5 79.35 79.35 0 0 0-9.3 111.8 78.09 78.09 0 0 0 15 13.7c-.7 2.8-1.7 5.5-1.7 8.5v34.7a83.73 83.73 0 0 0 83.7 83.7h280.6a83.8 83.8 0 0 0 83.71-83.7v-34.7c0-3-1.1-5.7-1.7-8.5A80 80 0 0 0 512 288zM67.37 175.5c34.9-57.9 109-95.4 188.61-95.5 79.71.1 153.81 37.6 188.72 95.5a24.51 24.51 0 0 1-.2 25.2c-2.9 4.7-7.41 7.4-12.21 7.4H79.67c-4.8 0-9.3-2.7-12.2-7.4a24.73 24.73 0 0 1-.1-25.2zM432 396.3a35.72 35.72 0 0 1-35.7 35.7H115.67A35.72 35.72 0 0 1 80 396.3v-25.6h352zm0-76.3H80a32 32 0 0 1 0-64h144l96 48 96-48h16a32 32 0 1 1 0 64z"/>
        </svg>
    )
}

export default Icon
