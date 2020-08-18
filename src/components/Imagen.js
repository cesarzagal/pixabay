import React from 'react';
const Imagen = ({imagen}) => {
    const {largeImageURL, likes, previewURL, tags, views, webformatURL, previewWidth, previewHeight} = imagen;
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-b-4">
            <div className="card">
                <img src={webformatURL} alt={tags} height="120" width={previewWidth} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver Imagen
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;