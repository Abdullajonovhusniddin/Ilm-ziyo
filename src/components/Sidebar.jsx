import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import styles from './Sidebar.module.css';
import { 
  Home, ShoppingCart, BookOpen, Wrench, DollarSign, Gift, Users, Handshake, Settings, LogOut, X, GraduationCap
} from 'lucide-react';

const Sidebar = ({ onOpenManagement, isOpen, onClose }) => {
  const { logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Bosh sahifa', icon: <Home size={20} /> },
    { path: '/sales', label: 'Sotuv boʻlimi', icon: <ShoppingCart size={20} /> },
    { path: '/education', label: 'Oʻquv boʻlimi', icon: <BookOpen size={20} /> },
    { path: '/technical', label: 'Texnik boʻlim', icon: <Wrench size={20} /> },
    { path: '/finance', label: 'Moliya nazorati', icon: <DollarSign size={20} /> },
    { path: '/gifts', label: 'Sovgʻalar', icon: <Gift size={20} /> },
    { path: '/hr', label: 'HR boʻlimi', icon: <Users size={20} /> },
    { path: '/partners', label: 'Hamkorlarimiz', icon: <Handshake size={20} /> },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Qorakol School" className={styles.logoImg} />
        <button className={styles.mobileCloseBtn} onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        
        <button className={styles.navItem} onClick={onOpenManagement}>
          <Settings size={20} />
          <span>Boshqarish</span>
        </button>
      </nav>

      <div className={styles.footer}>
        <button onClick={logout} className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>Chiqish</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
