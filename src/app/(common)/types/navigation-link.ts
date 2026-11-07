import type { LinkProps } from 'next/link';

export type NavigationLink = {
  label: string;
  href: LinkProps<string>['href'];
  target?: React.HTMLAttributeAnchorTarget;
};
