import { useState } from 'react';
import { getQrCode } from '../services/urlService';
import { toast } from 'react-hot-toast';

export const useQrCode = () => {
  const [activeQrUrl, setActiveQrUrl] = useState(null);
  const [activeQrCode, setActiveQrCode] = useState('');
  const [loadingQrId, setLoadingQrId] = useState(null);

  const handleViewQr = async (id, code) => {
    setLoadingQrId(id);
    try {
      const responseData = await getQrCode(id);
      if (responseData.status === 'success') {
        setActiveQrUrl(responseData.data.qrCodeDataUrl);
        setActiveQrCode(responseData.data.shortUrl);
      }
    } catch (error) {
      console.error('QR Code Generation Error:', error);
      toast.error('Failed to generate QR Code');
    } finally {
      setLoadingQrId(null);
    }
  };

  const closeQr = () => {
    setActiveQrUrl(null);
    setActiveQrCode('');
  };

  return {
    activeQrUrl,
    activeQrCode,
    loadingQrId,
    handleViewQr,
    closeQr
  };
};
