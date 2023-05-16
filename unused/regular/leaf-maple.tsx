import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M457.73 301.13c2.24-10.52 1.74-21.21-1.31-31.2L483.01 253c18.43-11.73 29.27-31.77 28.98-53.62-.29-21.85-11.64-41.6-30.38-52.85l-4.92-2.95 4.9-44.08a62.684 62.684 0 0 0-15.56-48.64C454.17 37.6 437.18 30 419.42 30c-2.29 0-38.23 4.4-51.03 5.28l-2.95-4.92C354.05 11.36 333.99 0 311.79 0c-21.51 0-41.25 10.83-52.8 28.98l-16.93 26.6a62.405 62.405 0 0 0-18.18-2.69c-4.36 0-8.72.46-13.02 1.37l-13.83-15.67c-11.92-14.18-29.29-22.28-47.88-22.28-18.6 0-35.96 8.1-47.88 22.29L87.44 54.26c-4.29-.91-8.66-1.37-13.02-1.37-19.04 0-36.82 8.55-48.78 23.46-11.93 14.87-16.39 34.08-12.26 52.71l19.78 95.89A62.54 62.54 0 0 0 0 280.2c0 25.07 14.89 47.65 37.93 57.52l71.69 30.73L7.03 471.03c-9.37 9.38-9.37 24.56 0 33.94C11.72 509.66 17.84 512 24 512s12.28-2.34 16.97-7.03l102.59-102.59 30.72 71.69A62.529 62.529 0 0 0 231.81 512c23.29 0 44.44-12.85 55.24-33.16l96.6 19.93c42.17 9.43 83.8-28.54 74.09-74.21 18.82-16.61 37.95-30.18 37.95-61.71 0-32.23-20.53-46.34-37.96-61.72zm-15.51 73.1l-43.18 38.11 11.62 21.64c2.36 9.43-4.92 18.13-14.09 18.13-2.21 0 8.38 2.03-137.99-28.16l-13.37 31.2c-2.53 5.89-7.96 8.84-13.4 8.84s-10.88-2.95-13.41-8.84l-38.29-89.33 124.86-124.86c9.37-9.38 9.37-24.56 0-33.94s-24.56-9.38-33.94 0L146.18 331.89 56.84 293.6c-11.78-5.05-11.78-21.76 0-26.81l31.2-13.37-27.8-134.76c-2.49-11.22 7.85-19.8 17.77-17.31l21.64 11.62 38.11-43.18c2.92-3.65 7.15-5.47 11.39-5.47s8.47 1.82 11.39 5.47l38.11 43.18 21.64-11.62c10.16-2.54 20.2 6.38 17.77 17.31l-13.95 54.54 75.37-118.45c2.87-4.51 7.59-6.75 12.3-6.75 4.84 0 9.68 2.37 12.51 7.08l18.8 31.33 74.69-8.3c14.07-1.59 16.52 12.34 16.1 16.11l-8.3 74.69 31.33 18.8c9.3 5.58 9.47 18.99.33 24.81L338.8 287.88c59.17-15.13 55.26-14.31 57.77-14.31 9.16 0 16.44 8.7 14.08 18.13l-11.62 21.64 43.18 38.11c7.3 5.85 7.3 16.94.01 22.78z"/>
        </svg>
    )
}

export default Icon
