# bun-demo

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.11. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

---

# 🚀 Bun + Elysia Starter

This is a minimal setup using **Bun** as the runtime and **Elysia** as the web framework. Fast af and ready to go.

## 🥖 What’s Bun?

**Bun** is a super fast JavaScript runtime like Node.js, but built with Zig. It bundles, transpiles, installs packages, and runs your code — all in one.

### 🔥 Why use Bun?

* Insanely fast (seriously)
* Built-in bundler and TypeScript support
* Native ESM + CommonJS support
* No need for `tsc`, `webpack`, or `vite` for most use cases

## 🌿 What’s Elysia?

**Elysia** is a lightweight and fast web framework for Bun. Think of it like Express, but turbocharged for Bun.

### 💡 Why use Elysia?

* Made specifically for Bun
* Type-safe by default
* Minimal and modern API
* Fast af (like Bun)

## 🚀 Getting Started

Clone the repo, then run:

```bash
bun install
```

### 🛠️ Dev Mode

Wanna hot-reload while you code?

```bash
bun run start:dev
```

> Watches for file changes and reloads during runtime.

### 🏗️ Build for Production

To bundle and build your app:

```bash
bun run build
```

Dockerize:
```shell
docker build . -t demo
#Prepare postgres connection for example: POSTGRES_URL=postgres://postgres:241299@localhost:5432/test
docker run -p 3000:3000 demo
```

> Outputs a compiled binary or optimized build (depends on how you set it up).

---

## 📂 Structure (example)

```bash
📁 src/
 ┣ 📄 index.ts        # Entry point
 ┗ 📄 logger      # logger module
 ┗ 📄 users      #  users module
```

## 🤘 That’s it

Bun + Elysia = fast, modern, no bs setup.
Let’s build cool stuff 🚀
