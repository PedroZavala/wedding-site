import './picgrid.css'
import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const PicGrid = (props) => {
    // 500px threshold for mobile viewing
    const numColumns = window.outerWidth <= 500 ? 2 : 3;

    return (
        <div className='picgrid-root'>
            <Box className='picgrid-content' sx={{ overflowY: 'visible' }}>
                <ImageList variant="quilted" cols={numColumns} gap={6}>
                    {props.pictures.map((imageName) => (
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