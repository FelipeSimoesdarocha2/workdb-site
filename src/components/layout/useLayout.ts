// React
import { useState, useEffect, useCallback } from 'react';

// i18n
import useTranslations from 'i18n';

// Constants
import { sub_menus } from './Layout.constants';

export const useLayout = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isMidle, setIsMidle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cookieModal, setCookieModal] = useState(false);

  const t = useTranslations();

  const handleOpenMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleResize = useCallback(() => {
    setIsMidle(window.innerWidth < 1101 ?? false);
    setIsMobile(window.innerWidth < 560 ?? false);

    if (isMidle) {
      setIsMenu(false);
    }
  }, [setIsMobile, setIsMidle, isMidle]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    t,
    isMenu,
    isMidle,
    isMobile,
    sub_menus,
    cookieModal,
    setCookieModal,
    handleOpenMenu,
  };
};
