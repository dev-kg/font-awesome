import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M298.8 247.1c6.3 6.5 13.8 8.9 21.2 8.9 7.3.1 14.9-2.4 21.2-8.9l98.7-102c30.1-31.1 36.4-90.1-6-126.3C395.5-14 344.8 1 320 26.6 295.2 1 244.5-14 206.2 18.8c-42.4 36.2-36.1 95.2-6 126.3l98.6 102zM236.5 55.6c14.1-12 36.1-9 49.3 4.7L320 95.6l34.1-35.4c13.2-13.7 35.3-16.7 49.3-4.7 18.9 16.1 15.7 42.4 2.7 55.9L320 200.5l-86.1-89.1c-13.1-13.4-16.2-39.7 2.6-55.8zm336.4 40.6C531 93.4 496 126.7 496 168c0 0-.1 39-.2 76-29.8-19.8-72.5-15.5-96.8 16l-71.8 93.3c-2.7 3.5-5 7.4-7.2 11.2-2.3-3.8-4.5-7.7-7.2-11.2L241 260c-24.6-31.9-67.4-35.5-96.8-16-.1-37.1-.2-76-.2-76 0-41.3-35-74.6-76.9-71.8C28.8 98.7 0 132.2 0 170.5V362c0 25.3 8.7 50.2 24.5 70l58.7 74c3 3.8 7.7 6.1 12.5 6.1H112c8.8 0 16-7.2 16-16 0-7.5-2.6-14.8-7.2-20.6L62 402c-9.1-11.3-14-25.4-14-40V168.9c0-11.6 7.8-22.3 19.2-24.4 15.3-3 28.8 8.7 28.8 23.5 0 0 .2 101 .3 132.6 0 7.6 2.8 14.8 7.8 20.6l76.5 92.6c17.7 21.4 52.2-3.3 33.9-28.2l-49.5-67c-8.1-10.5-6.1-25.6 4.4-33.7 10.8-8.4 25.8-5.8 33.7 4.4l71.7 93.2c8.6 11.2 13.3 24.9 13.3 39V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-74.4c0-14.1 4.7-27.8 13.3-39l71.7-93.2c7.9-10.2 22.9-12.7 33.7-4.4 10.5 8.1 12.5 23.1 4.4 33.7l-49.5 67c-18.4 24.9 16.2 49.6 33.9 28.2l76.5-92.6c5-5.8 7.7-13 7.8-20.6-.1-31.7.1-132.7.1-132.7 0-14.8 13.4-26.5 28.8-23.5 11.4 2.2 19.2 12.8 19.2 24.4V362c0 14.5-4.9 28.6-14 39.9l-58.7 73.4c-4.7 5.9-7.2 13.1-7.2 20.6 0 8.8 7.2 16 16 16h16.3c4.9 0 9.5-2.2 12.5-6.1l58.7-74c15.8-19.8 24.5-44.6 24.5-70V170.5c-.1-38.3-28.9-71.8-67.2-74.3z"/>
        </svg>
    )
}

export default Icon
