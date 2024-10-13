# DigitX

DigitX is a digital agency that specializes in web development.

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Supabase-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>
## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
  - [Login Page](#login-page)
  - [Signup Page](#signup-page)
  - [Homepage](#homepage)
  - [Profile Page](#profile-page)

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Supabase
- Shadcn
- TailwindCSS
- Prisma

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.
**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://www.pnpm.io/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Aftab3008/intern.git
cd intern
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm install
```

**Running the Project**

```bash
pnpm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#Supabase
DATABASE_URL=
DIRECT_URL=
SUPABASE_IMAGE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

#Coin Ranking API
COINRANKING_API_KEY=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Supabase](https://supabase.com/), [CoinRanking](https://www.coinranking.com/),

**Running the Project**

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="demo">Demo</a>

Explore the DigitX project through the following key pages:

### <a name="screenshots">📸 Screenshots</a>

#### <a name="login-page">Login Page</a>

<div align="center">
  <img src="https://github.com/Aftab3008/intern/blob/main/public/loginpage.png" alt="Login Page" width="600" />
</div>
<p align="center">The Login Page allows users to enter their credentials and access their accounts.</p>

#### <a name="signup-page">Signup Page</a>

<div align="center">
  <img src="https://github.com/Aftab3008/intern/blob/main/public/signuppage.png" alt="Signup Page" width="600" />
</div>
<p align="center">The Signup Page enables new users to create an account by providing their details.</p>

#### <a name="homepage">Homepage</a>

<div align="center">
  <img src="https://github.com/Aftab3008/intern/blob/main/public/homepagemain.png" alt="Homepage" width="600" />
</div>
<p align="center">The Homepage features a welcoming interface with quick access to various sections of the application.</p>

#### <a name="profile-page">Profile Page</a>

<div align="center">
  <img src="https://github.com/Aftab3008/intern/blob/main/public/profilpagemain.png" alt="Profile Page" width="600" />
</div>
<p align="center">The Profile Page displays user information and allows for profile management.</p>

## <a name="dark-mode">🌙 Dark Mode</a>

DigitX supports a dark mode feature to enhance user experience in low-light environments. To toggle dark mode:

- Toggle Button: Use the dark mode toggle button located in the header or settings menu to switch between light and dark themes.

- Persistent Theme: The selected theme will persist across sessions using local storage.

## <a name="footer">📞 Contact Us</a>

<div align="center" style="margin-top: 40px; font-family: 'Arial', sans-serif; background-color: #f8f9fa; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
  <h2 style="font-size: 24px; color: #333;">Get in Touch</h2>
  <p style="font-size: 18px; color: #333;">
    Email: <a href="mailto:shaikaftab005@gmail.com" style="color: #0077B5; text-decoration: none; font-weight: bold;">shaikaftab005@gmail.com</a><br>
  </p>
  <div style="margin-top: 20px;">
    <a href="https://x.com/shaikaf70807885" target="_blank" style="margin-right: 10px;">
      <img src="https://img.shields.io/badge/-Twitter-black?style=for-the-badge&logo=twitter&logoColor=1DA1F2" alt="Twitter" />
    </a>
    <a href="https://www.linkedin.com/in/aftab-shaik-907921256/" target="_blank" style="margin-right: 10px;">
      <img src="https://img.shields.io/badge/-LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=0077B5" alt="LinkedIn" />
    </a>
    <a href="https://github.com/Aftab3008" target="_blank">
      <img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
  </div>
  <p style="margin-top: 20px; font-size: 14px; color: #555;">
    &copy; 2024 DigitX. All rights reserved.
  </p>
</div>
