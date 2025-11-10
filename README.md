# Task Manager

### Project Structure

```

.
├── app
│   ├── actions
│   ├── api
│   │   └── auth
│   │   └── [...nextauth]
│   ├── components
│   ├── data
│   │   └── repositories
│   ├── domain
│   │   ├── entities
│   │   ├── repositories
│   │   └── usecases
│   ├── lib
│   ├── presentation
│   │   ├── components
│   │   └── hooks
│   ├── signin
│   └── signup
├── prisma
│   └── migrations
└── public

```

### Technical Choices

- Framework: NextJS
- Styling: TailwindCSS
- Auth: NextAuth (with JWT)
- State Management: React Hooks
- Other tools: Prisma, tRPC, Zod, etc.

### Instruction to start

Make sure you already have pnpm installed in your machine and docker already running, then you can start by running this command.

```bash
docker-compose up -d

```
