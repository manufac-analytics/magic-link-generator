# 🔐 Magic Link Submission System

A sleek, production-ready **Next.js** application that enables secure user submissions through **Magic Link** email verification. This system ensures that every submission is backed by a verified email address, enhancing security and data integrity.

---

## 🚀 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **UI Architecture**: [Mantine UI](https://mantine.dev/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Mantine Core](https://mantine.dev/)
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Email Templates**: [React Email](https://react.email/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Validation**: [Zod](https://zod.dev/)
- **Email Delivery**: [Resend](https://resend.com/)

---

## ✨ Key Features

- **🎯 Secure Submissions**: Users fill out a form that requires email confirmation.
- **🔗 Magic Link Verification**: Secure, single-use, time-limited tokens sent via email.
- **🛡️ Token Security**: High-entropy token generation with SHA-256 hashing in the database.
- **⚡ Async Processing**: Non-blocking email delivery for a snappy user experience.
- **📱 Responsive Design**: Fully responsive UI built with Mantine.
- **✅ Robust Validation**: Client-side and server-side validation using Zod.

---

## 🛠️ Getting Started

### 1. Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher
- **PostgreSQL**: Running instance (Local or Cloud like Neon/Supabase. Both will work)
- **npm**

### 2. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and populate it with your credentials:

```env
# Database connection string
DATABASE_URL="postgresql://postgres:password@localhost:5432/magic_link"

# Resend API Key for emails
RESEND_API_KEY="re_123456789"

# Sender identity for Resend (Verify this domain in Resend dashboard)
EMAIL_FROM="onboarding@yourdomain.com"

# The base URL of your application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 🗄️ Database Setup

The project uses **Prisma** as the ORM. Follow these steps to set up your PostgreSQL database:

1. **Initialize Migration**: Create the database tables based on the schema.
   ```bash
   npx prisma migrate dev --name init
   ```

2. **Generate Client**: Ensure the Prisma Client is up to date.
   ```bash
   npx prisma generate
   ```

3. **Database GUI** (Optional): View your data in a browser.
   ```bash
   npx prisma studio
   ```

---

## 📧 Resend Configuration

To enable email delivery, follow these steps:

1. **Sign Up**: Create an account at [Resend.com](https://resend.com/).
2. **API Key**: Navigate to the **API Keys** section and create a new key.
3. **Add Key**: Copy the key and add it to your `.env` file as `RESEND_API_KEY`.
4. **Domain Verification**:
   - To send emails to any recipient, you **must** verify your domain at [resend.com/domains](https://resend.com/domains).
   - If your domain is **not verified**, you can use the `resend.dev` testing domain (e.g., `onboarding@resend.dev`), but you can **only send emails to your own account email**.
5. **Update `.env`**: Once verified, update `EMAIL_FROM` with your verified email/domain.

---

## 🏃 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Project Structure (Key Folders)

- `/app/submission`: Contains the user input form.
- `/app/confirm`: Logic for token verification and confirmation.
- `/emails`: React-based email templates using [react-email](https://react.email/).
- `/lib`: Reusable services, Prisma client, and email utility.
- `/prisma`: Database schema definition.

---

## 📚 Reference Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs) 
- [Resend Documentation](https://resend.com/docs)
- [Mantine UI Components](https://mantine.dev/getting-started/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Tabler Icons](https://tabler.io/icons)
- [Zod Validation](https://zod.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

