import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/test/';

class UserService {
  // 
  
  // получить данные о пользователе
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  // полу
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();