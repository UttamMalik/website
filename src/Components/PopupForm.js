import React from 'react';
import './PopupForm.css'; // Import your CSS

const PopupForm = ({ closeForm }) => {
    return (
        <div className="formPopup">
            <form className="formContainer">
                <h2>Contact Form</h2>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone"><b>Phone Number</b></label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="query"><b>Query</b></label>
                <textarea id="query" name="query" rows="4"></textarea>

                <input type="submit" value="Submit" />
                <button type="button" className="close" onClick={closeForm}>Close</button>
            </form>
        </div>
    );
};

export default PopupForm;
