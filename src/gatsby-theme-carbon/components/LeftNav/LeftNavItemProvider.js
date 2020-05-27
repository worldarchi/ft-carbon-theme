// src/gatsby-theme-carbon/components/LeftNav/LeftNavItemProvider.js
import { useNavItems as themeUseNavItems } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItemProvider';
// add nav items
export function useNavItems() {
  const navItems = themeUseNavItems();
  // return navItems.concat({
  //   title: 'Additional Nav Item',
  //   pages: [
  //     { path: '/page1', title: 'New Page 1' },
  //     { path: '/page2', title: 'New Page 2' },
  //   ],
  // });
  return navItems;
}