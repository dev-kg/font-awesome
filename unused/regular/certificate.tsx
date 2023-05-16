import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M489.199 255.927c41.041-40.173 24.263-102.49-31.145-116.634C473.43 85.289 427.935 38 372.589 53.775 358.41-1.828 295.346-17.915 256 22.621 242.445 8.655 226.954.019 205.706.018c-29.388-.001-57.144 17.868-66.295 53.757-54.95-15.663-100.976 31.042-85.465 85.518-55.295 14.115-72.274 76.374-31.145 116.634-40.946 40.08-24.367 102.464 31.145 116.634-15.512 54.481 30.59 101.158 85.465 85.518C153.747 514.3 216.434 529.714 256 489.25c39.511 40.408 102.326 24.759 116.589-31.171 55.007 15.678 100.937-31.177 85.465-85.518 55.295-14.115 72.274-76.374 31.145-116.634zm-31.205 36.574c11.133 10.539 5.95 29.28-8.665 32.775l-50.903 12.992 14.349 50.387c4.055 14.491-9.607 28.165-24.099 24.108l-50.37-14.354-12.987 50.92c-3.525 14.75-22.608 19.626-32.764 8.668L256 420.621l-36.554 37.376c-10.263 10.849-29.158 6.421-32.764-8.668l-12.987-50.92-50.37 14.354c-14.489 4.056-28.154-9.615-24.099-24.108l14.349-50.387-50.903-12.992c-14.609-3.494-19.803-22.231-8.665-32.775l37.363-36.566-37.363-36.566c-11.133-10.539-5.95-29.28 8.665-32.775l50.903-12.992-14.349-50.387c-4.054-14.49 9.605-28.166 24.099-24.108l50.37 14.354 12.987-50.92c3.476-14.546 22.503-19.514 32.764-8.668L256 91.525l36.554-37.652c10.382-10.974 29.328-5.71 32.764 8.668l12.987 50.92 50.37-14.354c14.488-4.056 28.154 9.615 24.099 24.108l-14.349 50.387 50.903 12.992c14.609 3.494 19.802 22.231 8.665 32.775l-37.363 36.566 37.364 36.566z"/>
        </svg>
    )
}

export default Icon
