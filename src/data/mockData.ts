// Mock data for Botway Console

export const kpiData = {
  occupancyRate: { value: 94.2, target: 95, delta: -0.8, trend: [92, 93, 94, 93.5, 94.2, 94, 94.2] },
  avgDaysOnMarket: { value: 18, target: 14, delta: 4, trend: [22, 20, 19, 18, 17, 18, 18] },
  leadToTour: { value: 38, target: 40, delta: -2, trend: [35, 36, 38, 37, 38, 39, 38] },
  tourToApplication: { value: 62, target: 60, delta: 2, trend: [58, 60, 61, 62, 61, 62, 62] },
  applicationToLease: { value: 78, target: 75, delta: 3, trend: [72, 74, 76, 77, 78, 78, 78] },
  effectiveRentVsProForma: { value: 98.5, target: 100, delta: -1.5, trend: [96, 97, 98, 98.2, 98.5, 98.3, 98.5] },
  renewalRate: { value: 72, target: 70, delta: 2, trend: [68, 69, 70, 71, 72, 72, 72] },
};

export const pipelineData = {
  leads: 248,
  tours: 94,
  applications: 58,
  approved: 45,
  leases: 35,
  moveIns: 28,
};

export const buildings = [
  {
    id: "1",
    name: "The Meridian",
    address: "450 Park Avenue, New York, NY 10022",
    unitCount: 156,
    occupancy: 96.2,
    avgRent: 4250,
    openListings: 6,
    dom: 12,
    leadToTour: 42,
    tourToApp: 65,
    effectiveRent: 99.2,
    alerts: ["2 units > 30 DOM"],
  },
  {
    id: "2",
    name: "Hudson Yards Tower",
    address: "550 West 34th St, New York, NY 10001",
    unitCount: 312,
    occupancy: 93.8,
    avgRent: 5100,
    openListings: 19,
    dom: 21,
    leadToTour: 35,
    tourToApp: 58,
    effectiveRent: 97.5,
    alerts: ["5 units > 30 DOM", "Low conversion"],
  },
  {
    id: "3",
    name: "Brooklyn Heights Residences",
    address: "180 Montague St, Brooklyn, NY 11201",
    unitCount: 89,
    occupancy: 97.8,
    avgRent: 3200,
    openListings: 2,
    dom: 8,
    leadToTour: 48,
    tourToApp: 72,
    effectiveRent: 101.2,
    alerts: [],
  },
  {
    id: "4",
    name: "Williamsburg Lofts",
    address: "225 Kent Ave, Brooklyn, NY 11249",
    unitCount: 64,
    occupancy: 90.6,
    avgRent: 3800,
    openListings: 6,
    dom: 28,
    leadToTour: 32,
    tourToApp: 55,
    effectiveRent: 95.8,
    alerts: ["High DOM", "Below target occupancy"],
  },
  {
    id: "5",
    name: "Chelsea Modern",
    address: "520 West 23rd St, New York, NY 10011",
    unitCount: 128,
    occupancy: 94.5,
    avgRent: 4800,
    openListings: 7,
    dom: 15,
    leadToTour: 40,
    tourToApp: 62,
    effectiveRent: 98.9,
    alerts: [],
  },
];

export const units = [
  { id: "MER-1201", building: "The Meridian", beds: 2, baths: 2, sqft: 1250, floor: 12, status: "Available", askingRent: 5200, netEffective: 5100, dom: 8, availDate: "2024-02-01", campaigns: ["Zillow", "StreetEasy"] },
  { id: "MER-1405", building: "The Meridian", beds: 1, baths: 1, sqft: 750, floor: 14, status: "Application", askingRent: 3800, netEffective: 3700, dom: 15, availDate: "2024-01-15", campaigns: ["Zillow"] },
  { id: "HYT-2201", building: "Hudson Yards Tower", beds: 3, baths: 2, sqft: 1800, floor: 22, status: "Available", askingRent: 8500, netEffective: 8200, dom: 32, availDate: "2024-01-01", campaigns: ["Zillow", "StreetEasy", "Apartments.com"] },
  { id: "HYT-1802", building: "Hudson Yards Tower", beds: 2, baths: 2, sqft: 1350, floor: 18, status: "Leased", askingRent: 6200, netEffective: 6100, dom: 0, availDate: "-", campaigns: [] },
  { id: "BHR-501", building: "Brooklyn Heights Residences", beds: 1, baths: 1, sqft: 680, floor: 5, status: "Available", askingRent: 2900, netEffective: 2850, dom: 5, availDate: "2024-02-15", campaigns: ["StreetEasy"] },
  { id: "WBL-302", building: "Williamsburg Lofts", beds: 2, baths: 1, sqft: 1100, floor: 3, status: "Available", askingRent: 4200, netEffective: 4000, dom: 35, availDate: "2024-01-01", campaigns: ["Zillow", "StreetEasy", "Craigslist"] },
  { id: "CHM-1105", building: "Chelsea Modern", beds: 1, baths: 1, sqft: 820, floor: 11, status: "Tour Scheduled", askingRent: 4100, netEffective: 4050, dom: 12, availDate: "2024-02-01", campaigns: ["Zillow"] },
  { id: "CHM-1508", building: "Chelsea Modern", beds: 3, baths: 2, sqft: 1650, floor: 15, status: "Available", askingRent: 7200, netEffective: 7000, dom: 18, availDate: "2024-01-20", campaigns: ["StreetEasy", "Apartments.com"] },
];

export const leads = [
  { id: "L001", name: "Sarah Chen", email: "sarah.chen@email.com", phone: "(212) 555-0142", source: "StreetEasy", budget: "$4,000-5,000", moveIn: "Feb 1, 2024", primaryUnit: "MER-1201", status: "Tour Scheduled", score: 85, createdAt: "2024-01-10" },
  { id: "L002", name: "Michael Torres", email: "m.torres@email.com", phone: "(718) 555-0198", source: "Zillow", budget: "$3,000-3,500", moveIn: "Jan 15, 2024", primaryUnit: "BHR-501", status: "New", score: 72, createdAt: "2024-01-12" },
  { id: "L003", name: "Emily Watson", email: "ewatson@email.com", phone: "(917) 555-0256", source: "Referral", budget: "$6,000-8,000", moveIn: "Mar 1, 2024", primaryUnit: "HYT-2201", status: "Application Submitted", score: 92, createdAt: "2024-01-08" },
  { id: "L004", name: "James Park", email: "jpark@email.com", phone: "(646) 555-0312", source: "Website", budget: "$4,500-5,500", moveIn: "Feb 15, 2024", primaryUnit: "CHM-1508", status: "Tour Completed", score: 78, createdAt: "2024-01-11" },
  { id: "L005", name: "Amanda Rivera", email: "arivera@email.com", phone: "(347) 555-0421", source: "Apartments.com", budget: "$3,500-4,000", moveIn: "Jan 20, 2024", primaryUnit: "WBL-302", status: "Not Qualified", score: 45, createdAt: "2024-01-09" },
];

export const tours = [
  { id: "T001", lead: "Sarah Chen", unit: "MER-1201", building: "The Meridian", date: "2024-01-15", time: "10:00 AM", status: "Scheduled", agent: "Alex Kim" },
  { id: "T002", lead: "James Park", unit: "CHM-1508", building: "Chelsea Modern", date: "2024-01-14", time: "2:00 PM", status: "Completed", agent: "Maria Santos", feedback: "Loved the view, concerned about price" },
  { id: "T003", lead: "Emily Watson", unit: "HYT-2201", building: "Hudson Yards Tower", date: "2024-01-13", time: "11:00 AM", status: "Completed", agent: "Alex Kim", feedback: "Very interested, will submit application" },
  { id: "T004", lead: "Michael Torres", unit: "BHR-501", building: "Brooklyn Heights Residences", date: "2024-01-16", time: "3:30 PM", status: "Scheduled", agent: "David Lee" },
];

export const applications = [
  { id: "A001", applicant: "Emily Watson", unit: "HYT-2201", building: "Hudson Yards Tower", submitted: "2024-01-14", status: "Under Review", screening: "Pending", income: "$185,000", creditScore: 780 },
  { id: "A002", applicant: "Lisa Johnson", unit: "MER-1405", building: "The Meridian", submitted: "2024-01-12", status: "Approved", screening: "Passed", income: "$125,000", creditScore: 720 },
  { id: "A003", applicant: "Robert Kim", unit: "CHM-1105", building: "Chelsea Modern", submitted: "2024-01-13", status: "Documents Needed", screening: "Pending", income: "$140,000", creditScore: 695 },
  { id: "A004", applicant: "Jennifer Wu", unit: "WBL-302", building: "Williamsburg Lofts", submitted: "2024-01-11", status: "Denied", screening: "Failed", income: "$95,000", creditScore: 580 },
];

export const leases = [
  { id: "LS001", tenant: "David Martinez", unit: "MER-0801", building: "The Meridian", startDate: "2023-06-01", endDate: "2024-05-31", rent: 4800, status: "Active", renewalTrigger: "2024-03-01" },
  { id: "LS002", tenant: "Rachel Green", unit: "HYT-1502", building: "Hudson Yards Tower", startDate: "2023-08-15", endDate: "2024-08-14", rent: 5600, status: "Active", renewalTrigger: "2024-05-15" },
  { id: "LS003", tenant: "Tom Anderson", unit: "BHR-302", building: "Brooklyn Heights Residences", startDate: "2023-04-01", endDate: "2024-03-31", rent: 3100, status: "Expiring Soon", renewalTrigger: "2024-01-31" },
  { id: "LS004", tenant: "Sophie Lee", unit: "CHM-0905", building: "Chelsea Modern", startDate: "2023-09-01", endDate: "2024-08-31", rent: 4200, status: "Active", renewalTrigger: "2024-05-31" },
  { id: "LS005", tenant: "Mark Wilson", unit: "WBL-105", building: "Williamsburg Lofts", startDate: "2023-03-15", endDate: "2024-03-14", rent: 3600, status: "Expiring Soon", renewalTrigger: "2024-01-14" },
];

export const payments = [
  { id: "P001", tenant: "Emily Watson", unit: "HYT-2201", type: "First Month", amountDue: 8500, amountPaid: 8500, date: "2024-01-20", status: "Paid" },
  { id: "P002", tenant: "Emily Watson", unit: "HYT-2201", type: "Security Deposit", amountDue: 17000, amountPaid: 17000, date: "2024-01-20", status: "Paid" },
  { id: "P003", tenant: "Lisa Johnson", unit: "MER-1405", type: "First Month", amountDue: 3800, amountPaid: 3800, date: "2024-01-18", status: "Paid" },
  { id: "P004", tenant: "Lisa Johnson", unit: "MER-1405", type: "Security Deposit", amountDue: 7600, amountPaid: 7600, date: "2024-01-18", status: "Paid" },
  { id: "P005", tenant: "Robert Kim", unit: "CHM-1105", type: "First Month", amountDue: 4100, amountPaid: 0, date: "-", status: "Pending" },
  { id: "P006", tenant: "Robert Kim", unit: "CHM-1105", type: "Security Deposit", amountDue: 8200, amountPaid: 0, date: "-", status: "Pending" },
];

export const atRiskUnits = [
  { id: "HYT-2201", building: "Hudson Yards Tower", dom: 32, askingRent: 8500, lastActivity: "Tour 5 days ago" },
  { id: "WBL-302", building: "Williamsburg Lofts", dom: 35, askingRent: 4200, lastActivity: "Price reduced 7 days ago" },
  { id: "HYT-1506", building: "Hudson Yards Tower", dom: 28, askingRent: 6800, lastActivity: "No tours scheduled" },
];

export const expiringLeases = [
  { tenant: "Tom Anderson", unit: "BHR-302", building: "Brooklyn Heights Residences", endDate: "2024-03-31", daysUntil: 75, currentRent: 3100, marketRent: 3350 },
  { tenant: "Mark Wilson", unit: "WBL-105", building: "Williamsburg Lofts", endDate: "2024-03-14", daysUntil: 58, currentRent: 3600, marketRent: 3900 },
  { tenant: "Anna Roberts", unit: "MER-0604", building: "The Meridian", endDate: "2024-04-15", daysUntil: 90, currentRent: 4100, marketRent: 4400 },
];

export const settings = {
  occupancyTarget: 95,
  domTarget: 14,
  leadToTourTarget: 40,
  tourToAppTarget: 60,
  appToLeaseTarget: 75,
  effectiveRentTarget: 100,
  renewalRateTarget: 70,
};
