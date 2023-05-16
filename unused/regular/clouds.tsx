import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M538.7 296.2C525.2 253.8 486 224 440 224c-13.5 0-26.8 2.6-39.2 7.7-1.8-2.1-4.1-3.6-6-5.5 17-19 26.5-43.6 26.5-68.9 0-57.3-46.7-104-104-104-7 0-13.9.7-20.7 2.1C275.5 21.6 238 0 197.3 0c-51.2 0-96 33.9-111.3 81.6C37.2 90.1 0 132.8 0 184c0 57.3 46.7 104 104 104h90.8c-1.2 5.7-2.3 11.4-2.7 17.4-38.6 17-64.2 55.1-64.2 98.6 0 59.5 48.4 108 108 108h296c59.6 0 108-48.5 108-108 .1-57.3-44.8-104.3-101.2-107.8zM104 240c-30.9 0-56-25.1-56-56 0-30.4 24.4-55.3 54.7-56l23.4.8 3-21.3c4.8-33.9 34.2-59.5 68.2-59.5 29 0 54.3 17.7 64.6 45l9 24 23.3-10.6c7.5-3.4 15.2-5.1 23-5.1 30.9 0 56 25.1 56 56 0 15.8-6.7 30.5-18.8 41.4l-1.3 1.2c-13-4.8-26.8-7.9-41.3-7.9-39.1 0-73.8 18.9-95.7 48H104zm428 224H236c-33.1 0-60-26.9-60-60 0-28 19.1-52 46.4-58.3l20.8-4.8-2.8-24.9c-.2-1.3-.4-2.6-.4-4 0-39.7 32.3-72 72-72 25.2 0 48.2 13.1 61.4 35.1l13.3 22.1 21.1-14.9c9.6-6.8 20.7-10.3 32.2-10.3 28.6 0 52.4 21.7 55.3 50.4l2.2 21.6H532c33.1 0 60 26.9 60 60s-26.9 60-60 60z"/>
        </svg>
    )
}

export default Icon
