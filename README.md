# Dojo Blog

A modern blog application built with Vue 3, TypeScript, and Vue Router. This project showcases a single-page application with dynamic routing and component-based architecture.

## 🌐 Live Demo

Check out the live demo: [https://dojo-blog-pi.vercel.app/](https://dojo-blog-pi.vercel.app/)

## ✨ Features

- 📝 View blog posts in a clean, responsive layout
- 🔍 View individual post details
- ⚡ Built with Vue 3's Composition API
- 🛠 TypeScript support for better development experience
- 📱 Fully responsive design
- 🚀 Deployed on Vercel for seamless CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yusun-lab/dojo-blog.git
   cd dojo-blog
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run serve
   ```
   The application will be available at `http://localhost:8080`

## 🛠 Available Scripts

- `npm run serve` - Start development server with hot-reload
- `npm run build` - Build for production with minification

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable Vue components
├── composables/     # Vue 3 composable functions
│   ├── getPost.ts   # Single post data fetching
│   └── getPosts.ts  # Posts list data fetching
├── router/          # Vue Router configuration
├── views/           # Page components
└── App.vue          # Root component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
