import { useState } from 'react';
import { getAiAliases, getAiInsights } from '../services/aiService';
import { toast } from 'react-hot-toast';

export const useAiFeatures = () => {
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [generatingAliases, setGeneratingAliases] = useState(false);
  const [activeInsightsText, setActiveInsightsText] = useState('');
  const [activeInsightsCode, setActiveInsightsCode] = useState('');
  const [loadingInsightsId, setLoadingInsightsId] = useState(null);

  const handleGenerateAiAliases = async (originalUrl) => {
    if (!originalUrl) {
      toast.error('Please enter a destination URL first');
      return;
    }
    setGeneratingAliases(true);
    setAiSuggestions([]);
    try {
      const responseData = await getAiAliases(originalUrl);
      if (responseData.status === 'success') {
        setAiSuggestions(responseData.data);
        toast.success('AI suggestions loaded!');
      }
    } catch (error) {
      console.error('AI alias error:', error);
      toast.error('Failed to generate AI alias suggestions');
    } finally {
      setGeneratingAliases(false);
    }
  };

  const handleViewInsights = async (id, code) => {
    setLoadingInsightsId(id);
    setActiveInsightsText('');
    try {
      const responseData = await getAiInsights(id);
      if (responseData.status === 'success') {
        setActiveInsightsText(responseData.data);
        setActiveInsightsCode(code);
        toast.success('AI insights generated!');
      }
    } catch (error) {
      console.error('Insights generation error:', error);
      const errMsg = error.response?.data?.message || 'Failed to generate AI analytics insights';
      toast.error(errMsg);
    } finally {
      setLoadingInsightsId(null);
    }
  };

  const closeInsights = () => {
    setActiveInsightsText('');
    setActiveInsightsCode('');
  };

  const clearSuggestions = () => {
    setAiSuggestions([]);
  };

  return {
    aiSuggestions,
    generatingAliases,
    activeInsightsText,
    activeInsightsCode,
    loadingInsightsId,
    handleGenerateAiAliases,
    handleViewInsights,
    closeInsights,
    clearSuggestions
  };
};
