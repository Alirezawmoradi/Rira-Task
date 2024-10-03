import Lottie from "lottie-react";
import expiredAnimation from "../../../../public/expired-animation.json";
import React from "react";

export const Expired = () => {
    return (
        <div
            className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
            <Lottie animationData={expiredAnimation} loop={true}/>
        </div>
    )
}