export type IncidentDataPoint = {
  year: string;
  count: number;
  highlight?: boolean;
};

export const churchIncidentsData: IncidentDataPoint[] = [
  { year: "'18", count: 50 },
  { year: "'19", count: 83 },
  { year: "'20", count: 55 },
  { year: "'21", count: 98 },
  { year: "'22", count: 198 },
  { year: "'23", count: 485, highlight: true },
  { year: "'24", count: 415 },
];

export const churchIncidentsSource = "Family Research Council";
