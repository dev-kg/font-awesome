import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 64C132.3 64 32 164.29 32 288a222.7 222.7 0 0 0 44.79 134l-40.1 40.09a16 16 0 0 0 0 22.63l22.62 22.62a16 16 0 0 0 22.63 0L122 467.22a222.82 222.82 0 0 0 268 0l40.1 40.09a16 16 0 0 0 22.62 0l22.63-22.62a16 16 0 0 0 0-22.63L435.25 422A222.69 222.69 0 0 0 480 288c0-123.71-100.26-224-224-224zm0 400a176 176 0 1 1 176-176 176 176 0 0 1-176 176zM96 0A96 96 0 0 0 0 96a94.81 94.81 0 0 0 15.3 51.26L161.2 25.68A95.63 95.63 0 0 0 96 0zm320 0a95.66 95.66 0 0 0-65.18 25.66l145.89 121.57A94.85 94.85 0 0 0 512 96a96 96 0 0 0-96-96zM256 352a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm22.3-192h-44.6a16.06 16.06 0 0 0-15.9 17.6l12.8 128a16 16 0 0 0 15.9 14.4h19a16 16 0 0 0 15.9-14.4l12.8-128a16 16 0 0 0-15.89-17.6z"/>
        </svg>
    )
}

export default Icon
