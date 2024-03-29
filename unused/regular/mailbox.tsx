import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 64H144A144 144 0 0 0 0 208v208a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32V208A144 144 0 0 0 432 64zM240 400H48V208a96 96 0 0 1 192 0zm288 0H288V208c0-37.05-14.38-70.48-37.37-96H432a96.1 96.1 0 0 1 96 96zm-64-208H344a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h72v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm-280 0h-80a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon
