

export const authApi = () => {
  window.location.href =
    'http://localhost:8000/api/auth/google/redirect';
};


export const fetchUserData = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/me', {
      method: 'GET',
      credentials: 'include', // 🔥 REQUIRED
    });

    if (!response.ok) {
      throw new Error('Unauthenticated');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
