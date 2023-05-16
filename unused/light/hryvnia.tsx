import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M376 224c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-96.54l12.73-12.59c16.23-16.05 25.53-38.73 25.53-62.22 0-46.97-36.14-85.19-80.58-85.19h-84.42c-22.05 0-43.2 7.77-59.56 21.84l-33.51 28.8a8.008 8.008 0 0 0-.86 11.28l10.42 12.14c2.88 3.35 7.93 3.74 11.28.86l33.52-28.81C124.59 69.02 138.33 64 152.72 64h84.42c26.78 0 48.58 23.86 48.58 53.19 0 15-5.84 29.39-16.03 39.47L233.96 192H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h193.6l-64.71 64H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h96.54l-12.73 12.59c-16.23 16.05-25.53 38.73-25.53 62.22 0 46.97 36.14 85.19 80.58 85.19h84.42c22.05 0 43.2-7.77 59.56-21.84l33.52-28.8a8.008 8.008 0 0 0 .86-11.28l-10.42-12.14a8.01 8.01 0 0 0-11.29-.86l-33.52 28.81c-10.58 9.09-24.31 14.11-38.7 14.11h-84.42c-26.78 0-48.58-23.86-48.58-53.19 0-15 5.84-29.39 16.03-39.47L150.04 320H376c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H182.4l64.71-64H376z"/>
        </svg>
    )
}

export default Icon
