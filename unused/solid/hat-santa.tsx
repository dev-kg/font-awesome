import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 384H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm-96-192l71.7 19.5c2.3-4.1 4.9-8 8.2-11.4.4-14.5 6.2-28.6 17-39.4 2.2-2.2 4.7-4.1 7.2-5.9L435 92.1C402.6 54 355.2 32 305.2 32c-68.6 0-130.4 41.2-156.8 104.5L58.7 352h393.9L384 192zm256 48c0-12.1-8.2-21.9-19.2-25.2 5.5-10.1 4.4-22.8-4.2-31.4s-21.3-9.7-31.4-4.2c-3.3-11-13.1-19.2-25.2-19.2s-21.9 8.2-25.2 19.2c-10.1-5.5-22.8-4.4-31.4 4.2s-9.7 21.3-4.2 31.4c-11 3.3-19.2 13.1-19.2 25.2s8.2 21.9 19.2 25.2c-5.5 10.1-4.4 22.8 4.2 31.4 5.2 5.2 12 7.8 18.9 7.8 4.4 0 8.6-1.5 12.5-3.6 3.3 11 13.1 19.2 25.2 19.2s21.9-8.2 25.2-19.2c4 2.1 8.2 3.6 12.5 3.6 6.8 0 13.6-2.6 18.9-7.8 8.6-8.6 9.7-21.3 4.2-31.4 11-3.3 19.2-13.1 19.2-25.2z"/>
        </svg>
    )
}

export default Icon
