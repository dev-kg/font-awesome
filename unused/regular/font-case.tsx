import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M624 160h-16a16 16 0 0 0-16 16v12.82C570 171.07 542.44 160 512 160a128 128 0 0 0-128 128v32a128 128 0 0 0 128 128c30.44 0 58-11.07 80-28.82V432a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16zm-32 160a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0zM212.5 74.35a16 16 0 0 0-15-10.35h-43.03a16 16 0 0 0-15 10.35L1 426.35A16 16 0 0 0 16 448h17.14a16 16 0 0 0 15-10.35L88.22 336h175.56l40.11 101.65a16 16 0 0 0 15 10.35H336a16 16 0 0 0 15-21.65zM107.16 288L176 113.58 244.84 288z"/>
        </svg>
    )
}

export default Icon
