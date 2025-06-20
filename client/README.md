# Flight QnA Chatbot - React Client

A modern React TypeScript application with Tailwind CSS for an AI-powered flight support chatbot. This application provides a beautiful and intuitive interface for users to ask questions about flights, baggage policies, booking changes, and travel-related issues.

## Features

- 🎨 **Modern UI Design**: Clean, professional interface with white and dark blue theme
- 💬 **Real-time Chat Interface**: Interactive chat with typing indicators and message history
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite for optimal development and build performance
- 🎯 **Quick Actions**: Pre-defined buttons for common flight-related questions
- 🔄 **Auto-scroll**: Messages automatically scroll to the latest conversation
- ⌨️ **Keyboard Support**: Send messages with Enter key

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Inter Font** - Modern, readable typography

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx    # Main chat interface component
│   │   └── ChatMessage.tsx      # Individual message component
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # Application styles
│   ├── index.css                # Global styles with Tailwind
│   └── main.tsx                 # Application entry point
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies and scripts
```

## Design System

### Colors
- **Primary Blue**: `#0ea5e9` (primary-500) - Main brand color
- **Dark Blue**: Various shades from `#0c4a6e` to `#082f49`
- **White**: `#ffffff` - Clean background
- **Gray**: Various shades for text and borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Chat Messages**: Rounded corners with different colors for user and bot
- **Input Field**: Clean textarea with focus states
- **Buttons**: Primary blue with hover effects
- **Quick Actions**: Small pill-shaped buttons for common questions

## Integration

This client is designed to work with the backend server that provides:
- LLM-powered responses using RAG (Retrieval-Augmented Generation)
- Flight documentation processing
- Real-time chat capabilities

## Development

### Adding New Features

1. Create new components in the `src/components/` directory
2. Follow the existing TypeScript patterns
3. Use Tailwind CSS classes for styling
4. Maintain the white and dark blue color scheme

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established color palette
- Maintain consistent spacing and typography
- Ensure responsive design for all screen sizes

## Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new components
3. Test on different screen sizes
4. Ensure accessibility standards are met

## License

This project is part of the LLM RAG Flight QnA system.
