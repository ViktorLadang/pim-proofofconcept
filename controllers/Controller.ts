import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/author`, async (req, res) => {
  const { name, email, book } = req.body

  const bookData = book?.map((post: Prisma.BookCreateInput) => {
    return { title: book?.title }
  })

  const result = await prisma.author.create({
    data: {
      name,
      email,
      Book: {
        create: bookData,
      },
    },
  })
  res.json(result)
})

app.post(`/book`, async (req, res) => {
  const { title, authorId } = req.body
  const result = await prisma.book.create({
    data: {
      title,
      authorId,
    },
  })
  res.json(result)
})

app.get('/author', async (req, res) => {
  const authors = await prisma.author.findMany()
  res.json(authors)
})

app.get('/book', async (req, res) => {
  const books = await prisma.book.findMany()
  res.json(books)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
)

