import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 192l-.5-175.4c0-8.8-7.2-16-16-16L159.7 0c-8.9 0-16.2 7.2-16.2 16.2L144 192h288zM0 320v160c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V320H0zm574.7-32c.4-.5.5-.7.8-1.2L520 148.2c-4.9-12.1-16.6-20.1-29.7-20.1h-26.6l.2 64 16 32H95.5l16-32h.5l-.2-64H85.7c-13.1 0-24.8 8-29.7 20.1L.4 286.8c.3.5.5.7.8 1.2h573.5z"/>
        </svg>
    )
}

export default Icon
