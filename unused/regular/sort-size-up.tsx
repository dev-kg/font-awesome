import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M428 320H244a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h184a20 20 0 0 0 20-20V340a20 20 0 0 0-20-20zm-28 112H272v-64h128zm84-400H252a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h232a28 28 0 0 0 28-28V60a28 28 0 0 0-28-28zm-20 176H272V80h192zM104.72 35.76a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 28 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.73-20.24z"/>
        </svg>
    )
}

export default Icon
