import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async(e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to create account');
        }
    };

    return ( <
        div className = "flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700" >
        <
        form onSubmit = { handleSignup }
        className = "bg-white p-8 rounded shadow-md w-80" >
        <
        h1 className = "text-2xl font-bold mb-6" > Create an account < /h1> <
        input type = "email"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        className = "w-full p-2 border border-gray-300 rounded mb-4" /
        >
        <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        className = "w-full p-2 border border-gray-300 rounded mb-4" /
        >
        <
        button type = "submit"
        className = "w-full bg-blue-600 text-white p-2 rounded" > Sign Up < /button> <
        /form> <
        /div>
    );
}