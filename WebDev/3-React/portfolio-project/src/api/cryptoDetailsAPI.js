export const fetchCryptoDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      throw error;
    }
  };

