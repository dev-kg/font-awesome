import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M105.368 246.631l160.002 159.98c20.02 20.01 54.63 5.98 54.63-22.63v-71.15c121.58 4.36 148.9 28.23 121.2 126.42-8.35 29.59 25.5 52.21 49.69 34.51 51.57-37.71 85.11-90.99 85.11-155.97 0-152.9-140.5-177.23-256-181.07v-72.69c0-28.59-34.59-42.67-54.63-22.63l-160.002 159.97c-12.491 12.5-12.491 32.76 0 45.26zM128 224.001l160-160v104.1c130.165 1.345 256 18.265 256 149.69 0 65.1-40.49 107.16-72 130.21 40.979-145.267-38.329-166.574-184-167.9v103.9l-160-160zM9.372 201.373l160-159.974c13.467-13.467 33.495-11.506 45.189-.105L32 224.001l182.564 182.712c-11.699 11.403-31.738 13.347-45.191-.106l-160-159.978c-12.497-12.498-12.497-32.759-.001-45.256z"/>
        </svg>
    )
}

export default Icon
