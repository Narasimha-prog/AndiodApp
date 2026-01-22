

export const authApi = () => {
  window.location.href =
    'http://localhost:8000/auth/google/redirect';
};


export const fetchUserData = async () => {
  try {
    const response = await fetch('http://localhost:8000/me', {
      method: 'GET',
      credentials: 'include', // 🔥 REQUIRED
    });

    console.log('Fetch user data response:', response);

    if (!response.ok) {
      throw new Error('Unauthenticated');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
