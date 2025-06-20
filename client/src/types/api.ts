// API Request/Response types
export interface ChatRequest {
  message: string;
  conversationId?: string;
  userId?: string;
}

export interface ChatResponse {
  message: string;
  conversationId: string;
  timestamp: Date;
  sources?: DocumentSource[];
}

export interface DocumentSource {
  title: string;
  content: string;
  page?: number;
  confidence: number;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// API Configuration
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
}

// API Endpoints
export const API_ENDPOINTS = {
  CHAT: '/api/chat',
  UPLOAD: '/api/upload',
  HEALTH: '/api/health',
} as const; 