import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (userData) => {
        // Add login logic here, such as authentication
        console.log('Logged in user:', userData);
        setLoggedInUser(userData);
    };

    const handleSignup = (userData) => {
        // Add signup logic here, such as creating a new user
        console.log('New user signed up:', userData);
        setLoggedInUser(userData);
    };

    return (
        <div>
            {loggedInUser ? (
                <div>
                    <h2>Welcome, {loggedInUser.username}!</h2>
                    <button onClick={() => setLoggedInUser(null)}>Logout</button>
                </div>
            ) : (
                <div>
                    <LoginForm onLogin={handleLogin} />
                    <SignupForm onSignup={handleSignup} />
                </div>
            )}
        </div>
    );
};

export default App;
