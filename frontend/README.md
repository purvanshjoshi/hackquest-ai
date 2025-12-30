# HackQuest AI Frontend

A professional, production-ready React + TypeScript application for AI-powered hackathon intelligence.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # Design-system primitives (shadcn-inspired)
│   ├── SkillTag.tsx        # Domain-specific UI
│   ├── Layout.tsx          # App shell (nav, footer, theme)
│   └── ErrorBoundary.tsx   # Global error handling
│
├── pages/
│   └── Home.tsx            # Landing / dashboard entry
│
├── hooks/
│   ├── useTheme.ts         # Dark/light mode orchestration
│   └── useWebSocket.ts    # Resilient WS connection manager
│
├── services/
│   └── agentService.ts    # AI agent communication layer
│
├── lib/
│   ├── utils.ts           # Shared helpers
│   └── constants.ts       # Centralized constants
│
├── config/
│   └── index.ts           # Environment & feature config
│
├── types/
│   └── index.ts           # Global TypeScript contracts
│
├── App.tsx                # Root component
├── main.tsx               # Vite entry point
└── index.css              # Global + Tailwind styles

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Environment Setup

Create a `.env.local` file (copy from `.env.example`):

```bash
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
VITE_ENV=development
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Blue (210, 100%, 50%)
- **Background**: Black/Dark Slate
- **Accent**: Light Blue (for highlights)
- **Success/Error**: Green/Red with low opacity

### Typography
- **Font**: System UI stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Sizes**: Responsive scaling with Tailwind breakpoints

### Components
- Card-based layouts with glassmorphism
- Consistent spacing (4px unit system)
- Responsive mobile-first design
- Smooth transitions (0.2-0.5s ease)

## 📁 Key Files

### `services/agentService.ts`
Handles WebSocket communication with the backend agent:
- Automatic reconnection
- Message parsing and validation
- Connection lifecycle management

### `config/index.ts`
Centralized configuration:
- API endpoints
- Feature flags
- Environment detection

### `types/index.ts`
TypeScript interfaces for type safety:
- Agent results and responses
- API message formats
- Component props

### `components/ErrorBoundary.tsx`
React error boundary for catching and displaying errors gracefully.

## 🎯 Features

✅ **Professional UI**
- Modern glassmorphic design
- Smooth animations with Framer Motion
- Responsive mobile-first layout
- Dark mode support

✅ **Type Safety**
- Full TypeScript coverage
- Strict type checking
- Interface-driven development

✅ **Error Handling**
- Error boundary component
- Graceful error messages
- Network error recovery

✅ **Performance**
- Code splitting
- Lazy loading
- Optimized bundle

✅ **Accessibility**
- ARIA labels
- Semantic HTML
- Keyboard navigation
- Color contrast compliance

## 🔧 Development Workflow

### Adding a New Component

1. Create component in `components/`
2. Add TypeScript types in `types/`
3. Use UI components from `components/ui/`
4. Export from `components/index.ts`

### Adding a New Service

1. Create service in `services/`
2. Define types in `types/`
3. Implement error handling
4. Export as singleton

### Environment Variables

All environment variables should:
1. Be defined in `.env.example`
2. Use `VITE_` prefix (Vite convention)
3. Be typed in `config/index.ts`

## 📦 Dependencies

### Core
- **React 18** - UI library
- **React Router** - Routing (future)
- **TypeScript** - Type safety
- **Vite** - Build tool

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations

### UI
- **Lucide React** - Icons
- **shadcn/ui patterns** - Component library design

## 🧪 Testing

Run tests with:
```bash
npm run test
```

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy
```

## 📝 Best Practices

1. **Components**: Keep components small and reusable
2. **Types**: Define interfaces before implementation
3. **Error Handling**: Always wrap async operations
4. **Performance**: Use React.memo for expensive components
5. **Accessibility**: Test with keyboard navigation
6. **Styling**: Use Tailwind classes, avoid inline styles

## 🤝 Contributing

1. Create a feature branch
2. Follow the project structure
3. Add types for new data
4. Test responsive design
5. Submit PR with description

## 📄 License

MIT License - See LICENSE file

---

**Questions?** Check the documentation or open an issue!
