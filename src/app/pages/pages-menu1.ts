import {NbMenuItem} from "@nebular/theme";
export const MENU_ITEMS1: NbMenuItem[] = [ {
  title: 'Dashboard',
  icon: 'home',
  link: '/pages/dashboard',
  home: true,
 },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Earn Points',
    icon: 'layout-outline',
    children: [
      {
        title: 'Earn Points',
        icon: 'layout-outline',
        link: '/pages/forms/buttons',
      },
    ],
  },
  {
    title: 'Redeem Points',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Redeem Points',
        icon: 'edit-2-outline',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Transactions',
    icon: 'keypad-outline',
    children: [
      {
        title: 'Transacation',
        icon: 'keypad-outline',
        link: '/pages/ui-features/grid',
      },
    ],
  },

  {
    title: 'Exchange Tokens',
    icon: 'browser-outline',
    children: [
      {
        title: 'Exchange Tokens',
        icon: 'browser-outline',
        link: '/pages/layout/infinite-list',
      },
    ],
  },

  {
    title: 'Partners Networks',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Partners Networks',
        icon: 'message-circle-outline',
        link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'Members',
    icon: 'map-outline',
    children: [
      {
        title: 'Members',
        icon: 'map-outline',
        link: '/pages/layout/accordion',
      },
    ],
  },
  {
    title:'Settings',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Settings',
        icon: 'pie-chart-outline',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title:'',
    icon: 'text-outline',
    children: [
      {
        title: '',
        icon: 'text-outline',
        link: '/pages/layout/list',
      },
    ],
  },
  {
    title:'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Tables & Data',
        icon: 'grid-outline',
        link: '/pages/forms/inputs',
      },
    ],
  },
];
