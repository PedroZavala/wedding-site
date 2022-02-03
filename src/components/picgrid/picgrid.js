import './picgrid.css'
import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Images appear top -> bottom in column order
const itemData = [
    '8-anniv.jpg',
    '360-bridge.jpg',
    'market-square.jpg',
    'p-bday.jpg',
    'ring-eng.jpg',
    'ring.jpg',
    'valentines.jpg'
];

const PicGrid = () => {
    const numColumns = window.outerWidth <= 500 ? 2 : 3;

    return (
        <div className='picgrid-root'>
            <Box className='picgrid-content' sx={{ overflowY: 'visible' }}>
                <ImageList variant="masonry" cols={numColumns} gap={6}>
                    {itemData.map((imageName) => (
                    <ImageListItem key={imageName}>
                        <img
                        src={`/images/grid/${imageName}`}
                        alt='Failed to load'
                        loading="lazy"
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}

export default PicGrid;