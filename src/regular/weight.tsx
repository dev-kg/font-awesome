import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 64h-64.81C353.95 25.38 308.07 0 256 0s-97.95 25.38-127.19 64H64C28.71 64 0 92.71 0 128v320c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V128c0-35.29-28.71-64-64-64zM256 48c61.86 0 112 50.14 112 112s-50.14 112-112 112-112-50.14-112-112S194.14 48 256 48zm208 400c0 8.84-7.16 16-16 16H64c-8.84 0-16-7.16-16-16V128c0-8.84 7.16-16 16-16h40.17C99.33 127.25 96 143.17 96 160c0 88.22 71.78 160 160 160s160-71.78 160-160c0-16.83-3.33-32.75-8.17-48H448c8.84 0 16 7.16 16 16v320zM256 240c17.67 0 32-14.33 32-32 0-8.06-3.25-15.22-8.18-20.85l23.36-70.09c6.66-20.08-23.63-30.2-30.38-10.12l-23.47 70.41C234.97 180.49 224 192.69 224 208c0 17.67 14.33 32 32 32z"/>
        </svg>
    )
}

export default Icon
