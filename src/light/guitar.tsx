import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M160 288c-35.3 0-64 28.7-64 64s28.6 64 64 64c35.3 0 64-28.7 64-64s-28.6-64-64-64zm0 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zM502.6 54.6L457.4 9.4C451.1 3.1 443 0 434.8 0c-8.2 0-16.4 3.1-22.6 9.4l-67.9 67.9c-8.3 8.3-10.5 19.9-7.8 30.5L300 144.4c-19.9-10.5-41-16.3-61.2-16.3-26.6 0-51.6 9-70.1 27.6-10.4 10.4-17.7 22.8-22.1 36.5-6.5 20.3-25.3 35.6-46 37.6-25.9 2.4-49.9 12.5-68.3 31-49.6 49.6-40.8 139 19.7 199.5 34.2 34.2 77.5 51.9 117.7 51.9 31 0 60.2-10.5 81.8-32.1 18.5-18.5 28.6-42.4 31-68.3 1.9-20.6 17.3-39.4 37.6-46 13.6-4.4 26.1-11.7 36.5-22.1 32.7-32.7 35.2-85.2 11.4-131.4l36.5-36.5c10.6 2.7 22.2.4 30.5-7.8l67.9-67.9c6.2-6.2 9.4-14.4 9.4-22.6-.3-8.4-3.4-16.6-9.7-22.9zM333.8 320.8c-6.5 6.5-14.4 11.3-23.7 14.2-32.5 10.5-56.5 40-59.6 73.4-1.8 19.5-9.4 36.3-21.8 48.7-18.8 18.9-42.5 22.9-59.1 22.9-33.4 0-68.1-15.5-95.1-42.5-48-48-56.8-117.2-19.7-154.3 12.4-12.4 29.3-19.9 48.7-21.8 33.4-3.2 62.9-27.1 73.4-59.6 3-9.2 7.8-17.2 14.2-23.7 15-15 34.1-18.2 47.5-18.2 12.5 0 25.2 3 37.4 8.1l-67.6 67.6c-6.2 6.2-6.2 16.4 0 22.6l45.2 45.3c6.2 6.2 16.4 6.2 22.6 0l67.8-67.8c3.9 9.4 6.4 19.1 7.4 28.9 2.4 22.6-3.9 42.6-17.6 56.2zM480 77.3l-67.9 67.8-17.7-4.5-129.4 129-22.6-22.6 128.9-129.4-4.5-17.7L434.7 32 480 77.3z"/>
        </svg>
    )
}

export default Icon
