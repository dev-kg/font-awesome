import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M615.8 364.9l-14.3-11.2c-3.4-2.8-8.5-2.2-11.2 1.2l-10 12.5c-2.8 3.4-2.2 8.5 1.2 11.2l13.5 10.5c6.3 5.1 11.1 12.1 12.5 20 3.8 20.6-12.1 38.7-32.1 38.7H448v-64h10c65.1 0 118-52.9 118-118V128.5h24c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H480c-17.7 0-32 14.3-32 32V177c0 28.1-29.4 39.2-42.1 42.7-48.1 13.3-137-3.8-184.2-83.1C169.5 48.7 122 32 52.7 32H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h24v168c0 64 39.9 118.6 96 141v75H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h532c35.5 0 66-27.3 67.9-60.8 1.2-21.2-7.6-41-24.1-54.3zM64 232V64.4c53.4 1.8 88.2 17.9 130.3 88.5C236.5 224.1 309.8 256 372 256c15 0 29.3-1.8 42.4-5.5 41.1-11.3 65.6-38.8 65.6-73.5v-48.5h64V266c0 47.4-38.6 86-86 86H184c-66.2 0-120-53.8-120-120zm96 216v-66.4c7.9 1.3 15.8 2.4 24 2.4h232v64H160z"/>
        </svg>
    )
}

export default Icon
