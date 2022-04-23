import React, { useState, useEffect } from "react";

export default function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    console.log("in useWindowWidth");

    useEffect(() => {
        console.log("in Effect");

        const resize = () => {
            setWidth(window.innerWidth);
            console.log("in resize");
        };

        console.log("in add");
        window.addEventListener("resize", resize);

        return () => {
            console.log("in return");
            window.removeEventListener("resize", resize);
        };
    }, []);

    return width;
}

//
