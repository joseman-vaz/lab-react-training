import { useState } from 'react';

export function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const isValidEmail = () => {
    return email.includes('@');
  };

  const isStrongPassword = () => {
    return password.length > 6;
  };

  const renderGreeting = () => {
    if (nationality === 'en') {
      return <p>Hello</p>;
    } else if (nationality === 'de') {
      return <p>Hallo</p>;
    } else if (nationality === 'fr') {
      return <p>Bonjour</p>;
    } else {
      return null;
    }
  };

  const handleSignup = () => {
    return console.log('Signup:', email, password, nationality);
  };
  return (
    <div className="container mt-5">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className={`form-control ${
            email ? (email.includes('@') ? 'is-valid' : 'is-invalid') : ''
          }`}
          value={email}
          onChange={handleEmailChange}
        />
        {email && !email.includes('@') && (
          <div className="invalid-feedback">Invalid email</div>
        )}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className={`form-control ${
            password ? (isStrongPassword() ? 'is-valid' : 'is-invalid') : ''
          }`}
          value={password}
          onChange={handlePasswordChange}
        />
        {password && !isStrongPassword() && (
          <div className="invalid-feedback">Your password is weak</div>
        )}
        {password && isStrongPassword() && (
          <div className="valid-feedback">Your password is unhackable</div>
        )}
      </div>

      <div className="form-group">
        <label>Nationality:</label>
        <select
          className="form-control"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="">Select nationality</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      {nationality && (
        <p className="mt-3">
          {nationality === 'en' && 'Hello'}
          {nationality === 'de' && 'Hallo'}
          {nationality === 'fr' && 'Bonjour'}
        </p>
      )}

      {email && <p className="mt-3">Your email is {email}</p>}

      <button className="btn btn-primary mt-3" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}
