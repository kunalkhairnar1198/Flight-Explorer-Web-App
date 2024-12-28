import { useEffect, useCallback } from 'react';

const useInactive = (logoutHandler, timeout = 300000) => { // 300000 ms = 5 minutes


  const resetTimer = useCallback(() => {
    window.clearTimeout(window.inactivityTimer);

    window.inactivityTimer = window.setTimeout(() => {
      logoutHandler(); 
    }, timeout);
  }, [logoutHandler, timeout]);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      window.clearTimeout(window.inactivityTimer);
    };
  }, [resetTimer]);
};

export default useInactive;
