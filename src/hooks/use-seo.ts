import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface SeoProps {
  title: string;
  description: string;
}

const SITE_URL = "https://crkwelding.com";

const usePageSeo = ({ title, description }: SeoProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const url = `${SITE_URL}${pathname}`;

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = url;
    }
  }, [title, description, pathname]);
};

export default usePageSeo;