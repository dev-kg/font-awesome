import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 416c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0-64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm80-240c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.17 16 16 16zm-96 0c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm16 176c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm64 128c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0-128c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0 64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm-32-224c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm152.61-73.54C335.13 18.15 279.56 0 224 0 168.43 0 112.87 18.15 71.39 54.46 7.36 110.5-31.01 224.44 32.63 416 64.53 512 224 512 224 512s159.47 0 191.37-96c63.64-191.56 25.27-305.5-38.76-361.54zm-6.8 346.41C352.86 451.91 256.36 463.84 224 464c-26.37 0-128.4-10.71-145.81-63.13-47.21-142.08-38.16-255.17 24.82-310.3C133.92 63.52 178.02 48 224 48c45.98 0 90.08 15.52 120.99 42.57 62.98 55.13 72.03 168.22 24.82 310.3zM200 208c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32 0 35.35 28.65 64 64 64s64-28.65 64-64zm80-32c-17.67 0-32 14.33-32 32 0 35.35 28.65 64 64 64s64-28.65 64-64c0-17.67-14.33-32-32-32h-64z"/>
        </svg>
    )
}

export default Icon
