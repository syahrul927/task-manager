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
