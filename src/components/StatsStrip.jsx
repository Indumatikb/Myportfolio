import React from 'react';
import { Code2, Rocket, Award, GraduationCap, Flame, Sparkles } from 'lucide-react';
import './StatsStrip.css';

const STATS = [
  {
    icon: <Code2 size={22} className="stat-icon" />,
    value: '8+',
    label: 'Core Languages & Tools',
    sub: 'Python, Java, C, JS & Web'
  },
  {
    icon: <Rocket size={22} className="stat-icon" />,
    value: '1',
    label: 'Live Startup Platform',
    sub: 'EventLedger.me in Production'
  },
  {
    icon: <GraduationCap size={22} className="stat-icon" />,
    value: '2027',
    label: 'B.E. Computer Science',
    sub: 'VTU Affiliated Engineering'
  },
  {
    icon: <Flame size={22} className="stat-icon" />,
    value: '100%',
    label: 'Hands-on Grit',
    sub: '"Learn. Build. Break. Fix."'
  }
];

const StatsStrip = () => {
  return (
    <div className="stats-strip-container">
      <div className="container">
        <div className="stats-strip-grid">
          {STATS.map((stat, i) => (
            <div key={i} className="stat-card glass-panel">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-text-content">
                <span className="stat-number gradient-text">{stat.value}</span>
                <span className="stat-title">{stat.label}</span>
                <span className="stat-subtext">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
