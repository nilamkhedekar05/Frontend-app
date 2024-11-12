import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/posts');
        } catch (error) {
            console.error(error);
            alert('Failed to login');
        }
    };

    return ( <
        div className = "flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700" >
        <
        form onSubmit = { handleLogin }
        className = "bg-white p-8 rounded shadow-md w-80" >
        <
        h1 className = "text-2xl font-bold mb-6" > Login to your account < /h1> <
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
        className = "w-full bg-blue-600 text-white p-2 rounded" > Login < /button> <
        /form> <
        /div>
    );
}