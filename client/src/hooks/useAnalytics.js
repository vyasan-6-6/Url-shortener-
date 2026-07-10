import { useState } from 'react';
import { getUrlStats } from '../services/urlService';
import { toast } from 'react-hot-toast';

export const useAnalytics = () => {
  const [activeStatsData, setActiveStatsData] = useState(null);
  const [activeStatsCode, setActiveStatsCode] = useState('');
  const [loadingStatsId, setLoadingStatsId] = useState(null);

  const handleViewStats = async (id, code) => {
    setLoadingStatsId(id);
    setActiveStatsData(null);
    try {
      const responseData = await getUrlStats(code);
      if (responseData.status === 'success') {
        setActiveStatsData(responseData.data);
        setActiveStatsCode(code);
      }
    } catch (error) {
      console.error('Stats loading error:', error);
      toast.error('Failed to load traffic analytics statistics');
    } finally {
      setLoadingStatsId(null);
    }
  };

  const closeStats = () => {
    setActiveStatsData(null);
    setActiveStatsCode('');
  };

  return {
    activeStatsData,
    activeStatsCode,
    loadingStatsId,
    handleViewStats,
    closeStats
  };
};
