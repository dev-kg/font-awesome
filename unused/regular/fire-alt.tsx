import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zM224 464c-97.05 0-176-81.83-176-182.4 0-45.37 44.3-133.21 120.16-214.09 22.34 23.36 42.82 47.72 60.34 71.86l36.62 50.44 39.41-48.29c5.83-7.15 11.85-14.15 18.01-20.97C368.89 177.96 400 250.42 400 281.6 400 382.17 321.05 464 224 464zm89.47-220.84l-51.3 58.52S181.75 198.98 175.69 192C133.27 242.86 112 272.62 112 306.41 112 374.23 163.37 416 226.5 416c25.26 0 48.62-7.87 67.58-21.13 43.08-30.14 53.18-88.58 29.26-134.24-2.95-5.62-6.24-11.48-9.87-17.47z"/>
        </svg>
    )
}

export default Icon
