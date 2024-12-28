import React, { useRef, useState } from 'react';
import CryptoJS from "crypto-js";
import { useNavigate } from 'react-router';
import { addUser, getUserByEmail } from '../../IndexDb/IndexDB';
import { useDispatch } from 'react-redux';
import { Authactions } from '../../Reduxstore/Auth-slice/auth-slice.';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const naviaget = useNavigate()
    const dispatch = useDispatch()
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const roleRef = useRef();

    const submitHandler = async(event) => {
        event.preventDefault();

        const name = nameRef?.current?.value || ""; 
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const role = roleRef?.current?.value; 


        const encryptedPassword = CryptoJS.AES.encrypt(password, "secret-key").toString();

        const newUser = {
          id: Math.random().toString(), 
          name, 
          email, 
          password: encryptedPassword, 
          role, 
          timestamp: new Date().toISOString(), 
      };

      

        if (isLogin) {
            // Handle login
           
            const existingUser = await getUserByEmail(email)

            localStorage.setItem('role',existingUser.role)

            if (!existingUser) {
                alert('User not found. Please sign up first.');
                return;
            }
            
            const decryptedPassword = CryptoJS.AES.decrypt(existingUser.password, "secret-key").toString(CryptoJS.enc.Utf8);
            if (decryptedPassword !== password) {
                alert('Invalid password. Please try again.');
                return;
            }

            alert('Login successful!');
            localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
            dispatch(Authactions.login(email))
            
            // rolebase authentication
            if(role === 'user'){
                // console.log(role)
                   naviaget('/layout') 
            }else{
                // console.log(role)
                    naviaget('/admin')
            }

        } else {
            // Handle signup
            const existingUser = await getUserByEmail(email)
            console.log(existingUser)

            if (existingUser) {
                alert('Email is already registered. Please use a different email.');
                return;
            }

            await addUser(newUser)
            dispatch(Authactions.Signup(newUser))
            localStorage.setItem('loggedInUser', JSON.stringify(newUser));
            alert('Signup successful!');
        }

        // Clear input fields
        if (!isLogin) {
          nameRef.current.value = "";
          emailRef.current.value = "";
          passwordRef.current.value = "";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 text-foreground">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-center text-2xl font-bold">Flight Booking</h1>

                <div className="flex justify-center space-x-4">
                    <button
                        className={`px-4 py-2 rounded-lg focus:outline-none ${isLogin
                            ? 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white'
                            : 'bg-secondary text-secondary-foreground'
                            }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg focus:outline-none ${!isLogin
                            ? 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white'
                            : 'bg-primary text-primary-foreground'
                            }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {isLogin ? (
                    <form className="space-y-4" onSubmit={submitHandler}>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground">Email</label>
                            <input
                                type="email"
                                ref={emailRef}
                                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-primary"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground">Password</label>
                            <input
                                type="password"
                                ref={passwordRef}
                                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-primary"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Login
                        </button>
                    </form>
                ) : (
                    <form className="space-y-4" onSubmit={submitHandler}>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground">Name</label>
                            <input
                                type="text"
                                ref={nameRef}
                                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground">Email</label>
                            <input
                                type="email"
                                ref={emailRef}
                                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground">Password</label>
                            <input
                                type="password"
                                ref={passwordRef}
                                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground">Role</label>
                            <select
                                ref={roleRef}
                                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                                required
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Signup
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
