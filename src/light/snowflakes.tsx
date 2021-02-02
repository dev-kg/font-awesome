import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M527.9 120c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V91.6l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9L576 64l27.9-16c3.8-2.2 5.1-7.1 2.9-10.9l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V120zm80.2 136l27.9-16c3.8-2.2 5.1-7.1 2.9-10.9l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V200c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V312c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16zm-220.2 77.5l52.7-14.3c4.2-1.1 6.7-5.5 5.6-9.8l-4.1-15.5c-1.1-4.3-5.5-6.8-9.7-5.7l-83.1 22.6-93.8-54.8 93.7-54.8 83.1 22.6c4.2 1.1 8.6-1.4 9.7-5.7l4.1-15.5c1.1-4.3-1.4-8.7-5.6-9.8l-52.7-14.3 55.9-32.7c3.8-2.2 5.1-7.1 2.9-10.9l-7.9-13.9c-2.2-3.8-7-5.1-10.8-2.9L372 150.8l14.1-53.3c1.1-4.3-1.4-8.7-5.6-9.8l-15.3-4.1c-4.2-1.1-8.6 1.4-9.7 5.7l-22.3 84.2-93.7 54.8V118.6l61-61.6c3.1-3.1 3.1-8.2 0-11.3l-11.2-11.3c-3.1-3.1-8.1-3.1-11.2 0l-38.6 39V8c0-4.4-3.5-8-7.9-8h-15.8c-4.4 0-7.9 3.6-7.9 8v65.4l-38.6-39c-3.1-3.1-8.1-3.1-11.2 0l-11.2 11.3c-3.1 3.1-3.1 8.2 0 11.3l60.9 61.7v109.7l-93.7-54.8-22-84.4c-1.1-4.3-5.5-6.8-9.7-5.7l-15.3 4.1c-4.2 1.1-6.7 5.5-5.6 9.8l14.1 53.3L19.8 118c-3.8-2.2-8.6-.9-10.8 2.9l-7.9 13.9c-2.2 3.8-.9 8.7 2.9 10.9l55.9 32.7-52.6 14.4c-4.2 1.1-6.7 5.5-5.6 9.8l4.1 15.5c1.1 4.3 5.5 6.8 9.7 5.7l83.1-22.6 93.7 54.8-93.7 54.8-83.1-22.6c-4.2-1.1-8.6 1.4-9.7 5.7l-4.1 15.5c-1.1 4.3 1.4 8.7 5.6 9.8L60 333.5 4.1 366.1C.3 368.3-1 373.2 1.2 377l7.9 13.9c2.2 3.8 7 5.1 10.8 2.9l55.9-32.7-14.1 53.3c-1.1 4.3 1.4 8.7 5.6 9.8l15.3 4.1c4.2 1.1 8.6-1.4 9.7-5.7l22.3-84.2 93.7-54.8v109.7l-61 61.7c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.3c3.1 3.1 8.1 3.1 11.2 0l38.6-39V504c0 4.4 3.5 8 7.9 8H232c4.4 0 7.9-3.6 7.9-8v-65.4l38.6 39c3.1 3.1 8.1 3.1 11.2 0l11.2-11.3c3.1-3.1 3.1-8.2 0-11.3L240 393.3V283.7l93.7 54.8 22.3 84.2c1.1 4.3 5.5 6.8 9.7 5.7l15.3-4.1c4.2-1.1 6.7-5.5 5.6-9.8l-14.1-53.3 55.9 32.7c3.8 2.2 8.6.9 10.8-2.9l7.9-13.9c2.2-3.8.9-8.7-2.9-10.9l-56.3-32.7z"/>
        </svg>
    )
}

export default Icon
