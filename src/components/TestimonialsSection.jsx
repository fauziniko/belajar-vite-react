import React from 'react';

const TestimonialsSection = () => {
    return (
        <div className="testimonials-container">
            <h2>Apa Kata Pelanggan Kami?</h2>
            <div className="testimonial-item">
                <img src="customer1.jpg" alt="Customer 1" />
                <p>"Desain rumah yang saya beli sangat sesuai dengan impian saya!"</p>
                <p>- John Doe</p>
            </div>
            <div className="testimonial-item">
                <img src="customer2.jpg" alt="Customer 2" />
                <p>"Proses pembelian yang mudah dan cepat, sangat direkomendasikan!"</p>
                <p>- Jane Smith</p>
            </div>
        </div>
    );
};

export default TestimonialsSection;
