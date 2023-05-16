import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M223.9 256c70.7 0 128-57.3 128-128S294.6 0 223.9 0C153.3 0 96 57.3 96 128s57.3 128 127.9 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96c.1-52.9 43.1-96 96-96zm406.7 332.8l-90.2-90.3c-12-12-28.3-18.7-45.2-18.7h-79.3c-17.7 0-32 14.3-32 32v79.3c0 17 6.7 33.3 18.7 45.3l90.2 90.3c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l92.5-92.5c12.6-12.6 12.6-32.9.1-45.4zM515.5 480l-90.2-90.3c-6-6-9.4-14.1-9.4-22.6v-79.3h79.3c8.5 0 16.6 3.3 22.6 9.4l90.2 90.3-92.5 92.5zm-51.6-160c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-64 160H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.3 0 70-16 89.6-16 13.6 0 26.5 2.8 38.4 7.6v-33.4c-12.2-3.7-25-6.2-38.4-6.2-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h351.9c15.6 0 29.3-7.6 38.1-19.1l-23.2-23.2c-2.4 6-8.1 10.3-14.9 10.3z"/>
        </svg>
    )
}

export default Icon
