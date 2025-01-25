import React from 'react';

const PopularDesignsSection = () => {
    return (
        <div className="popular-designs-container">
            <h2>Desain Rumah Populer</h2>
            <div className="design-item">
                <img src="path_to_image1.jpg" alt="Desain 1" />
                <h3>Desain Modern 1</h3>
                <p>Desain rumah dengan konsep modern minimalis.</p>
            </div>
            <div className="design-item">
                <img src="path_to_image2.jpg" alt="Desain 2" />
                <h3>Desain Klasik 2</h3>
                <p>Desain klasik yang elegan dan nyaman.</p>
            </div>
            <button>Lihat Lebih Banyak</button>
        </div>
    );
};

export default PopularDesignsSection;
