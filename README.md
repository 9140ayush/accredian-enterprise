# Accredian Enterprise — Landing Page Clone

This project is a Next.js 14 based partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website, developed as the assignment for the Full Stack Developer Intern role.

> 🚀 **Live Demo:** [https://accredian-enterprise-rosy.vercel.app/](https://accredian-enterprise-rosy.vercel.app/)  
> ⚠️ **Important Note on Vercel Links in India:** `.vercel.app` domains have been facing routing and blocking issues by some ISPs in India recently. If the live link does not work for you, please try using a **VPN**, changing your DNS (to 1.1.1.1), or **run the project locally** using the instructions below.

---

## 🎯 Objective & Scope Built

### 1. Landing Page
- Fully recreated the landing page featuring all key sections: Hero, Stats, Features, How it Works, Testimonials, and Partners.
- Includes a functional navigation menu and comprehensive footer.

### 2. Functional Requirements Achieved
- **Fully responsive:** Flawlessly transitions between mobile (hamburger menu, stacked layouts, carousels) and desktop.
- **Clean and structured UI:** Strict adherence to modern design principles, utilizing the Inter font and clear visual hierarchies.
- **Reusable components:** The `components/` folder utilizes highly modular functional components (e.g., `<FeaturesSection />`, `<HeroSection />`).
- **Smooth navigation:** Internal anchor tags trigger smooth scrolling between sections for excellent UX.

### 3. Tech Stack Requirements Met
- **Next.js 14** (using the App Router `app/` directory).
- **TypeScript** for robust typing across data features and component props.
- **React Functional Components & Hooks** used strictly throughout (no class components). `useState` and `useEffect` govern the mobile menu, tab filtering, scroll tracking, and testimonials carousel.
- **Tailwind CSS** for all styling.
- **Vercel** deployment enabled and verified.

### ⭐ Bonus Feature Included
- Added a functional **Lead Capture Form** at the bottom of the page.
- Created a simulated backend using Next.js API Routes (`/api/leads` POST endpoint).
- It fully captures form data, validates it cleanly server-side via Zod, and tracks a success/error state seamlessly in the UI.

---

## 🤖 AI Usage Explanation

During development, AI tools were strategically utilized to accelerate repetitive tasks:

1. **Where AI (Antigravity) helped:**
   - Bootstrapping the initial Next.js file structure.
   - Drafting boilerplate Tailwind configurations and CSS keyframe syntax (like the infinite scrolling marquee).
   - Establishing the base interface structures for the TypeScript mock data (`data/mock.ts`).
   - Generating standard `zod` schemas for form validation.
   - _Note:_ Antigravity was used as an assistant to augment the workflow, but it did not automatically output the entire finalized application correctly on its own.

2. **What was modified and improved manually:**
   - Connecting precise logic workflows together natively using the `framer-motion` API to ensure high-end, staggered visual transitions.
   - Diagnosing and rectifying strict TypeScript compilation errors that the AI stumbled over.
   - Tuning the UI aesthetics, adjusting specific paddings, gradients, button states, and layout grids to ensure high-fidelity matching across all device viewpoints.
   - Designing the specific fallback warnings regarding Vercel deployment issues in Indian network domains.

---

## ⚡ Setup Instructions

To run this project locally, execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/9140ayush/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify the Bonus API route locally, go to `http://localhost:3000/api/leads` or fill out the form at the bottom of the landing page.

---

## 💡 Approach Taken

1. **Data-Driven Architecture:** I started by mapping the site's content into a robust `./data/mock.ts` file. This strictly decoupled the UI from data—meaning if this platform were to be connected to a headless CMS tomorrow, the components would require zero refactoring.
2. **Component Isolation:** Each section of the page (Hero, Stats, Partners, etc.) is isolated into its own TypeScript component. This enforces readability and allows multiple developers to update isolated segments of the landing page with zero merge conflicts.
3. **Progressive Enhancement:** Built core CSS structures first, validated tailwind mobile layout grids, and ultimately layered complex animations on top using `framer-motion`'s `useInView` to ensure animations only fire when necessary to preserve performance.

---

## 🔮 Improvements With More Time

Given an additional 48 hours, I would make the following enhancements:

- **Database Integration:** Swap the in-memory array data store within `/api/leads` for an actual PostgreSQL instance utilizing Prisma ORM or a quick Supabase backend to persist leads.
- **Dashboard Interface:** Create a protected `/admin` route under the App Router specifically meant to authenticate viewers and securely display grabbed leads in a clean data table.
- **Comprehensive Next.js Metadata Generation:** Automatically generate dynamic open-graph images specifically tailored per specific route/program offering.
- **Automated Testing:** Wire up Cypress or Playwright simply to execute an end-to-end user navigation trace and ensure the lead form submits correctly in automation pipelines.
