import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

export default function AdminDashboardPage() {
  useAOS();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', category: 'branding', image: '', link: '' });

  useEffect(() => {
    if (sessionStorage.getItem('zed_admin_auth') !== 'true') {
      navigate('/admin');
    }
    const stored = JSON.parse(localStorage.getItem('zed_projects_v4')) || [];
    setProjects(stored);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('zed_admin_auth');
    navigate('/admin');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      ...form
    };
    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem('zed_projects_v4', JSON.stringify(updated));
    setForm({ title: '', category: 'branding', image: '', link: '' });
    window.dispatchEvent(new Event('storage'));
  };

  const deleteProject = (id) => {
    if (window.confirm('Delete this project?')) {
      const updated = projects.filter(p => p.id !== id);
      setProjects(updated);
      localStorage.setItem('zed_projects_v4', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5" data-aos="fade-down">
          <div>
            <img src="/LOGO.png" alt="Logo" height="40" className="mb-2" />
            <h2 className="fw-bold m-0">Project <span className="neon-text">Manager</span></h2>
          </div>
          <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">LOGOUT</button>
        </div>

        <div className="row g-4">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="admin-card">
              <h4 className="mb-4">Add New Project</h4>
              <form onSubmit={handleSubmit}>
                <label className="small opacity-50 mb-2">Project Title</label>
                <input 
                  type="text" 
                  className="form-control" 
                  required 
                  placeholder="Brand Transformation"
                  value={form.title}
                  onChange={(e) => setForm({...form, title: e.target.value})}
                />
                
                <label className="small opacity-50 mb-2">Category</label>
                <select 
                  className="form-select" 
                  required
                  value={form.category}
                  onChange={(e) => setForm({...form, category: e.target.value})}
                >
                  <option value="branding">Branding</option>
                  <option value="marketing">Marketing</option>
                  <option value="web">Web Dev</option>
                </select>

                <label className="small opacity-50 mb-2">Banner Image URL</label>
                <input 
                  type="url" 
                  className="form-control" 
                  required 
                  placeholder="https://unsplash.com/..."
                  value={form.image}
                  onChange={(e) => setForm({...form, image: e.target.value})}
                />

                <label className="small opacity-50 mb-2">Live Project Link</label>
                <input 
                  type="url" 
                  className="form-control" 
                  required 
                  placeholder="https://example.com"
                  value={form.link}
                  onChange={(e) => setForm({...form, link: e.target.value})}
                />

                <button type="submit" className="btn-neon w-100 mt-2">PUBLISH PROJECT</button>
              </form>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="admin-card">
              <h4 className="mb-4">Live Projects</h4>
              <div id="adminProjectsList">
                {projects.map(p => (
                  <div className="project-list-item" key={p.id}>
                    <div className="d-flex align-items-center">
                      <img src={p.image} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px', marginRight: '15px' }} />
                      <div>
                        <div className="fw-bold">{p.title}</div>
                        <div className="small opacity-50 text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>{p.category}</div>
                      </div>
                    </div>
                    <button onClick={() => deleteProject(p.id)} className="btn-delete"><i className="bi bi-trash"></i></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .dashboard-container { min-height: 100vh; background: #05070a; padding-top: 40px; }
        .admin-card { background: #11141d; border: 1px solid rgba(0, 243, 255, 0.1); border-radius: 15px; padding: 25px; margin-bottom: 25px; }
        .project-list-item { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; }
        .form-control, .form-select { background: rgba(255,255,255,0.05) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: white !important; margin-bottom: 15px; }
        .btn-delete { color: #ff4d4d; border: 1px solid #ff4d4d; background: transparent; padding: 5px 12px; border-radius: 5px; transition: 0.3s; }
        .btn-delete:hover { background: #ff4d4d; color: white; }
      `}</style>
    </div>
  );
}
