/**
 * Ethiopian Calendar Utility & Date Formatter
 * Supports exact date mapping for Sambee's Summer Productive Sprint:
 * Start: Monday, August 10, 2026 (ነሐሴ 4, 2018 ዓ.ም.)
 * End: Ethiopian September 1 / Meskerem 1, 2019 E.C. (Friday, September 11, 2026 / መስከረም 1, 2019 ዓ.ም. — Enkutatash 🌼)
 * Total Sprint Duration: 33 Days
 */

const ETHIOPIAN_MONTHS_AMHARIC = [
  'መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት',
  'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'
];

const ETHIOPIAN_MONTHS_EN = [
  'Meskerem', 'Tikimt', 'Hidar', 'Tahsas', 'Tir', 'Yekatit',
  'Megabit', 'Miazia', 'Ginbot', 'Sene', 'Hamle', 'Nehase', 'Pagume'
];

const SPRINT_START_GREGORIAN = '2026-08-10'; // Monday, August 10, 2026
const SPRINT_END_GREGORIAN = '2026-09-11';   // Friday, September 11, 2026 (Meskerem 1 / Ethiopian Sep 1)
const SPRINT_TOTAL_DAYS = 33;

/**
 * Pre-computed mapping for the 33 sprint days (Aug 10, 2026 – Sep 11, 2026)
 */
const SPRINT_DAY_MAPPINGS = [
  { day: 1,  dateStr: '2026-08-10', dayName: 'Mon', gDate: 'Aug 10', ethMonth: 'ነሐሴ', ethDay: 4,  ethYear: 2018, ethEn: 'Nehase 4',  label: 'Kickoff Monday' },
  { day: 2,  dateStr: '2026-08-11', dayName: 'Tue', gDate: 'Aug 11', ethMonth: 'ነሐሴ', ethDay: 5,  ethYear: 2018, ethEn: 'Nehase 5',  label: 'Velocity Push' },
  { day: 3,  dateStr: '2026-08-12', dayName: 'Wed', gDate: 'Aug 12', ethMonth: 'ነሐሴ', ethDay: 6,  ethYear: 2018, ethEn: 'Nehase 6',  label: 'Deep Grind' },
  { day: 4,  dateStr: '2026-08-13', dayName: 'Thu', gDate: 'Aug 13', ethMonth: 'ነሐሴ', ethDay: 7,  ethYear: 2018, ethEn: 'Nehase 7',  label: 'Core Systems' },
  { day: 5,  dateStr: '2026-08-14', dayName: 'Fri', gDate: 'Aug 14', ethMonth: 'ነሐሴ', ethDay: 8,  ethYear: 2018, ethEn: 'Nehase 8',  label: 'Friday Focus' },
  { day: 6,  dateStr: '2026-08-15', dayName: 'Sat', gDate: 'Aug 15', ethMonth: 'ነሐሴ', ethDay: 9,  ethYear: 2018, ethEn: 'Nehase 9',  label: 'Weekend Sprint' },
  { day: 7,  dateStr: '2026-08-16', dayName: 'Sun', gDate: 'Aug 16', ethMonth: 'ነሐሴ', ethDay: 10, ethYear: 2018, ethEn: 'Nehase 10', label: 'Week 1 Review' },

  { day: 8,  dateStr: '2026-08-17', dayName: 'Mon', gDate: 'Aug 17', ethMonth: 'ነሐሴ', ethDay: 11, ethYear: 2018, ethEn: 'Nehase 11', label: 'Week 2 Ignition' },
  { day: 9,  dateStr: '2026-08-18', dayName: 'Tue', gDate: 'Aug 18', ethMonth: 'ነሐሴ', ethDay: 12, ethYear: 2018, ethEn: 'Nehase 12', label: 'Backend Push' },
  { day: 10, dateStr: '2026-08-19', dayName: 'Wed', gDate: 'Aug 19', ethMonth: 'ነሐሴ', ethDay: 13, ethYear: 2018, ethEn: 'Nehase 13', label: 'DSA Deep Dive' },
  { day: 11, dateStr: '2026-08-20', dayName: 'Thu', gDate: 'Aug 20', ethMonth: 'ነሐሴ', ethDay: 14, ethYear: 2018, ethEn: 'Nehase 14', label: 'Product Flow' },
  { day: 12, dateStr: '2026-08-21', dayName: 'Fri', gDate: 'Aug 21', ethMonth: 'ነሐሴ', ethDay: 15, ethYear: 2018, ethEn: 'Nehase 15', label: 'Mid-Month Lock' },
  { day: 13, dateStr: '2026-08-22', dayName: 'Sat', gDate: 'Aug 22', ethMonth: 'ነሐሴ', ethDay: 16, ethYear: 2018, ethEn: 'Nehase 16', label: 'Weekend Craft' },
  { day: 14, dateStr: '2026-08-23', dayName: 'Sun', gDate: 'Aug 23', ethMonth: 'ነሐሴ', ethDay: 17, ethYear: 2018, ethEn: 'Nehase 17', label: 'Week 2 Review' },

  { day: 15, dateStr: '2026-08-24', dayName: 'Mon', gDate: 'Aug 24', ethMonth: 'ነሐሴ', ethDay: 18, ethYear: 2018, ethEn: 'Nehase 18', label: 'Week 3 Acceleration' },
  { day: 16, dateStr: '2026-08-25', dayName: 'Tue', gDate: 'Aug 25', ethMonth: 'ነሐሴ', ethDay: 19, ethYear: 2018, ethEn: 'Nehase 19', label: 'System Design' },
  { day: 17, dateStr: '2026-08-26', dayName: 'Wed', gDate: 'Aug 26', ethMonth: 'ነሐሴ', ethDay: 20, ethYear: 2018, ethEn: 'Nehase 20', label: 'Fintech Pipelines' },
  { day: 18, dateStr: '2026-08-27', dayName: 'Thu', gDate: 'Aug 27', ethMonth: 'ነሐሴ', ethDay: 21, ethYear: 2018, ethEn: 'Nehase 21', label: 'DSA Patterns' },
  { day: 19, dateStr: '2026-08-28', dayName: 'Fri', gDate: 'Aug 28', ethMonth: 'ነሐሴ', ethDay: 22, ethYear: 2018, ethEn: 'Nehase 22', label: 'Endurance Check' },
  { day: 20, dateStr: '2026-08-29', dayName: 'Sat', gDate: 'Aug 29', ethMonth: 'ነሐሴ', ethDay: 23, ethYear: 2018, ethEn: 'Nehase 23', label: 'Creative Design' },
  { day: 21, dateStr: '2026-08-30', dayName: 'Sun', gDate: 'Aug 30', ethMonth: 'ነሐሴ', ethDay: 24, ethYear: 2018, ethEn: 'Nehase 24', label: 'Week 3 Review' },

  { day: 22, dateStr: '2026-08-31', dayName: 'Mon', gDate: 'Aug 31', ethMonth: 'ነሐሴ', ethDay: 25, ethYear: 2018, ethEn: 'Nehase 25', label: 'August Finale' },
  { day: 23, dateStr: '2026-09-01', dayName: 'Tue', gDate: 'Sep 01', ethMonth: 'ነሐሴ', ethDay: 26, ethYear: 2018, ethEn: 'Nehase 26', label: 'September Kickoff' },
  { day: 24, dateStr: '2026-09-02', dayName: 'Wed', gDate: 'Sep 02', ethMonth: 'ነሐሴ', ethDay: 27, ethYear: 2018, ethEn: 'Nehase 27', label: 'Peak Consistency' },
  { day: 25, dateStr: '2026-09-03', dayName: 'Thu', gDate: 'Sep 03', ethMonth: 'ነሐሴ', ethDay: 28, ethYear: 2018, ethEn: 'Nehase 28', label: 'Nehase Mastery' },
  { day: 26, dateStr: '2026-09-04', dayName: 'Fri', gDate: 'Sep 04', ethMonth: 'ነሐሴ', ethDay: 29, ethYear: 2018, ethEn: 'Nehase 29', label: 'Polishing Deliverables' },
  { day: 27, dateStr: '2026-09-05', dayName: 'Sat', gDate: 'Sep 05', ethMonth: 'ነሐሴ', ethDay: 30, ethYear: 2018, ethEn: 'Nehase 30', label: 'Nehase Finale (30)' },
  { day: 28, dateStr: '2026-09-06', dayName: 'Sun', gDate: 'Sep 06', ethMonth: 'ጳጉሜ', ethDay: 1,  ethYear: 2018, ethEn: 'Pagume 1',  label: 'ጳጉሜ 1 — The 13th Month 🌟' },

  { day: 29, dateStr: '2026-09-07', dayName: 'Mon', gDate: 'Sep 07', ethMonth: 'ጳጉሜ', ethDay: 2,  ethYear: 2018, ethEn: 'Pagume 2',  label: 'ጳጉሜ 2 — Power Surge' },
  { day: 30, dateStr: '2026-09-08', dayName: 'Tue', gDate: 'Sep 08', ethMonth: 'ጳጉሜ', ethDay: 3,  ethYear: 2018, ethEn: 'Pagume 3',  label: 'ጳጉሜ 3 — System Mastery' },
  { day: 31, dateStr: '2026-09-09', dayName: 'Wed', gDate: 'Sep 09', ethMonth: 'ጳጉሜ', ethDay: 4,  ethYear: 2018, ethEn: 'Pagume 4',  label: 'ጳጉሜ 4 — Final Polish' },
  { day: 32, dateStr: '2026-09-10', dayName: 'Thu', gDate: 'Sep 10', ethMonth: 'ጳጉሜ', ethDay: 5,  ethYear: 2018, ethEn: 'Pagume 5',  label: 'ጳጉሜ 5 — Ethiopian New Year Eve 🕯️' },
  { day: 33, dateStr: '2026-09-11', dayName: 'Fri', gDate: 'Sep 11', ethMonth: 'መስከረም', ethDay: 1, ethYear: 2019, ethEn: 'Meskerem 1', label: 'መስከረም 1 — Enkutatash 🌼 (Ethiopian Sep 1) 🏆' }
];

/**
 * Get sprint day metadata by Day number (1..33)
 */
function getSprintDayInfo(dayNumber) {
  const day = Math.max(1, Math.min(SPRINT_TOTAL_DAYS, dayNumber));
  return SPRINT_DAY_MAPPINGS[day - 1] || SPRINT_DAY_MAPPINGS[0];
}

/**
 * Format dual Gregorian and Ethiopian date string
 */
function formatDualDate(dayNumber) {
  const info = getSprintDayInfo(dayNumber);
  return `${info.dayName}, ${info.gDate} (${info.ethMonth} ${info.ethDay})`;
}

/**
 * Get full Ethiopian date header description
 */
function getSprintTimelineSummary() {
  return {
    startDate: 'Monday, August 10, 2026 (ነሐሴ 4, 2018 ዓ.ም.)',
    endDate: 'Friday, September 11, 2026 (መስከረም 1, 2019 ዓ.ም. — እንቁጣጣሽ)',
    totalDays: SPRINT_TOTAL_DAYS,
    weeks: 5
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SPRINT_START_GREGORIAN,
    SPRINT_END_GREGORIAN,
    SPRINT_TOTAL_DAYS,
    SPRINT_DAY_MAPPINGS,
    getSprintDayInfo,
    formatDualDate,
    getSprintTimelineSummary
  };
}
