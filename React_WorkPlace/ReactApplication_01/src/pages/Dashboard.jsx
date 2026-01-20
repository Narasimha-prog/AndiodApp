import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserData } from '../services/api';
import { loginFailure, loginSuccess } from '../store/auth/authSlice';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserData()
      .then(data => {
        dispatch(loginSuccess({
          user: data.user,
          token: null,
        }));
      })
      .catch(() => {
        dispatch(loginFailure('Not authenticated'));
      });
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;