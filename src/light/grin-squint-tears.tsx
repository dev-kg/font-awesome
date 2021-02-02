import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M402 206.1c-5.6.4-10.5 3.7-13.1 8.6-14.6 28.3-42.4 63.9-76.3 97.8-33.9 34-69.6 61.8-97.8 76.3-5 2.5-8.3 7.5-8.7 13.1-.4 5.6 2.2 10.9 6.7 14.2 14.3 10.2 32.1 14.7 51 14.7 41 0 87.4-21 116.7-50.4 42.9-42.8 68-122.2 35.7-167.7-3.3-4.5-9-7.1-14.2-6.6zm-44.2 151.7c-24.8 24.7-64.9 43.1-98.2 41.1 24.1-16.5 50.4-38.6 75.5-63.8 25.1-25.1 47.3-51.4 63.8-75.5 1.8 32.2-16.3 73.5-41.1 98.2zM207.9 236.2c-3-3-7.3-4.2-11.4-3.2L106 255.7c-5.7 1.4-9.5 6.7-9.1 12.6.5 5.8 5.1 10.5 10.9 11l52.3 4.8 4.8 52.3c.5 5.8 5.2 10.4 11 10.9 8.6.4 11.9-6.2 12.6-9.1l22.6-90.5c1-4.2-.2-8.5-3.2-11.5zm39.7-25.1l90.5-22.6c5.7-1.4 9.5-6.7 9.1-12.6-.5-5.8-5.1-10.5-10.9-11l-52.3-4.8-4.8-52.3c-.5-5.8-5.2-10.4-11-10.9-5.7-.1-11.2 3.4-12.6 9.1L233 196.5c-1 4.1.2 8.4 3.2 11.4 5 5 11.3 3.2 11.4 3.2zm243.6-86.5c28.1-28.2 27.7-74.3-.9-102.9-29.2-29.2-75.3-28.3-102.9-.8-4.5 4.5-8.5 10.9-12.1 18.5C338.2 18.9 297.2 8 256 8 192.5 8 129 32.2 80.6 80.6c-79.9 79.9-93 200.4-41 294.6-8 3.8-14.4 7.8-18.7 12.2-28.1 28.2-27.7 74.3.9 102.9 28.5 28.5 74.5 29.2 102.9.8 4.5-4.5 8.5-10.9 12.1-18.5 37 20.5 78 31.4 119.2 31.4 63.5 0 127-24.2 175.4-72.6 79.9-79.9 93-200.3 41-294.6 8-3.8 14.4-7.9 18.8-12.2zM410 43.5c7.4-7.4 17.4-11.5 28-11.5h.4c11 .1 21.3 4.5 29.2 12.4 16.1 16.1 16.5 42 .9 57.6-6.6 6.6-32.3 16.8-83.3 24.8 8-51 18.2-76.7 24.8-83.3zm-308 425c-15.7 15.7-41.5 15.3-57.6-.8s-16.5-42-.9-57.6c6.6-6.6 32.3-16.8 83.3-24.8-8 50.8-18.2 76.6-24.8 83.2zm306.8-59.8C368 449.5 313.7 472 256 472c-38.8 0-75.8-10.8-108.4-29.9 5.4-19.7 9.4-41.6 12.2-60.9 1.2-8-1.5-15.9-7.2-21.7-5.8-5.8-13.7-8.4-21.7-7.3-23.8 3.4-43.9 7.5-60.6 12-48.1-82.7-37.7-190.3 33-261C144 62.4 198.3 40 256 40c38.8 0 75.8 10.8 108.4 29.9-5.4 19.7-9.4 41.6-12.2 60.9-1.2 8 1.5 15.9 7.2 21.7 4.9 4.9 11.3 7.5 18 7.5 1.2 0 2.4-.1 3.7-.3 23.8-3.4 43.9-7.5 60.6-12 48.2 82.6 37.8 190.3-32.9 261z"/>
        </svg>
    )
}

export default Icon
