import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M212.6 322l35.6-35.6c2.6.7 5 1.6 7.8 1.6 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.8.9 5.2 1.6 7.8L190 299.4l-134-134c-3.6-3.6-8.4-5.4-13.1-5.4-6.1 0-12.1 3-15.2 8.9-47.4 88.2-33.9 200.5 40.5 274.9 45.5 45.5 105.1 68.2 164.6 68.2 38 0 76-9.2 110.3-27.7 10.4-5.6 11.8-20 3.5-28.4L212.6 322zm20.2 158c-53.6 0-104.1-20.9-142-58.8C33.3 363.7 16.7 276.1 47.4 202L310 464.6a201.43 201.43 0 0 1-77.2 15.4zM200.2 96c-4.5-.2-8.2 3.6-8.2 8.1v16c0 4.3 3.5 7.8 7.8 8 99.9 4 180.6 84.2 184.2 184 .2 4.3 3.6 7.8 8 7.8h15.8c4.5 0 8.2-3.7 8.1-8.2-4.2-117-98.7-211.4-215.7-215.7zm0-96c-4.5-.1-8.2 3.6-8.2 8.1V24c0 4.4 3.5 7.8 7.9 7.9C352.7 35.7 475.9 159.2 480 312c.1 4.4 3.6 7.9 7.9 7.9h16c4.5 0 8.2-3.7 8.1-8.2C507.7 141.8 370.2 4.3 200.2 0z"/>
        </svg>
    )
}

export default Icon
