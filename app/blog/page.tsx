import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog",
  description: "Read the latest blog posts by Subham Singh about web development, programming, and technology.",
};

const blogPosts = [
  {
    id: "getting-started-with-mern-stack",
    title: "Getting Started with MERN Stack Development",
    excerpt: "A comprehensive guide to building your first full-stack application using MongoDB, Express.js, React, and Node.js. Learn the fundamentals and best practices.",
    content: `The MERN stack has become one of the most popular choices for full-stack web development. In this comprehensive guide, we'll explore each component and how they work together to create powerful web applications.

## What is MERN Stack?

MERN stands for:
- **MongoDB**: A NoSQL database
- **Express.js**: A web application framework for Node.js
- **React**: A JavaScript library for building user interfaces
- **Node.js**: A JavaScript runtime environment

## Why Choose MERN?

1. **JavaScript Everywhere**: Use one language for both frontend and backend
2. **Strong Community**: Extensive documentation and community support
3. **Scalability**: Built for modern, scalable applications
4. **Performance**: Fast development and execution

## Getting Started

### Prerequisites
- Basic knowledge of JavaScript
- Understanding of HTML and CSS
- Familiarity with Git

### Setting Up Your Environment

First, make sure you have Node.js installed on your system. You can download it from the official website.

\`\`\`bash
# Check if Node.js is installed
node --version
npm --version
\`\`\`

### Creating Your First MERN App

1. **Backend Setup**
   \`\`\`bash
   mkdir mern-app
   cd mern-app
   mkdir backend
   cd backend
   npm init -y
   npm install express mongoose cors dotenv
   \`\`\`

2. **Frontend Setup**
   \`\`\`bash
   cd ..
   npx create-react-app frontend
   cd frontend
   npm start
   \`\`\`

## Best Practices

- Use environment variables for sensitive data
- Implement proper error handling
- Follow REST API conventions
- Use middleware for authentication
- Write clean, maintainable code

## Conclusion

The MERN stack provides a robust foundation for building modern web applications. Start with small projects and gradually work your way up to more complex applications.`,
    author: "Subham Singh",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["MERN", "JavaScript", "Web Development", "Tutorial"],
    featured: true,
  },
  {
    id: "javascript-best-practices",
    title: "JavaScript Best Practices for Better Code",
    excerpt: "Essential JavaScript best practices that every developer should follow to write cleaner, more maintainable code.",
    content: "Coming soon...",
    author: "Subham Singh",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["JavaScript", "Best Practices", "Code Quality"],
    featured: false,
  },
  {
    id: "responsive-design-tips",
    title: "Modern Responsive Design Techniques",
    excerpt: "Learn modern CSS techniques for creating responsive layouts that work seamlessly across all devices.",
    content: "Coming soon...",
    author: "Subham Singh",
    date: "2024-01-05",
    readTime: "7 min read",
    tags: ["CSS", "Responsive Design", "Frontend"],
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development and technology
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.id} className={`flex flex-col ${post.featured ? 'lg:col-span-2' : ''}`}>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-2xl line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="text-base">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1">
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/blog/${post.id}`}>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Want to stay updated with my latest posts?
        </p>
        <Button asChild variant="outline">
          <Link href="/contact">
            Subscribe to Newsletter
          </Link>
        </Button>
      </div>
    </div>
  );
}