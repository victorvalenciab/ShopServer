import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        documentType: 'CC',
        documentNumber: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState('');

    const validateFullName = (name) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name);
    const validateDocumentNumber = (documentNumber) => /^[0-9]+$/.test(documentNumber);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
    const validateUsername = (username) => /^[a-zA-Z0-9_.-]+$/.test(username);
    const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'password') updatePasswordStrength(value);
    };

    const updatePasswordStrength = (password) => {
        if (password.length < 8) {
            setPasswordStrength('strength-weak');
        } else if (password.length >= 12) {
            setPasswordStrength('strength-strong');
        } else if (password.length >= 10) {
            setPasswordStrength('strength-good');
        } else {
            setPasswordStrength('strength-fair');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const newErrors = {};
        if (!validateFullName(formData.fullName)) {
            newErrors.fullName = 'El nombre completo no debe contener caracteres especiales no permitidos.';
        }
        if (!validateDocumentNumber(formData.documentNumber)) {
            newErrors.documentNumber = 'El número de documento debe ser estrictamente un número.';
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Ingrese un correo electrónico válido.';
        }
        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Ingrese un número de teléfono válido.';
        }
        if (!validateUsername(formData.username)) {
            newErrors.username = 'El nombre de usuario no debe contener caracteres especiales.';
        }
        if (!validatePassword(formData.password)) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial permitido.';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden.';
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('127.0.0.1:8080/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "fullName": formData.fullName,
                        "documentType": formData.documentType,
                        "documentNumber": formData.documentNumber,
                        "email": formData.email,
                        "phone": formData.phone,
                        "username": formData.username,
                        "password": formData.password
                    }),
                });

                if (response.ok) {
                    alert('Registro completado.');
                    setFormData({
                        fullName: '',
                        documentType: 'CC',
                        documentNumber: '',
                        email: '',
                        phone: '',
                        username: '',
                        password: '',
                        confirmPassword: '',
                    });
                    setPasswordStrength('');
                } else {
                    const result = await response.json();
                    alert(result.error || 'Ocurrió un error al registrar el usuario.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert(`Ocurrió un error inesperado: ${error.message}`);
            
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Nombre Completo:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                {errors.fullName && <div className="error-message">{errors.fullName}</div>}

                <label htmlFor="documentType">Tipo de Documento:</label>
                <select
                    id="documentType"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    required
                >
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="PAS">Pasaporte</option>
                </select>

                <label htmlFor="documentNumber">Número de Documento:</label>
                <input
                    type="text"
                    id="documentNumber"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    required
                />
                {errors.documentNumber && <div className="error-message">{errors.documentNumber}</div>}

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <div className="error-message">{errors.email}</div>}

                <label htmlFor="phone">Teléfono Celular:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}

                <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                {errors.username && <div className="error-message">{errors.username}</div>}

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <div className={`password-strength ${passwordStrength}`} id="passwordStrength"></div>
                {errors.password && <div className="error-message">{errors.password}</div>}

                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

                <button type="submit">Registrarse</button>
                <p>¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link></p>
            </form>
        </div>
    );
}

export default RegistrationForm;
