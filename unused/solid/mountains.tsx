import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M635.73 406.91l-194.04-297.6c-11.57-17.75-39.8-17.75-51.37 0l-32.84 50.37 67.68 105.68c2.38 3.72 1.3 8.67-2.42 11.05l-13.46 8.62c-3.72 2.38-8.67 1.3-11.05-2.42l-59.9-93.54-70.81-110.55c-12.4-19.36-42.64-19.36-55.04 0L4.58 403.18C-7.99 422.81 6.81 448 30.92 448h580.22c22.5 0 36.32-23.09 24.59-41.09z"/>
        </svg>
    )
}

export default Icon