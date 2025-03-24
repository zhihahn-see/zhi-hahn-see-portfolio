
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    scrollTriggers.forEach(trigger => {
      observer.observe(trigger);
    });
    
    return () => {
      scrollTriggers.forEach(trigger => {
        observer.unobserve(trigger);
      });
    };
  }, []);
}

export function useElementInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}

interface TypewriterOptions {
  startDelay?: number;
}

export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { startDelay = 0 } = options;
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (startDelay > 0 && currentIndex === 0) {
      timeout = setTimeout(() => {
        setCurrentIndex(1);
      }, startDelay);
      return () => clearTimeout(timeout);
    }
    
    if (currentIndex > 0 && currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    } else if (currentIndex > text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, startDelay]);

  return { displayText, isComplete };
}
