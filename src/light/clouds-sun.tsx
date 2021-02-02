import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M640 258.3c0-51.6-40.2-93.5-89.6-93.5h-.5c-16.6-40.7-55.3-69.2-99.4-69.2-46.4 0-86.2 30.1-101.5 74.2-25.3 8.8-45.2 29.1-54.7 54.9-48.3 5-86.3 45.5-86.3 95.1 0 1.8.1 3.7.2 5.6-38 13.2-64.2 49.2-64.2 90.5 0 53 43.1 96.1 96 96.1h240c52.9 0 96-43.1 96-96.1 0-24.7-9.4-47.1-24.8-64.1 49-.5 88.8-42.2 88.8-93.5zM480 480H240c-35.3 0-64-28.7-64-64.1 0-31 22.2-57.5 52.8-62.9l16.5-2.9-3.6-16.3c-1.1-5-1.7-9.6-1.7-13.9 0-35.3 28.7-64.1 64-64.1 24.6 0 47.2 14.5 57.8 37l8.6 18.4 15.8-12.7c8.8-7 19.1-10.7 29.8-10.7 26.5 0 48 21.5 48 48v16h16c35.3 0 64 28.7 64 64.1S515.3 480 480 480zm70.4-160.2h-56.1c-7.5-36.5-39.7-64.1-78.3-64.1-12 0-23.7 2.7-34.4 7.9-13-18-32-30.8-53.2-36.5 9.6-17.3 26.7-29.1 46.7-30.1 5.6-39.3 37-69.4 75.3-69.4 40.3 0 72.9 33.3 75.9 75.5 7.4-3.7 15.3-6.3 24-6.3 31.8 0 57.6 27.5 57.6 61.5.1 34-25.7 61.5-57.5 61.5zm-384.9-7.7c-2.1-1-4.3-1.7-6.6-1.7-1 0-2.1.1-3.1.3l-63.2 12.5 12.5-63.2c1.2-6.3-1.4-12.8-6.8-16.5l-53.5-35.8 53.5-35.8c5.4-3.6 8-10.1 6.8-16.5L92.6 92.2l63.2 12.5c6.5 1.3 12.8-1.5 16.4-6.8L208 44.4 243.8 98c3.6 5.3 9.9 8.1 16.4 6.8l63.2-12.5-12.1 61.2c4.2-2.8 8.4-5.5 13-7.8 7.3-15.7 17.5-29.4 29.3-41.2l5.8-29.5c1-5.2-.6-10.6-4.4-14.4-3.8-3.8-9-5.5-14.4-4.4l-76.2 15.1-43.1-64.6c-6-8.9-20.6-8.9-26.6 0l-43.2 64.6-76.2-15.2c-5.3-1.1-10.6.7-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4l15.1 76.3-64.5 43.2c-4.4 3-7.1 8-7.1 13.3C0 213 2.7 218 7.1 221l64.5 43.2-15.1 76.2c-1 5.3.6 10.7 4.4 14.4s9.2 5.4 14.4 4.4l56.3-11.1c8.8-14 20.3-26.3 33.9-36zM208 149.8c28.8 0 52.5 21.2 56.9 48.8 2.4-.8 4.8-1.8 7.3-2.4 5-9 11.2-17.1 18-24.5-13.9-31.7-45.5-53.9-82.2-53.9-49.5 0-89.8 40.3-89.8 89.9 0 39.5 25.7 72.7 61.1 84.8 2.3-10.6 5.9-20.6 10.6-30.1-23-7.6-39.8-29.1-39.8-54.7.1-31.9 26-57.9 57.9-57.9z"/>
        </svg>
    )
}

export default Icon
