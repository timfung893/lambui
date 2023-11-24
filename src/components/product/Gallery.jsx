import React, { useState } from 'react';
import { photos } from '../../assets/data/data';
import Heading from '../common/Heading';
import PhotoCell from './PhotoCell';
import { Masonry } from 'masonic';

function Gallery(props) {
    const [data, setData] = useState(photos)

    return (
        <>
            <section className="gallery" id='gallery'>
                <div className="container">
                    <Heading title='Ảnh' desc='Cho mọi người xem chơi...' />
                    <Masonry className="photos"
                        items={data.slice(6, undefined)}
                        columnGutter={8}
                        columnWidth={150}
                        columnCount={3}
                        overscanBy={32}
                        render={PhotoCell}
                    />
                </div>
            </section>
        </>
    );
}

export default Gallery;