"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from '../contexts/LanguageContext'
import { GlobalOutlined } from '@ant-design/icons'
import { useState, useEffect, useRef } from 'react'

export default function NavBar() {
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const [activeItem, setActiveItem] = useState('/')
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef(null)
  const clickTimeoutRef = useRef(null)
  
  const links = [
    { href: "/", label: t('nav.home'), isLink: true },
    { href: "#skills", label: t('nav.blog'), isLink: false },
    { href: "#projects", label: t('nav.project'), isLink: false },
  ]

  // 检查元素是否在视口中的函数
  const isInViewport = (element, offset = 0) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top <= windowHeight * offset;
  }

  // 更新激活状态的函数
  const updateActiveSection = () => {
    const skills = document.querySelector('#skills');
    const projects = document.querySelector('#projects');
    
    if (window.scrollY < 100) {
      setActiveItem('/');
      return;
    }

    if (isInViewport(skills, 0.4) && (!projects || !isInViewport(projects, 0.4))) {
      setActiveItem('#skills');
    } else if (isInViewport(projects, 0.4)) {
      setActiveItem('#projects');
    }
  }

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        updateActiveSection();
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        updateActiveSection();
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [isScrolling]);

  // 重置到首页
  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('/');
      setIsScrolling(false);
    }
  }, [pathname]);

  // 处理点击事件
  const handleClick = (href, isLink) => {
    setIsScrolling(true);
    
    if (isLink) {
      setActiveItem(href);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      setActiveItem(href);
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = elementRect.height / 3;
      const scrollPosition = absoluteElementTop - middle;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8">
      <nav className="bg-custom-bg/80 backdrop-blur-sm rounded-full px-4 py-2 min-w-[320px]">
        <ul className="flex gap-2 items-center justify-center">
          {links.map(({ href, label, isLink }) => (
            <li key={href} className="relative">
              {isLink ? (
                <Link 
                  href={href}
                  onClick={() => handleClick(href, isLink)}
                  className={`
                    text-base font-mono px-4 py-1 rounded-full inline-block min-w-[80px] text-center
                    transition-colors duration-200
                    ${activeItem === href 
                      ? 'text-[#1a1a1a] font-medium' 
                      : 'text-[#9ca3af] hover:text-[#1a1a1a]'
                    }
                  `}
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(href, isLink)}
                  className={`
                    text-base font-mono px-4 py-1 rounded-full inline-block min-w-[80px] text-center
                    transition-colors duration-200
                    ${activeItem === href 
                      ? 'text-[#1a1a1a] font-medium' 
                      : 'text-[#9ca3af] hover:text-[#1a1a1a]'
                    }
                  `}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
          <li>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="ml-2 p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center text-[#9ca3af] hover:text-[#1a1a1a]"
            >
              <GlobalOutlined className="text-lg" />
              <span className="ml-1 text-sm">{language.toUpperCase()}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}