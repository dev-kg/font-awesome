import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M544 32H432L400 0h-80a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm0 288H432l-32-32h-80a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32zM64 16A16 16 0 0 0 48 0H16A16 16 0 0 0 0 16v400a32 32 0 0 0 32 32h224v-64H64V160h192V96H64z"/>
        </svg>
    )
}

export default Icon
