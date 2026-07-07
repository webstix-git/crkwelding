export const SITE_URL = "https://www.crkwelding.com";

export function canonicalUrl(pathname: string): string {
  if (!pathname || pathname === "/") {
    return SITE_URL;
  }
  return `${SITE_URL}${pathname}`;
}
