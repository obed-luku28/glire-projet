export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  numericTarget?: number;
  suffix?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  company: string;
  serviceType: string;
  revenueRange: string;
  message: string;
}
