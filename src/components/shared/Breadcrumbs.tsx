import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 flex-wrap font-ui text-sm">
        <li>
          <Link href="/" className="text-crk-steel hover:text-primary transition-colors inline-flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-crk-steel/50" />
            {item.path ? (
              <Link href={item.path} className="text-crk-steel hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
