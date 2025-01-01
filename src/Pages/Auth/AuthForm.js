import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router';
import { addUser, getUserByEmail } from '../../IndexDb/IndexDB';
import { useDispatch } from 'react-redux';
import { Authactions } from '../../Reduxstore/Auth-slice/auth-slice.'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setAuthForm((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };
  console.log(authForm)

  const submitHandler = async (event) => {
    event.preventDefault();

    const encryptedPassword = CryptoJS.AES.encrypt(authForm.password, 'secret-key').toString();

    if (isLogin) {
      const existingUser = await getUserByEmail(authForm.email);

      if (!existingUser) {
        alert('User not found. Please sign up first.');
        return;
      }

      const decryptedPassword = CryptoJS.AES.decrypt(existingUser.password, 'secret-key').toString(CryptoJS.enc.Utf8);
      if (decryptedPassword !== authForm.password) {
        alert('Invalid password. Please try again.');
        return;
      }

      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
      localStorage.setItem('role', existingUser.role);
      dispatch(Authactions.login(authForm.email));

      if (existingUser.role === 'user') {
        navigate('/layout');
      } else {
        navigate('/admin');
      }
    } else {
      const existingUser = await getUserByEmail(authForm.email);
      if (existingUser) {
        alert('Email is already registered. Please use a different email.');
        return;
      }

      const newUser = {
        id: Math.random().toString(),
        name: authForm.name,
        email: authForm.email,
        password: encryptedPassword,
        role: authForm.role,
        timestamp: new Date().toISOString(),
      };

      await addUser(newUser);
      dispatch(Authactions.Signup(newUser));
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
      alert('Signup successful!');

      setAuthForm({
        name: '',
        email: '',
        password: '',
        role: '',
      });
    }
  };

  const switchHandler =()=>{

    setIsLogin(!isLogin)
    setAuthForm({
        name: '',
        email: '',
        password: '',
        role: '',
      });
  }

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 text-foreground">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold">Flight Booking</h1>

        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg focus:outline-none ${
              isLogin
                ? 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white'
                : 'bg-secondary text-secondary-foreground'
            }`}
            onClick={switchHandler}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-lg focus:outline-none ${
              !isLogin
                ? 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white'
                : 'bg-primary text-primary-foreground'
            }`}
            onClick={switchHandler}
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
                name="email"
                value={authForm.email}
                onChange={inputHandleChange}
                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-primary"
                required
                placeholder="Enter the email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Password</label>
              <input
                type="password"
                name="password"
                value={authForm.password}
                onChange={inputHandleChange}
                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-primary"
                required
                placeholder="Enter the password"
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
                name="name"
                value={authForm.name}
                onChange={inputHandleChange}
                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                required
                placeholder="Enter the name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={authForm.email}
                onChange={inputHandleChange}
                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                required
                placeholder="Enter the email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Password</label>
              <input
                type="password"
                name="password"
                value={authForm.password}
                onChange={inputHandleChange}
                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                required
                placeholder="Enter the password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Role</label>
              <select
                name="role"
                value={authForm.role}
                onChange={inputHandleChange}
                className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring focus:ring-secondary"
                required
              >
                <option value="">Select Role</option>
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
