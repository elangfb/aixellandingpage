import React from 'react';

const StatusBar: React.FC = () => (
  <div className="sbar">
    <span className="sbar-t">9:41</span>
    <div className="sbar-i">
      <span style={{ letterSpacing: '1px', fontSize: '11px' }}>●●●</span>
      <span style={{ marginLeft: '3px', fontSize: '11px' }}>WiFi</span>
      <span style={{ marginLeft: '3px' }}>🔋</span>
    </div>
  </div>
);

export default StatusBar;
