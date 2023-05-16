import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M443.875 396.323l3.151 7.353c2.611 6.092-.211 13.146-6.303 15.757l-42.421 19.273c-7.658 3.284-17.345.3-21.175-8.797L317.376 288H176a16 16 0 0 1-15.839-13.737C125.779 33.586 128.211 51.165 128 48c0-27.13 22.508-49.003 49.87-47.964 24.878.945 45.15 21.216 46.095 46.094C225.004 73.491 203.131 96 176 96c-3.115 0-6.156-.307-9.105-.874L176.162 160H308c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H180.734l9.143 64H328a16 16 0 0 1 14.746 9.791l57.752 137.159 27.621-12.929c6.091-2.611 13.146.211 15.756 6.302zm-127.488-28.211C301.755 432.107 244.366 480 176 480c-79.401 0-144-64.599-144-144 0-58.714 35.326-109.325 85.836-131.717l-4.671-32.679C47.059 196.957 0 261.081 0 336c0 97.047 78.953 176 176 176 69.906 0 130.418-40.969 158.801-100.155l-18.414-43.733z"/>
        </svg>
    )
}

export default Icon
