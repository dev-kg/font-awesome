import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 224V32a32 32 0 0 0-32-32H32A32 32 0 0 0 0 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32zm-64-32H64V64h128zm416 64H416a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V288a32 32 0 0 0-32-32zm-32 192H448V320h128zm-96-224v-80a48 48 0 0 0-48-48H288v128a64.07 64.07 0 0 1-64 64h-64v80a48 48 0 0 0 48 48h144V288a64.07 64.07 0 0 1 64-64z"/>
        </svg>
    )
}

export default Icon
