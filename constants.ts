
import { TimelineEvent, PopularityData, ComparisonMetric } from './types';

export const DATABASE_HISTORY: TimelineEvent[] = [
  {
    year: '1960 - 1968',
    title: 'A Navigációs Korszak',
    description: 'Példák: IBM IMS, GE IDS. Az adatbázisok hőskora, ahol az adatok fa-struktúrában (hierarchikus) vagy hálózatban helyezkedtek el. A fejlesztőknek manuálisan kellett "navigálniuk" az adatok között kódból. Ha a tárolási szerkezet változott, a programok összeomlottak.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    year: '1970 - 1979',
    title: 'A Relációs Modell Hajnala',
    description: 'Példák: IBM System R, Oracle V2, Ingres. E.F. Codd elmélete alapján az adatok táblákba kerültek. Megszületett a függetlenség a fizikai tárolástól. Az SQL nyelv ekkor kezdett formálódni (SEQUEL néven), forradalmasítva a lekérdezéseket.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    year: '1980 - 1990',
    title: 'Kereskedelmi Dominancia és PC-k',
    description: 'Példák: IBM DB2, Sybase, Microsoft SQL Server, dBase, FoxPro. Az SQL iparági szabvánnyá vált. Az adatbázisok beköltöztek az irodákba az asztali számítógépeken keresztül (Access, dBase), lehetővé téve a kkv-k számára is a professzionális adatkezelést.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    year: '1995 - 2005',
    title: 'Nyílt Forráskód és Web',
    description: 'Példák: MySQL, PostgreSQL, SQLite. A dotcom robbanás idején a MySQL lett a de facto szabvány a weboldalak mögött. Megjelent az ACID (Atomicity, Consistency, Isolation, Durability) elv szigorú betartása és a replikáció.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    year: '2008 - 2015',
    title: 'NoSQL és Horizontális Skálázás',
    description: 'Példák: MongoDB, Cassandra, Redis, Neo4j. Az óriási adatmennyiség (Big Data) miatt a merev sémákat felváltották a dokumentumok és kulcs-érték párok. A cél a sebesség és az elosztott működés volt több ezer szerveren.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200'
  },
  {
    year: '2016 - Napjaink',
    title: 'Cloud-Native és Vektoros Korszak',
    description: 'Példák: Amazon Aurora, Snowflake, Pinecone, Milvus. Az adatbázisok felhő-alapú szolgáltatássá váltak (SaaS). A legújabb trend a vektoros adatbázisok, amelyek az AI modellek (pl. ChatGPT) memóriájaként szolgálnak a szemantikus kereséshez.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PERFORMANCE_COMPARISON = [
  { era: '1970s (Mainframe)', throughput: 'Több másodperc / lekérdezés', capacity: 'Megabájtok', availability: '90% (Heti leállások)', scale: 'Vertikális (Nagyobb gép)' },
  { era: '1990s (Client-Server)', throughput: 'Századmásodpercek', capacity: 'Gigabájtok', availability: '99% (Napi mentések)', scale: 'Vertikális' },
  { era: '2024 (Cloud-Native)', throughput: 'Mikroszekundumok', capacity: 'Petabájtok', availability: '99.999% (Globális)', scale: 'Horizontális (Auto-scaling)' }
];

export const CURRENT_POPULARITY: PopularityData[] = [
  { name: 'Oracle', score: 1250, trend: 'down' },
  { name: 'MySQL', score: 1180, trend: 'stable' },
  { name: 'PostgreSQL', score: 650, trend: 'up' },
  { name: 'SQL Server', score: 920, trend: 'stable' },
  { name: 'MongoDB', score: 480, trend: 'up' },
  { name: 'Redis', score: 320, trend: 'up' },
  { name: 'MariaDB', score: 110, trend: 'up' }
];

export const HISTORICAL_TRENDS = [
  { year: '2015', mysql: 1300, postgres: 300, oracle: 1450, mongodb: 250 },
  { year: '2017', mysql: 1280, postgres: 400, oracle: 1400, mongodb: 320 },
  { year: '2019', mysql: 1250, postgres: 500, oracle: 1350, mongodb: 400 },
  { year: '2021', mysql: 1200, postgres: 580, oracle: 1300, mongodb: 450 },
  { year: '2024', mysql: 1180, postgres: 650, oracle: 1250, mongodb: 480 },
];

export const COMPARISON_DATA: ComparisonMetric[] = [
  {
    feature: 'Teljesítmény (Complex Queries)',
    mysql: 'Kiváló az egyszerű lekérdezésekhez.',
    mariadb: 'Optimalizált lekérdezés-tervező, gyorsabb komplex join-ok esetén.',
    winner: 'mariadb'
  },
  {
    feature: 'Memóriaigény',
    mysql: 'Kisebb alapterület alapértelmezett beállításokkal.',
    mariadb: 'Potenciálisan magasabb, de jobban skálázható nagy memórián.',
    winner: 'draw'
  },
  {
    feature: 'Tároló Motorok',
    mysql: 'Főleg InnoDB és MyISAM.',
    mariadb: 'Aria, ColumnStore, MyRocks és még sok más specializált motor.',
    winner: 'mariadb'
  },
  {
    feature: 'Licencelés',
    mysql: 'Kettős licenc (GPL és Kereskedelmi).',
    mariadb: 'Tisztán nyílt forráskód (GPL).',
    winner: 'mariadb'
  },
  {
    feature: 'JSON Támogatás',
    mysql: 'Natív JSON adattípus és hatékony indexelés.',
    mariadb: 'Hosszú szövegként tárolja, de gazdag függvénykészlettel rendelkezik.',
    winner: 'mysql'
  },
  {
    feature: 'Thread Pooling',
    mysql: 'Csak a fizetős (Enterprise) verzióban érhető el.',
    mariadb: 'Beépített funkció az ingyenes verzióban is.',
    winner: 'mariadb'
  }
];

export const NOSQL_COMPARISON = [
  {
    feature: 'Adatmodell',
    mongodb: 'Dokumentum-alapú (JSON/BSON). Rugalmas séma.',
    cassandra: 'Széles oszlop (Wide-column) modell. Tábla-orientált, de nincs fix séma.',
    usecase: 'MongoDB: Gyors prototípus, CMS. Cassandra: Szenzoradatok, Logok.'
  },
  {
    feature: 'Skálázhatóság',
    mongodb: 'Horizontális (Sharding) és Vertikális.',
    cassandra: 'Lineáris horizontális skálázhatóság (Masterless architektúra).',
    usecase: 'MongoDB: Webes appok. Cassandra: Hatalmas adatmennyiség (Petabyte).'
  },
  {
    feature: 'Konzisztencia',
    mongodb: 'Erős konzisztencia (alapértelmezett).',
    cassandra: 'Választható (Eventual Consistency). Magas rendelkezésre állás.',
    usecase: 'MongoDB: Tranzakciók (ACID támogatással). Cassandra: Globális elosztottság.'
  },
  {
    feature: 'Lekérdezési nyelv',
    mongodb: 'MQL (MongoDB Query Language) - JSON alapú.',
    cassandra: 'CQL (Cassandra Query Language) - SQL-szerű.',
    usecase: 'MongoDB: Flexibilis szűrések. Cassandra: Strukturáltabb, de korlátozott join-ok.'
  }
];
