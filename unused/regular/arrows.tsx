import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M360.549 412.216l-96.064 96.269c-4.686 4.686-12.284 4.686-16.971 0l-96.064-96.269c-4.686-4.686-4.686-12.284 0-16.971l19.626-19.626c4.753-4.753 12.484-4.675 17.14.173L230 420.78h2V280H91.22v2l44.986 41.783c4.849 4.656 4.927 12.387.173 17.14l-19.626 19.626c-4.686 4.686-12.284 4.686-16.971 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l96.269-96.064c4.686-4.686 12.284-4.686 16.97 0l19.626 19.626c4.753 4.753 4.675 12.484-.173 17.14L91.22 230v2H232V91.22h-2l-41.783 44.986c-4.656 4.849-12.387 4.927-17.14.173l-19.626-19.626c-4.686-4.686-4.686-12.284 0-16.971l96.064-96.269c4.686-4.686 12.284-4.686 16.971 0l96.064 96.269c4.686 4.686 4.686 12.284 0 16.971l-19.626 19.626c-4.753 4.753-12.484 4.675-17.14-.173L282 91.22h-2V232h140.78v-2l-44.986-41.783c-4.849-4.656-4.927-12.387-.173-17.14l19.626-19.626c4.686-4.686 12.284-4.686 16.971 0l96.269 96.064c4.686 4.686 4.686 12.284 0 16.971l-96.269 96.064c-4.686 4.686-12.284 4.686-16.971 0l-19.626-19.626c-4.753-4.753-4.675-12.484.173-17.14L420.78 282v-2H280v140.78h2l41.783-44.986c4.656-4.849 12.387-4.927 17.14-.173l19.626 19.626c4.687 4.685 4.687 12.283 0 16.969z"/>
        </svg>
    )
}

export default Icon
