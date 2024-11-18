import { useState } from 'react';

const useImageStyle = () => {   
    const [imageStyle, setImageStyle] = useState('object-cover');

    const handleImageStyle = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
            if (naturalHeight > naturalWidth) {
            setImageStyle('object-contain');
            } else {
            setImageStyle('object-cover');
            }
        };
    
    return { imageStyle, handleImageStyle };
    }

export default useImageStyle;