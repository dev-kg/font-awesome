import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M319.4 320L224 415.39 128.6 320C57.1 323.1 0 381.6 0 453.79A58.21 58.21 0 0 0 58.21 512h331.58A58.21 58.21 0 0 0 448 453.79C448 381.6 390.9 323.1 319.4 320zM58.21 464A10.22 10.22 0 0 1 48 453.79a85.84 85.84 0 0 1 63.61-82.9L204.72 464zm331.58 0H243.28l93.11-93.11a85.84 85.84 0 0 1 63.61 82.9A10.22 10.22 0 0 1 389.79 464zm-332-176h82.37c22.51 19.68 51.62 32 83.86 32s61.35-12.32 83.86-32h82.37a16 16 0 0 0 14.28-23.18c-15.23-29.86-31.28-62.24-42.16-95.56C354.79 146.07 352 121.59 352 97.2V59.09a16 16 0 0 0-10.39-15L224 0 106.37 44.11A16 16 0 0 0 96 59.09V97.2c0 24.39-2.75 48.87-10.32 72.06C74.79 202.58 58.73 235 43.5 264.82A16 16 0 0 0 57.78 288zM144 78l80-30 80 30v58h-66.65v-13.33H259a5 5 0 0 0 5-5V101a5 5 0 0 0-5-5h-21.65V74.33a5 5 0 0 0-5-5h-16.67a5 5 0 0 0-5 5V96H189a5 5 0 0 0-5 5v16.67a5 5 0 0 0 5 5h21.67V136H144zm0 98h160v16a80 80 0 0 1-160 0z"/>
        </svg>
    )
}

export default Icon
