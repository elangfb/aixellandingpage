import React from 'react';
import type { TabName } from './types';

interface BottomNavProps {
  currentTab: TabName;
  onTabChange: (tab: TabName) => void;
}

const TABS: { key: TabName; label: string; icon: React.ReactNode }[] = [
  {
    key: 'home', label: 'Beranda',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
        <rect x="17" y="4.5" width="3" height="5" rx="1" fill="currentColor" opacity=".5" />
        <circle cx="17.5" cy="3.5" r="1" fill="currentColor" opacity=".35" />
        <circle cx="19.2" cy="3" r=".8" fill="currentColor" opacity=".25" />
        <path d="M2 13L12 3L22 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="5" y="12" width="14" height="10" rx="2" fill="currentColor" opacity=".12" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10.5" y="16.5" width="3" height="5.5" rx="1.2" fill="currentColor" opacity=".6" />
        <circle cx="7.8" cy="15.5" r="2.2" fill="white" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="7.2" cy="15.1" r=".38" fill="currentColor" />
        <circle cx="8.4" cy="15.1" r=".38" fill="currentColor" />
        <path d="M7.3 16.4 Q7.8 16.9 8.3 16.4" stroke="currentColor" strokeWidth=".6" strokeLinecap="round" fill="none" />
        <path d="M11.5 18.8 Q12 18.2 12.5 18.8 Q13 18.2 13.5 18.8 Q13.7 19.3 12 20.1 Q10.3 19.3 11.5 18.8Z" fill="currentColor" opacity=".7" />
      </svg>
    ),
  },
  {
    key: 'growth', label: 'Tumbuh',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
        <rect x="18" y="3" width="4" height="19" rx="1.5" fill="currentColor" opacity=".2" stroke="currentColor" strokeWidth="1" />
        <line x1="18" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="1" opacity=".6" />
        <line x1="18" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="1.2" opacity=".8" />
        <line x1="18" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1" opacity=".6" />
        <line x1="18" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.2" opacity=".8" />
        <path d="M10 21 Q10 14 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 16 Q5.5 13.5 6 8 Q11 10 10 16Z" fill="currentColor" opacity=".5" />
        <path d="M10 12 Q14.5 9 14 4 Q9 7 10 12Z" fill="currentColor" opacity=".7" />
        <circle cx="10" cy="9" r="1.4" fill="currentColor" />
        <path d="M5 21 Q10 19.5 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".4" />
        <path d="M14 5 L14.5 3.5 L15 5 L16.5 5 L15.3 6 L15.8 7.5 L14.5 6.6 L13.2 7.5 L13.7 6 L12.5 5Z" fill="currentColor" opacity=".55" />
      </svg>
    ),
  },
  {
    key: 'nutrisi', label: 'Nutrisi',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
        <circle cx="12" cy="13" r="8" fill="currentColor" opacity=".1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="5.2" fill="none" stroke="currentColor" strokeWidth="1" opacity=".4" />
        <line x1="7" y1="4" x2="7" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="5.8" y1="4" x2="5.8" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="8.2" y1="4" x2="8.2" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5.8 7 Q7 8.5 8.2 7" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <line x1="7" y1="8.5" x2="7" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 4 Q19.5 5.5 17 9 L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M12 16 Q10.5 13 12 11 Q13.5 13 12 16Z" fill="currentColor" opacity=".7" />
        <line x1="12" y1="11" x2="12" y2="16" stroke="currentColor" strokeWidth=".7" opacity=".5" />
        <circle cx="19" cy="4" r=".9" fill="currentColor" opacity=".5" />
        <circle cx="21" cy="7" r=".7" fill="currentColor" opacity=".4" />
        <path d="M20 4.5 L20.5 3 L21 4.5 L22.5 5 L21 5.5 L20.5 7 L20 5.5 L18.5 5Z" fill="currentColor" opacity=".5" />
      </svg>
    ),
  },
  {
    key: 'milestone', label: 'Milestone',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
        <path d="M12 2 L14.2 8.2 L21 8.2 L15.5 12.4 L17.7 18.8 L12 14.7 L6.3 18.8 L8.5 12.4 L3 8.2 L9.8 8.2 Z" fill="currentColor" opacity=".88" stroke="currentColor" strokeWidth=".5" strokeLinejoin="round" />
        <circle cx="10.3" cy="11" r=".75" fill="white" />
        <circle cx="13.7" cy="11" r=".75" fill="white" />
        <ellipse cx="9.3" cy="12.2" rx=".9" ry=".55" fill="white" opacity=".45" />
        <ellipse cx="14.7" cy="12.2" rx=".9" ry=".55" fill="white" opacity=".45" />
        <path d="M10.5 13.3 Q12 14.8 13.5 13.3" stroke="white" strokeWidth=".85" strokeLinecap="round" fill="none" />
        <path d="M4 8.5 Q2.5 8 2 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".38" />
        <path d="M20 8.5 Q21.5 8 22 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".38" />
        <circle cx="3" cy="3" r=".9" fill="currentColor" opacity=".35" />
        <circle cx="21" cy="3" r=".75" fill="currentColor" opacity=".28" />
      </svg>
    ),
  },
  {
    key: 'chat', label: 'Tanya AI',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
        <path d="M4 8 Q4 4 8 4 L17 4 Q21 4 21 8 L21 14 Q21 18 17 18 L14 18 L10 22 L10 18 L7 18 Q4 18 4 14 Z" fill="currentColor" opacity=".13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="7.5" cy="5" r="2.3" fill="currentColor" opacity=".18" />
        <circle cx="12" cy="4.3" r="2.6" fill="currentColor" opacity=".18" />
        <circle cx="16.5" cy="5" r="2.3" fill="currentColor" opacity=".18" />
        <circle cx="9" cy="10.2" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10.4 10.2 Q13 10.2 13 13 Q13 15.5 14.8 15.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <circle cx="15.8" cy="16" r="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15.8" cy="16" r=".75" fill="currentColor" opacity=".6" />
        <rect x="16.5" y="6.5" width="4.5" height="4.5" rx="1.4" fill="currentColor" opacity=".7" />
        <path d="M18.3 8 L18.3 9.8 M17.4 8.9 L19.2 8.9" stroke="white" strokeWidth=".9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'profile', label: 'Profil',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
        <path d="M9.5 5.5 Q9.5 2.5 12.5 3 Q15.5 2.5 15.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity=".55" />
        <path d="M7.5 6 Q6.5 3.5 8.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".4" />
        <circle cx="12.5" cy="10" r="5.5" fill="currentColor" opacity=".1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10.5" cy="9.5" r="1.1" fill="currentColor" />
        <circle cx="14.5" cy="9.5" r="1.1" fill="currentColor" />
        <circle cx="10.9" cy="9.1" r=".38" fill="white" />
        <circle cx="14.9" cy="9.1" r=".38" fill="white" />
        <ellipse cx="9.2" cy="11" rx="1.1" ry=".65" fill="currentColor" opacity=".28" />
        <ellipse cx="15.8" cy="11" rx="1.1" ry=".65" fill="currentColor" opacity=".28" />
        <path d="M10.2 12.2 Q12.5 14 14.8 12.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" />
        <path d="M4 23 Q4 17.5 12.5 17.5 Q21 17.5 21 23" fill="currentColor" opacity=".13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M20 7 L20.5 5.5 L21 7 L22.5 7 L21.3 8 L21.8 9.5 L20.5 8.5 L19.2 9.5 L19.7 8 L18.5 7Z" fill="currentColor" opacity=".45" />
      </svg>
    ),
  },
];

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  return (
    <nav className="bnav">
      {TABS.map(tab => {
        const isOn = currentTab === tab.key;
        return (
          <button
            key={tab.key}
            className={`nb${isOn ? ' on' : ''}`}
            id={`nb-${tab.key}`}
            onClick={() => onTabChange(tab.key)}
          >
            <div className="nb-icon" style={{ color: isOn ? 'white' : 'var(--text3)' }}>
              {tab.icon}
            </div>
            <span className="nb-lbl">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
