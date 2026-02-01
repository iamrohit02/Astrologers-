/**
 * Storage Service
 * Handles persistence of user history (readings, scans, etc.)
 */

const KEYS = {
  HISTORY: 'app_history',
  FAVORITES: 'app_favorites',
  SETTINGS: 'app_settings'
};

export const StorageService = {
  // Save a new history item
  saveHistoryItem: (type, data) => {
    try {
      const item = {
        id: crypto.randomUUID(),
        type, // 'palm', 'tarot', 'horoscope'
        date: new Date().toISOString(),
        data
      };

      const existing = JSON.parse(localStorage.getItem(KEYS.HISTORY) || '[]');
      const updated = [item, ...existing].slice(0, 50); // Keep last 50 items
      
      localStorage.setItem(KEYS.HISTORY, JSON.stringify(updated));
      return item;
    } catch (error) {
      console.error('Failed to save history:', error);
      return null;
    }
  },

  // Get history filtered by type
  getHistory: (type = null) => {
    const all = JSON.parse(localStorage.getItem(KEYS.HISTORY) || '[]');
    if (!type) return all;
    return all.filter(item => item.type === type);
  },

  // Clear history
  clearHistory: () => {
    localStorage.removeItem(KEYS.HISTORY);
  }
};
