import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
    };

    return (
        <form onSubmit= {createUser}>
            <div class="test">
                <label>First Name:</label>
                <input type="text" onChange = { (e) => setFirstName(e.target.value) }/>
            </div>
            <div class="test">
                <label>Last Name:</label>
                <input type="text" onChange = { (e) => setLastName(e.target.value) }/>
            </div>
            <div class="test">
                <label>Email Address:</label>
                <input type="text" onChange = { (e) => setEmail(e.target.value) }/>
            </div>
            <div class="test">
                <label>Password:</label>
                <input type="password" onChange = { (e) => setPassword(e.target.value) }/>
            </div>
            <div class="test">
                <label>Confirm Password:</label>
                <input type="password" onChange = { (e) => setConfirmPassword(e.target.value) }/>
            </div>
            <div>
            <p>Your Form Data</p>
                <table>
                    <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                    </tr>
                    <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td>{email}</td>
                    </tr>
                    <tr>
                    <td>Password</td>
                    <td>{password}</td>
                    </tr>
                    <tr>
                    <td>Confirm Password</td>
                    <td>{confirmPassword}</td>
                    </tr>
                </table>
            </div>
        </form>
    )
}

export default Form;