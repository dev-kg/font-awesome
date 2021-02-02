import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M472.5 0c-7 0-14.3 1.5-21.2 4.6-50.5 22.7-87.8 30.3-119.1 30.3C266.1 34.9 227.7.4 151.4.4 119.8.4 81.2 6.9 32 23.6V16c0-8.8-7.2-16-16-16S0 7.2 0 16v488c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V403.6c44.2-15.8 81.6-22 114.5-22 81.2 0 137.8 34.4 219.1 34.4 35.3 0 75.1-6.5 123.7-25 14-5.4 22.8-17.9 22.8-31.2V33.4C512 13 493.4 0 472.5 0zm-107 384c-75.6 0-133-34.4-219.1-34.4-36.7 0-74.4 6.5-114.5 19.8V57.2c46-16.7 85.3-24.8 119.4-24.8 69.5 0 108.4 34.5 180.8 34.5 39.8 0 81.8-10.5 132.1-33.1 9.4-4.2 15.7-.5 15.7 5.6v320.1c-.8 2.5-58.8 24.5-114.4 24.5z"/>
        </svg>
    )
}

export default Icon
