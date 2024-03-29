import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M224 160l26.7-53.3L304 80l-53.3-26.7L224 0l-26.7 53.3L144 80l53.3 26.7L224 160zm215.6 295.6L349.8 352h36c25.6 0 39.5-26.3 23.2-43.5L262.8 154 224 208l-38.8-54L39 308.5C22.7 325.7 36.6 352 62.2 352h36L8.4 455.6c-19 21.9-3.8 56.4 24.7 56.4h381.7c28.6 0 43.7-34.6 24.8-56.4zM160 312c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm128 128c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/>
        </svg>
    )
}

export default Icon
