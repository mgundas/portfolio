import { profile } from "@/data/profile";
import type { Content } from "@/content";
import { ArrowUp } from "./icons";

const Footer = ({ t }: { t: Content["footer"] }) => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-dim sm:flex-row md:px-10">
      <p>
        © {new Date().getFullYear()} {profile.name}. {t.credit}
      </p>
      <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
        {t.backToTop} <ArrowUp />
      </a>
    </div>
  </footer>
);

export default Footer;
