import React, {useState} from 'react'

export const Heart = () => {
    const [url, setUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png')
    /*
    //https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png
    //https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
    */
    const [size, setSize] = useState('50px');

    return (
        <div>
            <img
                src={url}
                width={size}
            />
        </div>
    )
}
export default Heart

