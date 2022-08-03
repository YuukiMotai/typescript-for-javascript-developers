export {};

// Record<K, T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanjiName: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanjiName: '東京', confirmed_cases: 1960},
  Chiba: { kanjiName: '千葉', confirmed_cases: 249},
  Tottori: { kanjiName: '鳥取', confirmed_cases: 2},
  Shiga: { kanjiName: '滋賀', confirmed_cases: 73}
};