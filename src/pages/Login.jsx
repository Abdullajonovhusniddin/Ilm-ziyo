import React, { useState } from 'react';
import { useAuth } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('qorakol');
  const [password, setPassword] = useState('12345');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Notog\'ri login yoki parol');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Qorakol School" className={styles.logoImg} />
          <h1>Qorakol Admin</h1>
          <p>Tizimga kirish uchun ma'lumotlarni kiriting</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.inputGroup}>
            <label htmlFor="username">Login</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="qorakol"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">Parol</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
