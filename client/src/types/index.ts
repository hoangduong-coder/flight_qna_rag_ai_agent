// Core types that are used across multiple files
export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

// API-related types
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

// Flight-specific types
export interface FlightQuestion {
  id: string;
  category: 'baggage' | 'booking' | 'documents' | 'general';
  question: string;
  answer?: string;
}

export interface QuickAction {
  id: string;
  label: string;
  question: string;
  category: 'baggage' | 'booking' | 'documents' | 'general';
}

// UI State types
export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  conversationId: string | null;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

// Component prop types
export interface ChatInterfaceProps {
  onSendMessage?: (message: string) => void;
  onQuickAction?: (action: QuickAction) => void;
  initialMessage?: string;
}

export interface LoadingIndicatorProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// Configuration types
export interface AppConfig {
  apiUrl: string;
  maxMessageLength: number;
  typingIndicatorDelay: number;
  autoScrollEnabled: boolean;
}

// Re-export from other type files
export * from './api';
export * from './ui'; 