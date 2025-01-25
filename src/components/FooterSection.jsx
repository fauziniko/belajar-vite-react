import React from 'react';

const FooterSection = () => {
    return (
        <div className="footer-container">
            <div className="footer-info">
                <h3>Nama Perusahaan</h3>
                <p>Alamat Perusahaan</p>
                <p>Kontak: info@company.com</p>
            </div>
            <div className="footer-social">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
            <div className="footer-contact">
                <form>
                    <label>Nama:</label>
                    <input type="text" name="name" />
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <button type="submit">Kirim</button>
                </form>
            </div>
        </div>
    );
};

export default FooterSection;
