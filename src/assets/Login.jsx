import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('127.0.0.1:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert('Login completado.');
                window.location.href = 'https://www.google.com';
            } else {
                const result = await response.json();
                setError(result.error || 'Error al iniciar sesión.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Ocurrió un error al loggear el usuario.');
        }
    };

    return (
        <div className="container" id='root'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="error-message">{error}</p>}

                <button type="submit">Login</button>
                <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
            </form>
        </div>
    );
}

export default Login;
