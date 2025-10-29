import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import PageRouter from './components/PageRouter.jsx';
import { ToastContainer } from './components/Toast.jsx';
import { useNavigation } from './hooks/useNavigation.jsx';
import { useToast } from './hooks/useToast.jsx';
import './styles/App.css';

// Create a context for toast functionality
export const ToastContext = React.createContext();

/**
 * Main App Component
 * Follows Single Responsibility Principle - orchestrates the application
 * Follows Dependency Inversion Principle - depends on abstractions (hooks)
 */
function App() {
  const { activeSection, navigateTo } = useNavigation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toast = useToast();

  return (
    <ToastContext.Provider value={toast}>
      <div className="App">
        <Header activeSection={activeSection} onShowSection={navigateTo} />
        <Sidebar 
          activeSection={activeSection} 
          onNavigate={navigateTo}
          onCollapsedChange={setIsSidebarCollapsed}
        />
        <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <PageRouter activeSection={activeSection} />
          <Footer onShowSection={navigateTo} />
        </div>
        <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />
      </div>
    </ToastContext.Provider>
  );
}

export default App;
