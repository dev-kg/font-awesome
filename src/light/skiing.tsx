import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M507.3 465.7c-6.2-6.3-16.4-6.3-22.6 0-14.4 14.5-36.6 18.4-54.2 10.3l-130.1-69.7c4.4-3.2 8.4-7 11.5-11.6l.5-.8.5-.8 40.3-68.4c16.3-25.2 12.8-58.7-8.5-80l-49.5-49.5L426.5 267c33.6 16.7 58.1-9 64.4-21.4 11.8-23.7 2.2-52.6-21.5-64.4L423.3 158l-10.1-30.2c1 0 1.9.3 2.8.3 35.3 0 64-28.7 64-64S451.3 0 416 0c-34.3 0-62.2 27.2-63.7 61.1-15-3.8-31.4-4.4-49.6 2.9l-83.4 33.4c-5.1 2-9.7 4.9-14.2 7.8l-40-22.9c1.1-15.2-6.7-30.2-21.1-37.6l-11.1 21.8-34.6-7c-5.3-1.1-8.5 5.6-4.5 9.1l26.1 22.9c.1.1.1.2.1.3l-11.5 22.4c13.7 7 29.5 4.8 41-3.8L182 129c-5.2 8.1-9.5 16.9-11.5 26.7-5.4 26.4 2.7 53.6 21.8 72.6l66.9 66.9-27.8 47.2c-4.6 7.2-6.8 15.2-7.2 23.1L23.6 257.9c-7.7-4.1-17.5-1.3-21.7 6.5-4.2 7.8-1.2 17.5 6.5 21.7l407.8 218.5c10.8 5 22.3 7.4 33.7 7.4 21.1 0 41.9-8.2 57.3-23.7 6.4-6.2 6.4-16.4.1-22.6zM416 32c17.7 0 32 14.4 32 32s-14.3 32-32 32-32-14.4-32-32 14.3-32 32-32zM314.6 93.8c32.8-13.1 57.4 11.6 63.3 29.4l19.2 57.5 58.1 29c19 9.5 4.6 38-14.3 28.6l-28.3-14.1-39.8-22.8c-2.6-3.1-4.7-6.6-6-10.6l-18.1-54.4-50.1 22.4-60.2-34.5 76.2-30.5zm-55.9 265.4l40.7-69.1-84.4-84.5c-11.4-11.4-16.3-27.7-13.1-43.6 1.3-6.4 4.1-12.1 7.7-17.3l52.7 30.2-22.7 10.1 82.4 82.4c10.8 10.8 12.4 27.8 4 40.4l-40.7 69.1c-11.9 17.7-38.3-.2-26.6-17.7z"/>
        </svg>
    )
}

export default Icon
