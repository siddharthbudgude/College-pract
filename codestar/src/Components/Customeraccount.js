import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // if using react-router for navigation

export default function Customeraccount() {
    const [myCountry, setMyCountry] = useState();
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate(); // for redirection

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Handle form inputs
        if (name) {
            setInputs(values => ({ ...values, [name]: value }));
        } else {
            setMyCountry(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission

        // Log the form data
        console.log("Form Data:", { ...inputs, sportsClub: myCountry });

        // Redirect to success page
        navigate('/Successlogin');
    };

    return (
        <>
            <div className="user-register">
                <h3 className="user-heading">Create an account</h3>
                <form className="user-create" onSubmit={handleSubmit}>
                    <span className="create-input">
                        <label>Name</label>
                        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Enter Your Name" />
                    </span>

                    <span className="create-input">
                        <label>Email</label>
                        <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Enter Your Email" />
                    </span>

                    <span className="create-input">
                        <label>Address</label>
                        <input type="text" name="address" value={inputs.address || ""} onChange={handleChange} placeholder="Enter Your Address" />
                    </span>

                    <span className="create-input">
                        <label>Sports Club</label>
                        <select name="sportsClub" value={myCountry} onChange={handleChange}>
                            <option value="India">India</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Argentina">Argentina</option>
                        </select>
                    </span>

                    <span className="create-input">
                        <input type="submit" value="Create Account" />
                    </span>
                </form>
            </div>
        </>
    );
}
