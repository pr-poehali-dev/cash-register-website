import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function VisitorCounter() {
  const [stats, setStats] = useState<{ today: number; total: number } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/95e7c549-3214-4cab-90fb-7afb32e71f38');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!stats) return null;

  return (
    <div className="flex items-center gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Icon name="Eye" size={16} />
        <span>Сегодня: {stats.today}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Users" size={16} />
        <span>Всего: {stats.total}</span>
      </div>
    </div>
  );
}
