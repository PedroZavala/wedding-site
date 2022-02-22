import React, {useState, useEffect} from 'react'

const scrollYPosition = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
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

export const scrollHook_getYPerBreakPerc = (scrollYBreak) => {
    var relativeYAtBreak = (scrollYPosition() / scrollYBreak);
    return (relativeYAtBreak < 1 ? relativeYAtBreak : 1) * 100;
}

export const scrollHook_getYPerBreakPercFromStart = (scrollYStart, scrollYBreak) => {
    var relativeYAtBreak = ((scrollYPosition() -  scrollYStart)/ scrollYBreak);
    if (relativeYAtBreak < 0) {
        return 0;
    } else if (relativeYAtBreak < 1) {
        return relativeYAtBreak * 100;
    } else {
        return 100;
    }
}

export const scrollHook_getDynamicMarginYPosition = (scrollYBreak, maxMarginOffset) => {
    var relativeYAtBreak = (scrollYPosition() / scrollYBreak);
    return maxMarginOffset - (maxMarginOffset * (relativeYAtBreak < 1 ? relativeYAtBreak : 1));
}