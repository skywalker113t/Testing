import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/E.png';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email === 'test@gmail.com' && password === '123456') {
      navigate('/');
    } else {
      window.alert('Invalid login');
    }
  };

  return (
    <div className="login container">
      <header className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="EduConnect" className="nav-icon" />
        </Link>
      </header>
      <div className="left">
        <h1>Welcome Back!</h1>
        <p>Log in to continue your journey: structured learning, real projects, and accountability groups.</p>
      </div>
      <div className="form-container">
        <h2>Enter Credentials</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}
