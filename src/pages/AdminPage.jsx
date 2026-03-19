import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

export default function AdminPage() {
  useAOS();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('zed_admin_auth', 'true');
      navigate('/admin-dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card" data-aos="zoom-in">
        <div className="text-center mb-4">
          <img src="/LOGO.png" alt="Logo" height="50" class="mb-3" />
          <h4 className="fw-bold">Admin <span class="neon-text">Portal</span></h4>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label small opacity-50">Username</label>
            <input 
              type="text" 
              className="form-control" 
              required 
              placeholder="admin" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label small opacity-50">Password</label>
            <input 
              type="password" 
              className="form-control" 
              required 
              placeholder="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-neon w-100 mt-3">LOGIN</button>
        </form>
        {error && (
          <div className="text-danger small mt-3 text-center">
            Invalid credentials. Please try again.
          </div>
        )}
      </div>
      <style>{`
        .login-card {
            max-width: 400px;
            width: 100%;
            padding: 40px;
            background: rgba(10, 11, 16, 0.95);
            border: 1px solid rgba(0, 243, 255, 0.2);
            border-radius: 20px;
            box-shadow: 0 0 40px rgba(0, 243, 255, 0.1);
        }
        .login-container {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, rgba(0, 243, 255, 0.05) 0%, transparent 70%);
        }
        .form-control {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            color: white !important;
            padding: 12px;
            margin-bottom: 20px;
        }
        .form-control:focus {
            border-color: var(--neon-blue) !important;
            box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
