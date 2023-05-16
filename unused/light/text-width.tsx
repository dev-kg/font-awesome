import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M362.31 292.69a16.12 16.12 0 0 0-11.48-4.69c-8 0-15.83 5.69-15.83 16v64H111v-64a16 16 0 0 0-16.12-16 15.63 15.63 0 0 0-11.19 4.71l-80 80a16 16 0 0 0 0 22.63l80 80A16.16 16.16 0 0 0 95.17 480c8 0 15.83-5.69 15.83-16v-64h224v64a16 16 0 0 0 16.13 16 15.64 15.64 0 0 0 11.18-4.7l80-80a16 16 0 0 0 0-22.63zM79 368v57.37L37.63 384 79 342.64zm288 57.36v-82.73L408.37 384zM431 32H15A16 16 0 0 0-1 48v72a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h176v192h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-40V64h176v56a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V48a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
