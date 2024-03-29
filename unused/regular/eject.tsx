import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 320H48c-26.51 0-48 21.49-48 48v64c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-64c0-26.51-21.49-48-48-48zm0 112H48v-64h352v64zM48.048 304h351.895c42.637 0 64.151-51.731 33.941-81.941l-175.943-176c-18.745-18.745-49.137-18.746-67.882 0l-175.952 176C-16.042 252.208 5.325 304 48.048 304zM224 80l176 176H48L224 80z"/>
        </svg>
    )
}

export default Icon
