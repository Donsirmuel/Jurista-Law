import React from 'react';
import { PageRoute } from '../types';

interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs sm:text-sm font-medium text-[#2E4C47]">
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-[#9C4A32] transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="text-[#173330]/30 select-none" aria-hidden="true">
                /
              </li>
              <li>
                {isLast || !item.route ? (
                  <span className="text-[#9C4A32] font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => item.route && onNavigate(item.route)}
                    className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
