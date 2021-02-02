import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M213.52 455.07A88.41 88.41 0 0 1 192 397.24v-28.69a89.11 89.11 0 0 1 42.09-75.84l7.55-20.71H220a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a11.79 11.79 0 0 1 9.43 4.92A131.1 131.1 0 0 1 352 162.18V32a32 32 0 0 0-32-32H32A32 32 0 0 0 0 32v464a16 16 0 0 0 16 16h205.06a59.85 59.85 0 0 1-7.54-28.69zM208 92a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12zm-64 296a12 12 0 0 1-12 12H92a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12H92a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12H92a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm460.58 183.56L600 304.2l-17.87-49.08a99.92 99.92 0 0 0-93.2-63.12H375.07a99.94 99.94 0 0 0-93.24 63.12L264 304.2l-4.55 11.35a57.41 57.41 0 0 0-35.42 53v28.69a57 57 0 0 0 21.52 44.46v41.61A28.69 28.69 0 0 0 274.21 512h28.69a28.69 28.69 0 0 0 28.68-28.69V448h200.83v35.31A28.7 28.7 0 0 0 561.1 512h28.69a28.7 28.7 0 0 0 28.69-28.69V441.7A57 57 0 0 0 640 397.24v-28.69a57.39 57.39 0 0 0-35.42-52.99zM335.11 284c6.53-16.92 22.36-28 40-28h113.82c17.6 0 33.42 11.1 40 28L541 320H323zM300 407.85c-14.4 0-24-9.57-24-23.93S285.6 360 300 360s36 21.53 36 35.89-21.6 11.96-36 11.96zm264 0c-14.4 0-36 2.39-36-12S549.6 360 564 360s24 9.57 24 23.92-9.6 23.93-24 23.93z"/>
        </svg>
    )
}

export default Icon
