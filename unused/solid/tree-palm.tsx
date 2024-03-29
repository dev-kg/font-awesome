import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448.76 64c-39.43 0-75.06 11.74-103 30.5C327.14 40.17 265.37 0 191.24 0c-80.62 0-147.37 47.24-159 108.86C30.39 118.79 38.75 128 50 128h54l24-48 33.46 66.92c-3.53 3.07-7.28 5.69-10.66 9.07C93.8 213 80 293.6 115.37 345.38c5.7 8.34 18.12 8.94 26.07 1l146.13-146.14c10.72 104.75-11.42 215-25.85 272.15C256.64 492.52 272 512 292.8 512h55.13c15.75 0 29.67-11.37 31.71-27 14.79-113.47-11.57-236.34-26.41-293H488l24-48 24 48h54c11.25 0 19.61-9.21 17.74-19.14C596.13 111.24 529.38 64 448.76 64z"/>
        </svg>
    )
}

export default Icon
