import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M469.5 119.4L356.3 232.6c-3.8 1.7-14.7-9.5-12.9-12.9 19.2-21.5 105.3-117.9 107.3-120.1 14.1-19.3-19.1-52.5-38.4-38.4-2.3 2-98.7 88.1-120.1 107.3-3.4 1.8-14.6-9.1-12.9-12.9L392.5 42.4c15.4-19.4-18.7-53-37.5-39.3-4.4 3.1-88.6 62.8-116.2 90.3-41.8 41.8-49.6 94.1-28.7 139.1L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l180.5-201.2c45 20.9 97.2 13.3 139.1-28.7 27.6-27.6 87.3-111.8 90.4-116.2 13.7-18.7-19.9-52.7-39.3-37.4z"/>
        </svg>
    )
}

export default Icon
