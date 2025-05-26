import './App.css'
import { useState } from 'react'
import { UserAuth } from './contexts/LoginContext';

function LoginComponent() {

  const [inputUser, setinputUser] = useState<string>('');
  const [inputPass, setinputPass] = useState<string>('');
  const { Login } = UserAuth();
  const username = 'morgan.oliveira';
  const password = 'Aqwdada123!';
  const handleLogin = () => {
    if (inputUser == username && inputPass == password) {
      Login();
    }
  };
  
  // mock
  function nothing(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <>
      <div className='login-card'>
        <form onSubmit={nothing}>
          <div className='img-logo'>
            <img src="../src/assets/exampletelecom-logo.png" alt="" />
          </div>
          <span id='welcome-text'>Bem-vindo! Por favor, entre com suas credenciais de acesso:</span>
          <div className='login-text-field'>
            <h3 id='user-text'>Usuário:</h3>
            <input id="user-text-field" type='text' value={inputUser} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setinputUser(e.target.value)}/>
            <h3 id='password-text'>Senha:</h3>
            <input id='password-text-field' type="password" value={inputPass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setinputPass(e.target.value)}/>
          </div>
          <div className='login-btn'>
            <button type='submit' onClick={handleLogin}>Acessar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginComponent;


