import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 288c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0-64c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM224 88c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm32 264c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm254.9-167.7l-5.9-14.5c-3.3-8-12.6-11.9-20.8-8.7L456 172.6v-29c0-8.6-7.2-15.6-16-15.6h-16c-8.8 0-16 7-16 15.6v46.9c0 .5.3 1 .3 1.5l-26.2 10.7c-3.7-9.2-8.1-18.3-13.7-26.6C376 159.8 380 142 380 124 380 55.6 324.4 0 256 0S132 55.6 132 124c0 18 4 35.8 11.6 52.1-5.7 8.4-10.1 17.4-13.7 26.6L103.7 192c.1-.5.3-1 .3-1.5v-46.9c0-8.6-7.2-15.6-16-15.6H72c-8.8 0-16 7-16 15.6v29l-28.1-11.5c-8.2-3.2-17.5.7-20.8 8.7l-5.9 14.5c-3.3 8 .7 17.1 8.9 20.3l110.1 44.9c0 .8-.2 1.6-.2 2.4 0 7.1.7 14.3 2.1 22-18.2 26.8-27.8 57.9-27.8 90.7 0 55.4 28.2 106.2 75.3 136.1 11.5 7.3 25.7 11.1 41.2 11.1h89.9c17 0 33.4-5.1 47.4-14.9 52.8-36.6 78.5-98.8 67-162.3-3.9-21.3-12.5-42-25.1-60.6 1.4-7.7 2.1-15.1 2.1-22.2 0-.8-.2-1.6-.2-2.4L502 204.5c8.1-3 12.1-12.1 8.9-20.2zM320.7 457.7c-5.9 4.1-12.9 6.3-20.1 6.3h-89.9c-4.4 0-10.7-.6-15.5-3.7-33.2-21-53-56.8-53-95.6 0-25.8 8.4-50.2 24.4-70.4l7.3-9.3-2.9-11.5c-2.1-8.2-3.1-15.1-3.1-21.6 0-26.9 12.1-46.3 22.2-57.8l12-13.7-9.9-15.2c-8.1-12.5-12.3-26.7-12.3-41.3 0-41.9 34.1-76 76-76s76 34.1 76 76c0 14.5-4.3 28.8-12.3 41.3l-9.9 15.2 12 13.7c10.2 11.5 22.2 31 22.2 57.8 0 6.6-1 13.5-3.1 21.7l-2.9 11.5 7.3 9.3c11.6 14.7 19.4 31.6 22.5 48.9 8.2 44.8-9.8 88.6-47 114.4zM288 88c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-32 40c-8.8 0-16 7.2-16 16s16 32 16 32 16-23.2 16-32-7.2-16-16-16z"/>
        </svg>
    )
}

export default Icon
