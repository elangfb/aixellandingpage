import React, { useState, useCallback } from 'react';
import './TumbuhKembang.css';
import type { TabName, NutritionLog, NutritionItem } from './tumbuh-kembang/types';
import { INITIAL_NUTRITION_LOG } from './tumbuh-kembang/data';
import StatusBar from './tumbuh-kembang/StatusBar';
import HomeScreen from './tumbuh-kembang/HomeScreen';
import GrowthScreen from './tumbuh-kembang/GrowthScreen';
import MilestoneScreen from './tumbuh-kembang/MilestoneScreen';
import NutrisiScreen from './tumbuh-kembang/NutrisiScreen';
import ChatScreen from './tumbuh-kembang/ChatScreen';
import ProfileScreen from './tumbuh-kembang/ProfileScreen';
import BottomNav from './tumbuh-kembang/BottomNav';
import ScanModal from './tumbuh-kembang/ScanModal';
import Toast from './tumbuh-kembang/Toast';

const TumbuhKembang: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabName>('home');
  const [nutritionLog, setNutritionLog] = useState<NutritionLog>({ ...INITIAL_NUTRITION_LOG });
  const [scanOpen, setScanOpen] = useState(false);
  const [scanMealKey, setScanMealKey] = useState('siang');
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
  }, []);

  const hideToast = useCallback(() => setToastVisible(false), []);

  const handleTabChange = useCallback((tab: TabName) => setCurrentTab(tab), []);

  const handleActivity = useCallback(() => {
    showToast('✓ Aktivitas selesai! +50 XP 🎉');
  }, [showToast]);

  const handleDeleteMealItem = useCallback((mealKey: string, idx: number) => {
    setNutritionLog(prev => {
      const updated = { ...prev };
      updated[mealKey] = [...prev[mealKey]];
      updated[mealKey].splice(idx, 1);
      return updated;
    });
    showToast('🗑 Item dihapus dari log');
  }, [showToast]);

  const handleOpenScan = useCallback((mealKey?: string) => {
    setScanMealKey(mealKey || 'siang');
    setScanOpen(true);
  }, []);

  const handleCloseScan = useCallback(() => setScanOpen(false), []);

  const handleAddToLog = useCallback((mealKey: string, item: NutritionItem) => {
    setNutritionLog(prev => {
      const updated = { ...prev };
      updated[mealKey] = [...prev[mealKey], item];
      return updated;
    });
  }, []);

  return (
    <div className="tk-root">
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <div className="wrap">
        <div className="phone">
          <StatusBar />
          <div className="screens">
            <HomeScreen active={currentTab === 'home'} onTabChange={handleTabChange} onActivity={handleActivity} nutritionLog={nutritionLog} />
            <GrowthScreen active={currentTab === 'growth'} />
            <MilestoneScreen active={currentTab === 'milestone'} onToast={showToast} />
            <NutrisiScreen active={currentTab === 'nutrisi'} nutritionLog={nutritionLog} onDeleteMealItem={handleDeleteMealItem} onOpenScan={handleOpenScan} />
            <ChatScreen active={currentTab === 'chat'} />
            <ProfileScreen active={currentTab === 'profile'} onToast={showToast} />
          </div>
          <BottomNav currentTab={currentTab} onTabChange={handleTabChange} />
          <ScanModal open={scanOpen} targetMealKey={scanMealKey} onClose={handleCloseScan} onAddToLog={handleAddToLog} onToast={showToast} />
          <Toast message={toastMsg} visible={toastVisible} onHide={hideToast} />
        </div>
      </div>
    </div>
  );
};

export default TumbuhKembang;
