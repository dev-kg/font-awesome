import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M561.5 399.9c-25.1-2.6-49.2-11.9-66.4-25.9-8.7-7.1-21.6-7-30.3.1-20.5 16.9-50 26.6-80.8 26.6-30.1 0-60.3-10-80.9-26.7-8.7-7.1-21.6-7-30.3.1-20.5 16.9-50 26.6-80.8 26.6-30.1 0-60.3-10-80.9-26.7-8.7-7.1-21.6-7-30.3.1-17.2 14.2-40.7 23.3-66.1 25.8-8.2.9-14.7 7.3-14.7 15.5v16.5c0 9.1 7.6 16.8 16.7 16 28.9-2.5 56.5-11.5 79.3-25.8 54.9 34.2 137.9 33.9 192 0 54.9 34.2 137.9 33.9 192 0 22.9 14.3 50.5 23.3 79.2 25.8 9.1.8 16.7-6.9 16.7-16v-16.7c.1-8.1-6.3-14.4-14.4-15.3zm0-304.7c-25.1-2.6-49.2-11.9-66.4-25.9-8.7-7.1-21.6-7-30.3.1C444.3 86.3 414.8 96 384 96c-30.1 0-60.3-10-80.9-26.7-8.7-7.1-21.6-7-30.3.1C252.3 86.3 222.8 96 192 96c-30.1 0-60.3-10-80.9-26.7-8.7-7.1-21.6-7-30.3.1-17.2 14.1-40.7 23.2-66.1 25.8C6.5 96 0 102.4 0 110.7v16.5c0 9.1 7.6 16.8 16.7 16 28.9-2.5 56.5-11.5 79.3-25.8 54.9 34.2 137.9 33.9 192 0 54.9 34.2 137.9 33.9 192 0 22.9 14.3 50.5 23.3 79.2 25.8 9.1.8 16.7-6.9 16.7-16v-16.7c.1-8.2-6.3-14.5-14.4-15.3zm0 152c-25.1-2.6-49.2-11.9-66.4-25.9-8.7-7.1-21.6-7-30.3.1-20.5 16.9-50 26.6-80.8 26.6-30.1 0-60.3-10-80.9-26.7-8.7-7.1-21.6-7-30.3.1-20.5 16.9-50 26.6-80.8 26.6-30.1 0-60.3-10-80.9-26.7-8.7-7.1-21.6-7-30.3.1-17.2 14.2-40.7 23.3-66.1 25.8C6.5 248 0 254.4 0 262.7v16.5c0 9.1 7.6 16.8 16.7 16 28.9-2.5 56.5-11.5 79.3-25.8 54.9 34.2 137.9 33.9 192 0 54.9 34.2 137.9 33.9 192 0 22.9 14.3 50.5 23.3 79.2 25.8 9.1.8 16.7-6.9 16.7-16v-16.7c.1-8.2-6.3-14.5-14.4-15.3z"/>
        </svg>
    )
}

export default Icon
