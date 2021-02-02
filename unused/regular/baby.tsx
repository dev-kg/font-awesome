import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm135.6 56.2l42.8-30c14.5-10.1 18-30.1 7.8-44.6-10.1-14.5-30.1-18-44.6-7.8l-42.8 30c-58.9 41.3-138.9 41.3-197.8 0l-42.8-30c-14.5-10.2-34.5-6.6-44.6 7.8-10.2 14.5-6.7 34.4 7.8 44.6l42.8 30c17.4 12.2 36.2 21.4 55.6 28.5v40.2c-9.4 5.6-16 15.4-16 27.1v18.7c0 6.2 2.3 11.9 5.6 17L63 396c-9.1 11.4-9.3 27.5-.6 39.2l48 64c6.3 8.4 15.9 12.8 25.6 12.8 6.7 0 13.4-2.1 19.2-6.4 14.2-10.6 17-30.7 6.4-44.8l-33.1-44.2 18.3-22.9c11.3 9 25.2 14.2 39.8 14.2h11c14.6 0 28.5-5.2 39.8-14.2l18.3 22.9-33.1 44.2c-10.6 14.1-7.8 34.2 6.4 44.8 5.8 4.3 12.5 6.4 19.2 6.4 9.8 0 19.3-4.4 25.6-12.8l48-64c8.8-11.7 8.5-27.8-.6-39.2l-38.6-48.3c3.3-5.1 5.6-10.8 5.6-17V312c0-11.7-6.6-21.5-16-27.1v-40.2c19.3-7.1 38-16.3 55.4-28.5zM256 330.7l-35.9 35.9c-6 6-14.1 9.4-22.6 9.4h-11c-8.5 0-16.6-3.3-22.6-9.4L128 330.7V312h128v18.7z"/>
        </svg>
    )
}

export default Icon