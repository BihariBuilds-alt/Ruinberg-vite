import { Home, TrendingUp, BookOpen, User, Plus } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const bottomNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'feed', label: 'Feed', icon: TrendingUp },
    { id: 'subs', label: 'Subscriptions', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <h2 onClick={() => onViewChange('home')} style={{ cursor: 'pointer' }}>Ruinberg</h2>
        <button onClick={() => alert('Search clicked')}>🔍</button>
      </nav>

      <div className="bottom-nav" style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0.5rem',
        borderTop: '1px solid #333'
      }}>
        {bottomNavItems.slice(0, 2).map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onViewChange(id)} style={{ background: 'none', color: currentView === id ? '#ffcc00' : '#ffd700' }}>
            <Icon size={20} />
            <div>{label}</div>
          </button>
        ))}
        <button onClick={() => onViewChange('creator')} style={{
          backgroundColor: '#ffd700',
          color: '#000',
          borderRadius: '50%',
          padding: '0.75rem',
          marginTop: '-1rem'
        }}>
          <Plus />
        </button>
        {bottomNavItems.slice(2).map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onViewChange(id)} style={{ background: 'none', color: currentView === id ? '#ffcc00' : '#ffd700' }}>
            <Icon size={20} />
            <div>{label}</div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Navigation;
