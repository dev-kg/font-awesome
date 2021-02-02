import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 416 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M304 169.05V48h16c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v120.12C45.61 202.85 0 271.88 0 352c0 53.79 20.43 102.79 53.94 139.7 11.95 13.17 29.22 20.3 47 20.3h214.05c18.06 0 35.49-7.44 47.58-20.85 32.24-35.78 52.25-82.79 53.39-134.48 1.75-79.95-44.77-151.49-111.96-187.62zm22.91 289.96c-2.81 3.12-7.27 4.99-11.92 4.99H100.94c-4.58 0-8.86-1.71-11.45-4.56C62.73 429.97 48 391.81 48 352c0-59.36 33.05-113.52 86.25-141.35L160 197.17V48h96v149.74l25.27 13.59c53.96 29.02 87.99 85.65 86.7 144.29-.85 38.23-15.43 74.95-41.06 103.39zM208 256c-49.09 0-88.89 31.84-88.89 71.11 0 23.19 14.09 43.59 35.55 56.57v14.54c0 9.82 7.96 17.78 17.78 17.78h71.11c9.82 0 17.78-7.96 17.78-17.78v-14.54c21.47-12.98 35.55-33.38 35.55-56.57C296.89 287.84 257.1 256 208 256zm-35.55 88.89c-9.82 0-17.78-7.96-17.78-17.78s7.96-17.78 17.78-17.78 17.78 7.96 17.78 17.78c-.01 9.82-7.97 17.78-17.78 17.78zm71.11 0c-9.82 0-17.78-7.96-17.78-17.78s7.96-17.78 17.78-17.78 17.78 7.96 17.78 17.78-7.97 17.78-17.78 17.78z"/>
        </svg>
    )
}

export default Icon