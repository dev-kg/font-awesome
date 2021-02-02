import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M277.6 335.3h-57.7l17.3-65.2c2-7.6-3.7-15.2-11.6-15.2h-68c-6 0-11.1 4.5-11.9 10.5l-16 120.5c-1 7.2 4.6 13.6 11.9 13.6H201l-23 97.6c-1.8 7.6 4 14.8 11.7 14.8 4.2 0 8.2-2.2 10.4-6l88-152.6c4.5-7.9-1.2-18-10.5-18zm85.8-151.2c-12.1-36.9-46.7-63.6-87.4-63.6-3.1 0-6.1.2-9.1.5-21.6-15.9-47.6-24.6-74.9-24.6-52.4 0-97.6 31.4-117.2 77.5C31.4 188 0 228.9 0 277.1c0 56.3 43.2 102.2 97.9 107.4.1-.9-.1-1.9.1-2.8l5.9-44.8c-31.2-2.1-56-27.9-56-59.8 0-33.3 26.9-60.2 60-60.2 1.6 0 3.2.4 4.8.5 3.8-40.8 37.6-72.8 79.2-72.8 25.2 0 47.4 11.9 62.1 30.2 6.5-3.8 13.9-6.1 21.9-6.1 24.3 0 44 19.8 44 44.2 0 1.8-.3 3.5-.5 5.2 27.6 5.4 48.5 29.8 48.5 59.1 0 29.1-20.5 53.4-47.9 59 2.9 11.1 1.4 23.2-4.4 33.4l-9.2 16h1.5c59.6 0 108-48.6 108-108.4.1-39-20.7-74-52.5-93.1zm274.4 53.5c-3.8-7.9-11.8-13.1-20.5-13.1h-1.5l-2.8.5c-6.1 1.2-12.3 1.8-18.4 1.8-53.2 0-96.5-43.6-96.5-97.2 0-34.9 18.8-67.3 49-84.5 8.4-4.8 12.8-14.1 11.2-23.7-1.6-9.6-8.8-16.9-18.3-18.6C530.3.9 520.5 0 510.7 0c-73.6 0-135.1 50.5-153.6 118.7 13.8 11.9 25 26.9 32.6 44.3.6.4 1 .9 1.6 1.3 0-1.2-.4-2.4-.4-3.6 0-59.1 42.6-108.4 98.6-118.6-19.9 24.3-31.3 55.1-31.3 87.5 0 67.6 48.8 124 112.9 135.3-18 10.6-38.7 16.3-60.2 16.3-23.4 0-45.1-7-63.6-18.8.5 4.9.9 9.8.9 14.7 0 10.1-1.3 19.9-3.3 29.4 20.2 9.3 42.4 14.8 66.1 14.8 48.4 0 93.6-21.7 124.2-59.5 5.3-6.9 6.4-16.2 2.6-24.2z"/>
        </svg>
    )
}

export default Icon
