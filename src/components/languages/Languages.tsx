// Next
import Image from 'next/image';

// React
import { useState, useEffect, useCallback } from 'react';

// Assets
import next from 'assets/icons/next.svg';

// Styles
import * as S from './Languages.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { languages } from './Languages.constants';

const Languages = () => {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => {
      const newIndex = prevIndex === 0 ? languages.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex => {
      const newIndex = prevIndex === languages.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 560 ?? false);
  }, [setIsMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <S.Container>
      <S.Carrousel onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="wrapper">
          {!isMobile && (
            <button aria-label="Anterior" onClick={prevSlide}>
              <Image src={next} alt="next" draggable="false" />
            </button>
          )}
          <S.Container_Itens>
            {languages.map((innerArray, index) => (
              <S.Itens
                key={index}
                style={{
                  display: !isMobile ? (currentSlideIndex === index ? '' : 'none') : 'flex',
                }}
              >
                {innerArray.map((languages, innerIndex) => (
                  <S.Item key={innerIndex}>
                    <Image src={languages.src} alt={languages.alt} draggable="false" />
                  </S.Item>
                ))}
              </S.Itens>
            ))}
          </S.Container_Itens>
          {!isMobile && (
            <button aria-label="Próximo" onClick={nextSlide}>
              <Image src={next} alt="next" draggable="false" />
            </button>
          )}
        </div>
      </S.Carrousel>
    </S.Container>
  );
};

export default Languages;
