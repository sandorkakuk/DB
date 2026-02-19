
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface PopularityData {
  name: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
}

export interface ComparisonMetric {
  feature: string;
  mysql: string;
  mariadb: string;
  winner: 'mysql' | 'mariadb' | 'draw';
}
