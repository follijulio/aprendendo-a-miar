import { useState, useEffect } from 'react';

interface UseTimeoutOptions {
  duration: number;
  onTimeout?: () => void;
}

const useTime = ({ duration, onTimeout }: UseTimeoutOptions): [boolean, () => void] => {
  const [time, setTime] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTime(false);
      onTimeout?.();
    }, duration);

    
    return () => {
      clearTimeout(timeoutId);
      setTime(false);
    };
  }, [duration, onTimeout]);

  return [time, () => setTime(true)];
};

export default useTime;
