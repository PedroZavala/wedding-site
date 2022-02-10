import React, {useState, useEffect} from 'react'

const scrollYPosition = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position);
        setScrollYPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollYPosition;
}

export const scrollHook_getYPosition = () => {
    return scrollYPosition();
}

export const scrollHook_getDynamicMarginYPosition = (scrollYBreak, maxMarginOffset) => {
    var relativeYAtBreak = (scrollYPosition() / scrollYBreak);
    return maxMarginOffset - (maxMarginOffset * (relativeYAtBreak < 1 ? relativeYAtBreak : 1));
}