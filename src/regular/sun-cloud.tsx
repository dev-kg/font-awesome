import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M580.5 226c-18.7-39.6-58.6-66-104.5-66-42.4 0-80 23.4-100.2 58.2-49.4 5.7-87.8 47.7-87.8 98.6 0 54.7 44.5 99.2 99.2 99.2h153.6c54.7 0 99.2-44.5 99.2-99.2 0-40.6-24.3-75.5-59.5-90.8zm-39.7 142H387.2c-28.3 0-51.2-22.9-51.2-51.2s22.9-51.2 51.2-51.2c7.7 0 14.8 2.2 21.3 5.3 2.7-35.1 31.7-62.9 67.5-62.9 34.1 0 62 25.1 67 57.8 27.2 1.2 49 23.4 49 51 0 28.3-22.9 51.2-51.2 51.2zM256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-8.4 43.5c16-11.5 34.2-19.8 53.5-24.1l4.1-21.3c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9c-14.6-7.2-27.7-16.8-38.7-28.6L256 458zm0-258c17.1 0 32.3 7.9 42.6 20.1 11.8-10.8 25.8-19.3 41.1-25.3-19-25.8-49.3-42.8-83.7-42.8-57.3 0-104 46.7-104 104s46.7 104 104 104c2.6 0 5.1-.6 7.7-.8-4.6-13.4-7.7-27.5-7.7-42.4 0-1.6.4-3.2.4-4.8h-.4c-30.9 0-56-25.1-56-56s25.1-56 56-56z"/>
        </svg>
    )
}

export default Icon
