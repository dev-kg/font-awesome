import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M87.2 353.7c-7.9-3.9-17.5-.7-21.5 7.2l-64 128c-3.9 7.9-.8 17.5 7.2 21.5 2.3 1.1 4.8 1.7 7.2 1.7 5.8 0 11.5-3.2 14.3-8.8l64-128c3.8-8.1.7-17.7-7.2-21.6zm256 0c-7.9-3.9-17.5-.7-21.5 7.2l-64 128c-3.9 7.9-.8 17.5 7.2 21.5 2.3 1.1 4.8 1.7 7.2 1.7 5.8 0 11.5-3.2 14.3-8.8l64-128c3.8-8.1.7-17.7-7.2-21.6zm151.7 35.4l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V360c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zm-256 0l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V360c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zM512 216c0-54.8-42.6-99.8-96.3-103.7C411.8 67.4 373.9 32 328 32c-17.8 0-34.8 5.3-49.2 15.2C256.3 17.7 221.5 0 184 0 117.8 0 64 53.8 64 120v.4c-38.3 16-64 53.5-64 95.6 0 57.3 46.7 104 104 104h304c57.3 0 104-46.7 104-104zm-480 0c0-32.3 21.9-60.7 53.3-69.2l13.3-3.6-2-17.2c-.3-2-.6-4-.6-6 0-48.5 39.5-88 88-88 32.2 0 61.8 17.9 77.2 46.8l10.6 19.8L287 82.1C297.9 70.4 312.4 64 328 64c30.9 0 56 25.1 56 56 0 1.6-.3 3.1-.8 6.9l-2.5 20 23.5-2.4c1.2-.2 2.5-.4 3.8-.4 39.7 0 72 32.3 72 72s-32.3 72-72 72H104c-39.7-.1-72-32.4-72-72.1z"/>
        </svg>
    )
}

export default Icon
