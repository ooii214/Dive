import axios from 'axios';

const token = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjMxNDE1YmRmMDYxNDAwMTE4Y2EzNmIiLCJpYXQiOjE1OTcwNjM1MTUsImV4cCI6MTU5NzE0OTkxNX0.CbJeuxgBbsfZYq35ps8JkgU0iwOu-ZRj32ZL_Lrohus',
];
export default axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
