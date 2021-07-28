export default function useLocalStorage(key) {
  const setItemWithExpiry = (value, ttl) => {
    if (process.browser) {
      try {
        const now = new Date()
        
        const item = {
          value: value,
          expiry: now.getTime() + ttl
        }
        window && window.localStorage.setItem(key, JSON.stringify(item));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getItemWithExpiry = () => {
    if (process.browser) {
      try {
        const itemJSON = window && window.localStorage.getItem(key);
        if (!itemJSON) {
          return null
        }
        
        const item = JSON.parse(itemJSON)
        const now = new Date()

        if (now.getTime() > item.expiry) {
          localStorage.removeItem(key)
          return null
        }

        return item.value
      } catch (error) {
        console.error(error);
      }
    }
  };

  const clearItem = () => {
    if (process.browser) {
      try {
        window && window.localStorage.removeItem(key);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { setItemWithExpiry, getItemWithExpiry, clearItem };
}