# Portfolio Integration Guide - Uniquegamer Tech

## Overview
This document provides comprehensive context for integrating the **Team Portfolio** feature into the Uniquegamer Tech website. The portfolio system showcases team members with individual profile pages, modern animations, and a cohesive design system.

---

## 📁 File Structure & Locations

### Core Files Created
```
src/
├── app/
│   ├── portfolio/
│   │   ├── page.tsx              # Main portfolio landing page (Team Grid)
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic individual profile page
├── data/
│   └── portfolio.ts              # Centralized team member data
└── components/
    └── ui/                       # shadcn/ui components (assumed existing)
        ├── card.tsx
        ├── avatar.tsx
        ├── badge.tsx
        ├── button.tsx
        └── separator.tsx
```

### Dependencies Required
Ensure these packages are installed in `package.json`:
```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

---

## 🎨 Design System Alignment

### Color Palette Used
The portfolio strictly adheres to the Uniquegamer Tech design tokens:
- **Backgrounds**: `bg-background`, `bg-card`, `bg-muted`
- **Text**: `text-foreground`, `text-muted-foreground`, `text-primary`
- **Accents**: Gradients using `from-primary`, `via-purple-500`, `to-pink-500`
- **Borders**: `border-border`, `bg-border` (for glassmorphism)

### Typography
- **Headings**: `text-4xl font-bold tracking-tight` (H1), `text-2xl font-semibold` (H2)
- **Body**: `text-base leading-relaxed`, `text-sm` for captions
- **Font Family**: Inherits `Inter` from root layout

### Components Used (shadcn/ui)
All components are standard shadcn/ui variants with no custom overrides:
1. **Card**: Used for profile blocks with `className="overflow-hidden"`
2. **Avatar**: Fallback to initials if image fails
3. **Badge**: Variants: `default` (skills), `outline` (roles)
4. **Button**: Variants: `default` (CTA), `ghost` (social icons), `outline` (secondary)
5. **Separator**: Visual dividers between sections

---

## 💾 Data Structure (`src/data/portfolio.ts`)

### Schema Definition
```typescript
interface SocialLink {
  platform: 'github' | 'linkedin' | 'modelscope' | 'twitter' | 'website';
  url: string;
  icon: LucideIcon; // Imported from lucide-react
}

interface Achievement {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface Profile {
  id: string;                // URL-safe slug (e.g., "shah-husain")
  name: string;              // Full display name
  role: string;              // Primary job title
  tagline: string;           // Secondary subtitle
  bio: string;               // Paragraph description
  avatar: string;            // Image URL (local or remote)
  stats: {
    projects: string;
    certifications: string;
    technologies: string;
  };
  achievements: Achievement[];
  skills: string[];
  socialLinks: SocialLink[];
  featured?: boolean;        // Optional: Highlight specific members
}
```

### Current Data Entries
1. **Shah Husain** (`id: "shah-husain"`)
   - Role: Software Engineer & AI Automation Specialist
   - Skills: Blockchain, Generative AI, Docker, Kubernetes
   - Links: GitHub, LinkedIn, ModelScope

2. **Hasnain Ali** (`id: "hasnain-ali"`)
   - Role: AI Researcher & Developer
   - Skills: Machine Learning, Deep Learning, NLP, Computer Vision
   - Links: GitHub, LinkedIn, ModelScope

> **Note**: To add new members, simply append a new object to the `profiles` array in `src/data/portfolio.ts`.

---

## 🔄 Integration Points

### 1. Navigation Menu
Add the Portfolio link to your existing Header/MegaMenu:
```tsx
// In src/components/layout/Header.tsx or MegaMenu.tsx
{
  label: "Community", // Or "Team", "About"
  href: "/portfolio",
}
```

### 2. Footer Links
Add to the "Company" or "Community" column in `Footer.tsx`:
```tsx
{
  label: "Our Team",
  href: "/portfolio",
}
```

### 3. Breadcrumbs
If your site uses breadcrumbs, ensure dynamic routing is supported:
`Home > Community > Portfolio > [Person Name]`

### 4. SEO & Metadata
The dynamic `[id]/page.tsx` automatically generates:
- **Title**: `{Name} | Uniquegamer Tech`
- **Description**: First 160 chars of bio
- **Open Graph**: Uses avatar as OG image
- **JSON-LD**: Person schema included in `<script>` tag

---

## 🚀 Deployment Checklist

Before pushing to GitHub and deploying:

1. **Image Assets**:
   - Replace placeholder avatars in `src/data/portfolio.ts` with real images.
   - Store images in `public/images/team/` or use external URLs.
   - Ensure images are optimized (WebP format recommended).

2. **Environment Variables**:
   - No new env vars required for static data.
   - If fetching from CMS later, add `NEXT_PUBLIC_PORTFOLIO_API_URL`.

3. **Responsive Testing**:
   - Mobile: Cards stack vertically (flex-col).
   - Tablet: 2-column grid.
   - Desktop: 2-column grid with max-width container.

4. **Accessibility**:
   - All interactive elements have `aria-label`.
   - Color contrast meets WCAG AA.
   - Keyboard navigation works (Tab through cards/buttons).

5. **Build Verification**:
   ```bash
   npm run build
   npm run lint
   ```

---

## 🛠 Future Enhancements (Optional)

- **CMS Integration**: Move `portfolio.ts` data to Sanity/Contentful.
- **Filtering**: Add filters for skills/roles if team grows >5 people.
- **Blog Connection**: Link "Featured Insights" to author profiles.
- **Contact Form**: Pre-fill "To" field when contacting specific members.

---

## 📝 Merge Instructions for Developers

1. **Copy Files**:
   - Copy `src/data/portfolio.ts` to your `src/data/` folder.
   - Copy `src/app/portfolio/` folder to your `src/app/` folder.

2. **Install Dependencies**:
   ```bash
   npm install framer-motion lucide-react
   ```

3. **Verify shadcn/ui Components**:
   Ensure these components exist in `src/components/ui/`:
   - `card.tsx`
   - `avatar.tsx`
   - `badge.tsx`
   - `button.tsx`
   - `separator.tsx`
   
   If missing, install via:
   ```bash
   npx shadcn-ui@latest add card avatar badge button separator
   ```

4. **Update Navigation**:
   Add `/portfolio` link to your Header and Footer components.

5. **Test Locally**:
   ```bash
   npm run dev
   # Visit http://localhost:3000/portfolio
   ```

6. **Push to GitHub**:
   Commit changes and push. Vercel/Netlify will auto-deploy.

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Module not found: framer-motion" | Run `npm install framer-motion` |
| Images not loading | Check paths in `portfolio.ts` (use `/images/...` for public folder) |
| Styles look broken | Ensure Tailwind config includes default dark mode colors |
| 404 on individual profiles | Verify `[id]` folder naming (must be exactly `[id]`) |
| Icons missing | Ensure `lucide-react` is imported correctly in `portfolio.ts` |

---

## Author
Generated for Uniquegamer Tech Portfolio Integration.
Last Updated: 2024
