import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/E.png';

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login');
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
        <p>Lets Get You Started On Your Journey With....</p>
      </div>
      <div className="form-container">
        <h2>Enter Credentials</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" className="full" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
}
