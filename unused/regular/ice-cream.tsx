import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M380.91 129.3C366.57 55.65 301.85 0 224 0S81.43 55.65 67.09 129.3A79.87 79.87 0 0 0 80 288h.94l92.81 192.13A55.56 55.56 0 0 0 224 512c21.47 0 40.72-12.2 50.25-31.86L367.06 288h.94a79.87 79.87 0 0 0 12.91-158.7zM231 459.25c-3.81 7.87-10.25 7.87-14.06 0L134.25 288h179.5zM368 240H80a32 32 0 0 1-32-32 31.72 31.72 0 0 1 26.83-31.33l33-5.39 6.39-32.82a111.85 111.85 0 0 1 219.58 0l6.39 32.82 33 5.39A31.72 31.72 0 0 1 400 208a32 32 0 0 1-32 32z"/>
        </svg>
    )
}

export default Icon
