import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M454.06 171.37c-4.44-4.43-9.24-8.25-14.25-11.64 14.69-5.26 28.28-12.24 39.23-22.42 26.58-28.86 34.78-75.04 32.64-120.09-.44-9.23-8.03-16.47-17.26-16.91-4.28-.19-8.76-.31-13.4-.31-34.31 0-76.99 6.42-105.77 33.15-10.84 10.88-18.32 24.1-23.46 37.97-3.19-4.56-6.61-9.01-10.68-13.07l-34.45-34.43c-6.24-6.24-16.37-6.25-22.62 0L250.33 57.3c-17.5 17.49-26.49 40.07-27.66 62.97l-6.34-6.33c-6.24-6.24-16.37-6.25-22.62 0L160 147.63c-17.58 17.57-26.59 40.28-27.69 63.3l-6.48-6.48c-6.24-6.24-16.37-6.25-22.62 0L69.5 238.14c-37.51 37.49-37.51 98.3 0 135.8l22.96 22.95-87.76 87.8c-6.25 6.25-6.25 16.38 0 22.62C7.81 510.44 11.91 512 16 512s8.19-1.56 11.31-4.69l87.55-87.59 22.84 22.83c18.74 18.73 43.3 28.1 67.87 28.1s49.12-9.37 67.87-28.1l33.77-33.75c6.25-6.25 6.25-16.38 0-22.63l-6.47-6.47c22.98-1.11 45.66-10.11 63.21-27.66l33.77-33.75c6.25-6.25 6.25-16.38 0-22.63l-6.33-6.32c22.87-1.19 45.42-10.16 62.89-27.62l33.77-33.75c6.25-6.25 6.25-16.38 0-22.63l-33.99-33.97zM397.03 56.59c21.59-20.06 56.82-24.48 82.96-24.59-.21 36.03-8.62 65.65-23.67 82.71-21.99 19.63-56.99 23.78-82.66 23.78h-.38c-.34-25.94 3.95-61.99 23.75-81.9zM272.95 79.94l22.4-22.39 23.14 23.12c24.38 24.37 25.42 64.13.69 89.69-.29.25-.66.34-.93.62l-22.38 22.39-22.92-22.91c-25.01-24.99-25.04-65.49 0-90.52zm-90.33 90.33l22.4-22.39 23.14 23.13c13.62 13.62 33.75 53.21 1.95 88.16l-24.55 24.56-22.94-22.93c-25.02-25-25.04-65.5 0-90.53zM92.11 351.31c-25.02-25-25.04-65.5 0-90.53l22.4-22.39 23.14 23.13c23.78 23.76 25.63 62.42 1.75 88.4l-24.33 24.34-22.96-22.95zm158.7 68.61c-25 24.98-65.46 25.01-90.49 0l-22.66-22.65 22.45-22.43c24.99-24.98 65.46-25.02 90.49 0l22.66 22.65-22.45 22.43zm90.51-90.51c-25 24.98-65.46 25.01-90.49 0l-22.66-22.65 22.45-22.43c24.99-24.98 65.46-25.02 90.49 0l22.66 22.65-22.45 22.43zm90.33-90.33c-25 24.98-65.46 25.01-90.49 0l-22.66-22.65L340.95 194c24.99-24.98 65.46-25.02 90.49 0l22.66 22.65-22.45 22.43z"/>
        </svg>
    )
}

export default Icon
