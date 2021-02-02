import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M224.1 504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V320h-32v184zM544 0H256.1c-17.7 0-32 14.3-32 32v128h32V32l79.2 205.1c-5.4 21.2-23.5 93.2-23.5 117.1 0 34.1 27.7 61.8 61.7 61.8 12.3 0 24-3.9 34-10.6 9.2 6.6 20.4 10.6 32.5 10.6 15.7 0 29.8-6.5 40-16.9 10.2 10.4 24.3 16.9 40 16.9 8.6 0 16.7-2.1 24-5.6V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V32c0-17.7-14.3-32-32-32zM373.5 384c-16.4 0-29.7-13.4-29.7-29.8 0-16.9 14.6-78.9 23.8-114 .8-3.2.7-6.7-.5-9.8L290.9 32h93.2v328c0 7 1.4 13.6 3.8 19.7-4.5 2.6-9.2 4.3-14.4 4.3zm90.5-24c0 13.3-10.7 24-24 24s-24-10.7-24-24V32h48v328zm80 0c0 13.3-10.7 24-24 24-13.2 0-24-10.7-24-24V32h48v328zM240.1 192h-44.3l-40.5-40.6c-8.5-8.5-18.6-14.6-29.6-18.5 20.4-12.7 34.1-35.2 34.1-60.9 0-39.7-32.3-72-72-72s-72 32.3-72 72c0 26.2 14.2 49 35.2 61.6-10.2 4-19.6 9.9-27.6 17.9C8.3 166.6 0 186.8.1 208.2L.2 304 0 463.9c0 26.5 21.5 48 47.9 48.1 25.5 0 46.4-19.9 48-45 1.6 25.1 22.4 45 47.9 45 26.5 0 48-21.5 48-48v-56.5c0-36.8-13.5-43.2-48-76.9v-55.8c11.1 8.4 24.8 13.1 38.8 13.1h57.6c26.5 0 48-21.5 48-48S266.6 192 240.1 192zM47.8 72c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40zm192.3 184h-57.6c-8.4 0-16.6-3.4-22.6-9.4l-48.2-48.2v145.7c42.1 41.2 48 42.1 48 63.4V464c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-78.2 15.5-45.8-63.6-121.9L64 464c0 8.8-7.2 16-16 16s-16-7.2-16-16l.2-160-.2-95.9c0-26.2 21.2-48.1 48-48.1h18.7c12.8 0 24.9 5 33.9 14.1l49.9 49.9h57.6c8.8 0 16 7.2 16 16s-7.1 16-16 16z"/>
        </svg>
    )
}

export default Icon
