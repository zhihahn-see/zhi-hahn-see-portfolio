
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
  const { startDelay = 0 } = options;
  
  useEffect(() => {
    let currentIndex = 0;
    setDisplayText('');
    
    // Initial delay before starting to type
    const initialTimeout = setTimeout(() => {
      // Start typing after initial delay
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);
      
      return () => clearInterval(typingInterval);
    }, startDelay);
    
    return () => clearTimeout(initialTimeout);
  }, [text, startDelay]);

  return { displayText };
}
