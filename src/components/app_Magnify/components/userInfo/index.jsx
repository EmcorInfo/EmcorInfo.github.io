import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    username: '',
    password: '',
    app: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo({
//       ...userInfo,
//       [name]: value
//     });
//   };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    let token;
  
    try {
      token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado no localStorage');
      }
  
      const decodedToken = JSON.parse(token);
      const user_id = decodedToken.user_id;
  
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        alert('A nova senha e a confirmação da senha não coincidem.');
        return;
      }
  
      const novaSenha = {
        id: user_id,
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      };
      const response = await axios.put(`https://hospitalemcor.com.br/api/index.php?id=${user_id}&table=login`, novaSenha);
  
      if (response.status === 200) {
        alert('Senha alterada com sucesso!');
        // Limpar os campos do formulário
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        alert('Erro ao alterar senha. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
      alert('Erro ao alterar senha. Por favor, tente novamente.');
    }
  };
  
  // const handlePasswordSubmit = async (e) => {
  //   e.preventDefault();
  //   // Verificar se a nova senha e a confirmação coincidem
  //   if (passwordData.newPassword !== passwordData.confirmPassword) {
  //     alert('A nova senha e a confirmação da senha não coincidem.');
  //     return;
  //   }

  //   try {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       const decodedToken = JSON.parse(token);
  //       const user_id = decodedToken.user_id;

  //       const response = await fetch(`https://hospitalemcor.com.br/api/index.php?id=${user_id}&table=login`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           id: user_id,
  //           currentPassword: passwordData.currentPassword,
  //           newPassword: passwordData.newPassword
  //         }),
  //       });

  //       if (response.ok) {
  //         alert('Senha alterada com sucesso!');
  //       } else {
  //         alert('Erro ao alterar senha. Por favor, tente novamente.');
  //       }
  //     } else {
  //       throw new Error('Token não encontrado no localStorage');
  //     }
  //   } catch (error) {
  //     console.log('Erro ao alterar senha:', error);
  //     alert('Erro ao alterar senha. Por favor, tente novamente.');
      
  //   }
  // };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = JSON.parse(token);
          const user_id = decodedToken.user_id;

          const response = await fetch(`https://hospitalemcor.com.br/api/index.php?id=${user_id}&table=login`);
          const data = await response.json();
          const { id, username, app } = data;
          setUserInfo({ id, username, app, password: '' });
        }
      } catch (error) {
        console.error('Erro ao carregar informações do usuário:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className='text-white w-75 d-flex flex-column align-items-center'>
      <h1 className='text-center'>Perfil do Usuário</h1>
      <div className='d-flex flex-row mb-5'>
        <label><strong>Username:</strong></label>
        <div className='ms-2'>{userInfo.username}</div>
      </div>
      {/* <div className='d-flex flex-row'>
        <label>App:</label>
        <div className='ms-2'>{userInfo.app}</div>
      </div> */}
      <form className='altSenha border p-2 d-flex flex-column justify-content-center align-items-center' onSubmit={handlePasswordSubmit}>
        <h3 className=" text-center">Alterar Senha</h3>
        <div className="form-group mt-4 mx-4">
            
          <label>Senha Atual:</label>
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Nova Senha:</label>
          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirmar Nova Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Salvar</button>
      </form>
    </div>
  );
};

export default UserProfilePage;
