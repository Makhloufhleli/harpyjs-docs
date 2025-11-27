<p align="center">
  <span style="font-size: 120px;">🦅</span>
</p>

<h1 align="center">Harpy.js Documentation Website</h1>

<p align="center">Official documentation website for <strong>Harpy.js</strong> - a full-stack framework that brings React SSR to the NestJS ecosystem.</p>

> **⚠️ Beta Version**: This documentation and the Harpy.js framework are currently in beta. Features may change, and you might encounter bugs.

## 🚀 About

This website provides comprehensive documentation for Harpy.js, including:

- **Getting Started**: Installation and quick start guides
- **Core Concepts**: Architecture, SSR, and hydration
- **Features**: Detailed feature documentation
- **Guides**: Step-by-step tutorials and best practices

## 🛠️ Tech Stack

- **Framework**: [Harpy.js](https://github.com/Makhloufhleli/harpy.js) (NestJS 11 + React 19 SSR)
- **Runtime**: Node.js with Fastify
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🏗️ Project Structure

```
apps/harpyjs-docs/
├── src/
│   ├── features/          # Feature modules
│   │   ├── home/          # Homepage
│   │   │   ├── views/
│   │   │   ├── home.controller.ts
│   │   │   ├── home.service.ts
│   │   │   └── home.module.ts
│   │   └── docs/          # Documentation pages
│   │       ├── views/
│   │       ├── docs.controller.ts
│   │       ├── docs.service.ts
│   │       └── docs.module.ts
│   ├── layouts/           # Layout components
│   │   ├── layout.tsx           # Default layout (homepage)
│   │   └── dashboard-layout.tsx # Docs layout (sidebar + header)
│   ├── i18n/             # Internationalization
│   ├── assets/           # Static assets and styles
│   ├── app.module.ts     # Root module
│   └── main.ts           # Application entry point
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Features

### Homepage
- Hero section with gradient background
- Feature cards highlighting key capabilities
- Quick start guide
- Beta status badge
- Responsive design

### Documentation
- Sticky sidebar navigation
- Sticky header
- Comprehensive content sections
- Code examples with syntax highlighting
- Beta warning notice
- Mobile-responsive layout

### Layouts
- **Default Layout**: Used by homepage with gradient footer
- **Dashboard Layout**: Used by docs with sidebar navigation and light footer

## 🔧 Development

### Adding New Documentation Sections

1. Update `docs.service.ts` to add new navigation items
2. Add section content in `docspage.tsx`
3. Update navigation structure if needed

### Styling

The project uses Tailwind CSS with a custom configuration:

- Primary gradient: `from-slate-900 via-purple-900 to-slate-900`
- Accent colors: Amber/Orange for CTAs and highlights
- Typography: Clean, modern fonts with good contrast

### Performance

The application leverages Harpy.js SSR capabilities:
- Server-side rendering: 1-7ms render times
- Automatic client-side hydration for interactive components
- Optimized asset delivery

## 📝 SEO

Both routes include comprehensive metadata:
- Page titles and descriptions
- Canonical URLs
- OpenGraph tags for social media
- Twitter Card metadata

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Make your changes
4. Commit with conventional commits (`git commit -m "feat: add feature"`)
5. Push to your branch (`git push origin feat/your-feature`)
6. Open a Pull Request

## 👨‍💻 Author

Built with ❤️ by [Makhlouf Helali](https://github.com/Makhloufhleli)

## 🔗 Links

- **Harpy.js Framework**: [github.com/Makhloufhleli/harpy.js](https://github.com/Makhloufhleli/harpy.js)
- **Documentation**: [github.com/Makhloufhleli/harpyjs-docs](https://github.com/Makhloufhleli/harpyjs-docs)

---

**Note**: This is the documentation website repository. For the actual Harpy.js framework, please visit the main repository.
