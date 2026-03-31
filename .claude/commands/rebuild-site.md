# LEB Systems – n8n-Style Site Rebuild

Rebuild the entire LEB Systems website so it matches the visual language of n8n.io exactly (dark deep-navy background, flame-orange CTAs, glassmorphism cards, dot-pattern hero, bold typography, smooth Framer Motion animations) while all copy is in English and tailored to LEB Systems' five service pillars:

1. **Infrastructure Development** – multi-cloud, on-prem, Kubernetes, Docker, load balancing, zero-trust.
2. **Web Design** – modern, performant, conversion-focused websites and landing pages.
3. **AI Implementation** – LLM integration, RAG pipelines, custom AI agents, intelligent dashboards.
4. **Process Automation** – workflow automation, API integrations, RPA, eliminating manual work.
5. **Custom Application Development** – full-stack bespoke software tailored to each client's operations.

---

## Design Tokens (n8n-faithful)

| Token | Value |
|---|---|
| Background | `#0e0918` → `#1b1728` |
| Surface | `#14151A` |
| Surface-2 | `#1A1A1E` |
| Accent / CTA | `#FF4F27` (flame orange) |
| Orange glow | `#FF6B00` |
| Purple | `#9333EA` |
| Pink | `#EC4899` |
| Text primary | `#ffffff` |
| Text secondary | `#d1cece` |
| Text muted | `#9d9797` / `slate-400` |
| Border | `rgba(255,255,255,0.05)` |
| Glassmorphism | `backdrop-blur-xl` + `bg-white/5` |

---

## Components to rewrite

### 1. `components/Navbar.tsx`
- Logo: flame-orange dot + "LEB Systems"
- Nav items: **Services** (dropdown) · **Solutions** · **AI & Automation** · **About** · **Contact**
- Right: `Sign in` ghost · `Get Started` orange button with glow shadow

### 2. `components/FlowerOfLife.tsx` (Hero)
Keep the animated Flower of Life SVG but add copy:
- Eyebrow badge: "Trusted by growing teams"
- H1 (54–64px, bold, white): `"Infrastructure. Design. AI. All in one place."`
- Subtitle (18–20px, slate-300, max-w-xl): `"We design, build, and automate the digital stack that lets your business scale — from enterprise infrastructure to intelligent AI agents."`
- Two CTAs below: `Start your project` (flame-orange, glow) · `Explore services →` (ghost, white)
- Dot-pattern background grid (n8n style) behind the SVG

### 3. `components/Marquee.tsx`
Update items to reflect the full tech stack:
AWS · Docker · Kubernetes · React · Next.js · Python · TensorFlow · PostgreSQL · Cloudflare · OpenAI · Vercel · Terraform · TypeScript · Node.js · Redis

### 4. `components/BentoGrid.tsx`
Section header: `"Everything your business needs to grow"` / subtitle `"Five pillars. One partner."`

Card grid (12-col):
| Span | Service | Key copy |
|---|---|---|
| col-8 | Infrastructure Development | "Scale from single server to global multi-region cluster without getting locked in." |
| col-4 | Web Design | "Fast, beautiful, conversion-ready — built to perform on every device." |
| col-6 | AI Implementation | "Deploy LLMs, RAG pipelines, and AI agents that understand your data." |
| col-6 | Process Automation | "Connect 400+ tools. Eliminate manual work. Run 24/7 without intervention." |
| col-12 | Custom Applications | "We build exactly what your business needs — no template, no compromise." |

Each card: glassmorphism card (`bg-[#14151A]`, `border border-white/5`, `rounded-3xl`), hover glow (purple or orange), relevant Lucide icon, short description, optional mini UI mockup.

### 5. `components/CodeSection.tsx`
Title: `"AI that works the way your business does"`
Body: We don't deploy generic models. We train, fine-tune, and integrate AI that understands your workflows, your data, and your customers.
Feature bullets: Custom LLM fine-tuning · RAG knowledge bases · Real-time AI dashboards · API-first architecture
Keep the orange gradient panel + Webhook→Execute Code visual.

### 6. `components/MoveFastSection.tsx`
Title: `"Automate. Accelerate. Dominate."`
Subtitle: Replace manual bottlenecks with intelligent workflows that never sleep.
Feature grid:
- Deploy automations without writing code
- Connect your entire tool stack instantly
- Schedule or trigger in real-time
- Monitor with live performance dashboards
Button: `"Explore automation solutions"`

### 7. `components/ReliableSection.tsx`
Badge: "Enterprise-ready"
Title: `"Reliable. Secure. Built to scale."`
Body: From zero-trust infrastructure to 24/7 monitoring — we build systems your business can depend on.
Bullet groups:
- **Security first**: Zero-trust networks, encrypted storage, RBAC, compliance audits.
- **Always on**: 99.9% uptime SLA, multi-region failover, automated health checks.
- **Full observability**: Real-time alerts, log streaming, usage dashboards, incident playbooks.
Buttons: `"Explore enterprise plans"` · `"Talk to us"`

### 8. `components/Footer.tsx`
Pre-footer CTA:
- H2: `"Ready to transform your business?"`
- Sub: `"Let's build your next-generation digital infrastructure together."`
- Button: `"Start your project"` (flame-orange)

Footer grid columns: **Services** · **Company** · **Resources**
Services: Infrastructure · Web Design · AI Solutions · Automation · Custom Apps
Company: About · Careers · Contact
Resources: Case Studies · Blog · Documentation
Bottom: social icons (X, GitHub, LinkedIn) · copyright

---

## Implementation rules

- **All text in English**
- Preserve all existing Framer Motion `fadeUpVariant` + `whileInView` patterns
- Keep `"use client"` at the top of every component
- Do not remove the Flower of Life SVG — it is the brand identity
- Every card uses `group hover:border-white/10 hover:shadow-[0_0_40px_rgba(...)]` transitions
- Maintain `max-w-[1200px] mx-auto` container width
- Use `framer-motion` for animations, `lucide-react` for icons
- No new dependencies — only what is already in `package.json`
- After rewriting, run `npm run build` to verify no TypeScript errors
