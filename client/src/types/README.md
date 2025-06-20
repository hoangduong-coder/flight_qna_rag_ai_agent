# Types Organization

This directory contains all TypeScript interfaces and types for the Flight QnA Chatbot application.

## File Structure

```
src/types/
├── index.ts          # Main types file - exports all types
├── api.ts            # API-related types (requests, responses, errors)
├── ui.ts             # UI component types and state management
└── README.md         # This documentation file
```

## Type Categories

### Core Types (`index.ts`)
- **Message**: Chat message structure
- **ChatMessageProps**: Props for chat message component
- **FlightQuestion**: Flight-specific question structure
- **QuickAction**: Quick action button configuration
- **AppConfig**: Application configuration

### API Types (`api.ts`)
- **ChatRequest**: Request payload for chat API
- **ChatResponse**: Response from chat API
- **DocumentSource**: Source document information
- **ApiError**: Error response structure
- **ApiConfig**: API configuration
- **API_ENDPOINTS**: API endpoint constants

### UI Types (`ui.ts`)
- **ChatState**: Chat interface state management
- **UserPreferences**: User settings and preferences
- **ChatInterfaceProps**: Props for main chat interface
- **LoadingIndicatorProps**: Loading component props
- **ButtonProps**: Reusable button component props
- **FormField**: Form field configuration
- **ModalProps**: Modal component props

## Usage Examples

### Importing Types

```typescript
// Import specific types
import type { Message, QuickAction } from '../types';

// Import API types
import type { ChatRequest, ChatResponse } from '../types/api';

// Import UI types
import type { ChatState, ButtonProps } from '../types/ui';

// Import everything
import type * as Types from '../types';
```

### Using Types in Components

```typescript
import React from 'react';
import type { Message, ChatMessageProps } from '../types';

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  // Component implementation
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  // Component implementation
};
```

## Best Practices

1. **Use Type-Only Imports**: Always use `import type` for type imports
2. **Centralized Types**: Keep all types in this directory
3. **Categorized Files**: Separate types by domain (API, UI, etc.)
4. **Consistent Naming**: Use PascalCase for interfaces, camelCase for properties
5. **Documentation**: Add JSDoc comments for complex types
6. **Re-exports**: Use index.ts to re-export from other files

## Adding New Types

1. **Determine Category**: Decide if it's API, UI, or core
2. **Create/Update File**: Add to appropriate file or create new one
3. **Export**: Make sure it's exported from index.ts
4. **Document**: Add JSDoc comments if needed
5. **Test**: Ensure types work correctly in components 