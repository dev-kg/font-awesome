import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M80 48h480v368h48V40c0-22.06-17.94-40-40-40H72C49.94 0 32 17.94 32 40v376h48V48zm544 416H512v-80c0-17.67-14.33-32-32-32H288c-17.67 0-32 14.33-32 32v80H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-160 0H304v-64h160v64z"/>
        </svg>
    )
}

export default Icon
