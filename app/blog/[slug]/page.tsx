import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

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
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          
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
        </div>
      </div>

      <article className="prose prose-gray dark:prose-invert max-w-none">
        {post.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('##')) {
            return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
          }
          if (paragraph.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
          }
          if (paragraph.startsWith('```')) {
            return null; // Handle code blocks separately
          }
          if (paragraph.startsWith('- ')) {
            return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
          }
          if (paragraph.startsWith('1. ')) {
            return <div key={index} className="ml-4 mb-2">{paragraph}</div>;
          }
          if (paragraph.trim() === '') {
            return <br key={index} />;
          }
          return <p key={index} className="mb-4 leading-7">{paragraph}</p>;
        })}
      </article>

      <div className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Written by</p>
            <p className="font-semibold">{post.author}</p>
          </div>
          <Button asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}