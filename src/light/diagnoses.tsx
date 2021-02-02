import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M160 256c0 .5-.1 1-.1 1.4 46.7-18.1 103-33.4 160.1-33.4 44.9 0 89 9.6 128.6 22.4-1.3-9.8-.4-20.1 6.6-31.5C413.7 201.7 367.4 192 320 192c-61.1 0-120.5 16-170 35 6.2 8.1 10 18 10 29zm336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm88.6 72.4l-17.8 26.7c-5 7.5-14.5 9-21.4 4.9-22.4-13.2-71.7-39.7-129.4-56.7V444c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-95.8c37.9 14.9 67.8 31.5 81.2 39.4 20.4 12 49.1 8.1 64.3-14.7l17.8-26.7c13.1-19.7 11.4-51.8-15.1-67.7-12.4-7.4-30.9-17.7-53.2-28.5-2.3 11-8.6 20.5-17.1 27.3 23.2 11.1 42.2 21.6 53.9 28.6 7.8 4.7 9.9 14.9 4.8 22.5zM416 96c0-52.9-43.1-96-96-96s-96 43.1-96 96 43.1 96 96 96 96-43.1 96-96zm-96 64c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zM46.5 372.9c15 22.6 43.7 26.9 64.3 14.7 13.3-7.9 43.3-24.6 81.2-39.4V444c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V303.4c-57.7 16.9-107.1 43.5-129.4 56.7-7 4.1-16.4 2.5-21.4-4.9l-17.8-26.7c-5.1-7.6-2.9-17.8 4.9-22.5 5.7-3.4 13.4-7.8 22.1-12.5-8.5-6.8-14.8-16.2-17.2-27.1-8.2 4.5-15.5 8.7-21.3 12.2-26.4 15.8-28.3 47.8-15.1 67.7zM632 480H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 272c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm144 32c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zm96 96c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16z"/>
        </svg>
    )
}

export default Icon
