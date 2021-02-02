import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M489.9 386c-11.8-73.4-47.4-193.5-154.1-257.4v-.7c10-7.8 16.2-19.8 16.2-33.1s-6.1-25.2-16.2-33.1c1.6-12.7-2.6-25.5-12-34.8-9.4-9.3-22.2-13.4-34.8-11.9-15.6-20-50.4-20-66.1.1-12.6-1.4-25.4 2.6-34.8 11.9-9.4 9.4-13.5 22.2-12 34.8-10 7.8-16.2 19.8-16.2 33.1s6.1 25.2 16.2 33.1v.7C69.5 192.5 33.9 312.6 22.1 386 9.3 390.2 0 401.8 0 416v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64c0-14.2-9.3-25.8-22.1-30zm-33.1-2H55.2c2.6-14.4 6-30.1 10.8-47.1l62-31 64 32 64-32 64 32 64-32 62 31c4.8 17 8.3 32.7 10.8 47.1zm-257-298.9l19-5.6-9.4-17.4c-1.8-3.3-2.5-8.5 1.4-12.4 3.9-4 9.2-3.2 12.5-1.5l17.4 9.4 5.6-19c1.2-3.9 4.6-7.8 9.8-7.8s8.7 3.9 9.8 7.8l5.6 19 17.4-9.4c3.3-1.8 8.5-2.5 12.5 1.5 3.9 3.9 3.2 9.1 1.4 12.4l-9.4 17.4 19 5.6c3.9 1.1 7.8 4.6 7.8 9.8s-3.9 8.7-7.8 9.8l-19 5.6 9.4 17.4c1.8 3.3 2.5 8.5-1.4 12.4-2.9 2.9-5.6 5.2-12.5 1.5l-17.4-9.5-5.6 19c-1.2 3.9-4.6 7.8-9.8 7.8s-8.7-3.9-9.8-7.8l-5.6-19-17.4 9.5c-6.9 3.8-9.6 1.4-12.5-1.5-3.9-3.9-3.2-9.1-1.4-12.4l9.4-17.4-19-5.6c-3.9-1.1-7.8-4.6-7.8-9.8s3.9-8.7 7.8-9.8zm-13.3 75.6c.6.7 1 1.5 1.7 2.1 9.2 9.2 22 13.7 35 12.2 7.8 9.9 19.7 15.9 32.9 15.9s25.1-6 32.9-15.9c13 1.6 25.8-3 35-12.2.7-.7 1.1-1.4 1.7-2.1 52.4 33.8 85.1 83.6 105.2 132.8L384 270.1l-64 32-64-32-64 32-64-32-46.7 23.4c20.1-49.2 52.7-99 105.2-132.8zM480 480H32v-64h448v64z"/>
        </svg>
    )
}

export default Icon
