import { Menu, MenuProps } from "antd";
import Link from "next/link";
import styles from './style.module.scss';
export const createMenu = (items:any) => (
  <Menu className={styles.menuItems}>
    <ul>
      {items?.map((item:any, index:any) => (
        <li key={index}>
          <Link href={item?.href}>{item?.text}</Link>
        </li>
      ))}
    </ul>
  </Menu>
);

export const items = [
  // { href: "/routes/Home/Home1", text: "Home 1",label:'Home 01' },
  { href: "/routes/Home/Home2", text: "Home",label:'Home' },
  // { href: "/", text: "Home 3",label:'Home 03' },
  // { href: "/routes/Home/Home4", text: "Home 4",label:'Home 04' },
  // { href: "/routes/Home/Home5", text: "Home 5",label:'Home 05' },
  // { href: "/routes/Home/Home6", text: "Home 6",label:'Home 06' },
];

// export const pages = [
//   { href: "/routes/pages/services", text: "Services",label: "Services" },
//   { href: "/routes/pages/singleService", text: "Single Service" ,label: "Single Service"},
//   { href: "/routes/pages/login", text: "Login",label: "Login" },
//   { href: "/routes/pages/register", text: "Register",label: "register" },
// ];

export const agency = [
  { href: "/routes/Agency", text: "Agency",label:'Agency'},
  // { href: "/routes/Agency/CreateAgency", text: "Create Agency",label:'Create Agency'},
  { href: "/routes/Agency/Agents", text: "Agent",label:'Agent'},
  { href: "/routes/Agency/AgencyDetail", text: "Agency Details",label:'Agency Details'},
  { href: "/routes/Agency/AgentDetail", text: "Agent Details",label:'Agent Details'},
];
export const search = [
  { href: "/routes/Home/Home3", text: "Featured listing",label:'FearturedListing'},
  { href: "/components/AdvanceSearch", text: "Advance Search",label:'AdvanceSearch'},
  { href: "/routes/Home/Home5", text: "Map Search",label:'mapSearch'},
];

// export const blog = [
//   { href: "/routes/Blogs/BlogGrid", text: "Blog Grid" },
//   { href: "/routes/Blogs/LeftSideBar", text: "Blog Grid left Side Bar" },
//   { 
//     href: {
//       pathname: '/routes/Blogs/LeftSideBar',
//       query: { item: 'right' }
//     },
//     text: "Blog Grid Right Side Bar"
//   },
//   { href: "/routes/Blogs/BlogDetail", text: "Blog Details" },
// ];


// export const about = [
//   { href: "/routes/About/About1", text: "About 1", label: "About 1"},
//   { href: "/routes/About/About2", text: "About 2", label: "About 2"},
// ];

export const login = [
  { href: "/routes/pages/login", text: "Login" },
  { href: "/routes/pages/register", text: "register" },
];

export const properties = [
  { href: "/routes/AddProperty", text: "Add Property",label:"addProperty" },
  { href: "/routes/properties/propertDetails", text: "Property Detail" ,lable:"peopertyDetail" },
];

export const resources = [
  { href: "/routes/Resources/HomeValuation", text: "Home Valuation",label:"HomeValuation" },
  { href: "/routes/Resources/MortgageCalculator", text: "Mortgage Calculator" ,lable:"MortgageCalculator" },
];
export const customMenuItems = [
  // [
  //   { key: "1", text: "Properties", href: '/routes/properties',label:'pk' },
  //   { key: "2", text: "Properties v1", href: '/routes/properties',label:'pk' },
  //   { key: "3", text: "Properties v2", href: '/routes/properties',label:'pk' },
  //   { key: "4", text: "Add Properties", href: "/routes/AddProperty",label:'pk' },
  // ],
  // [
  //   { key: "6", text: "Properties1 with sidebar", href: "/routes/addProperty",label:'pk' },
  //   { key: "7", text: "Properties left side bar", href: "/routes/properties/WithSideBar",label:'pk' },
  //   { 
  //     href: {
  //       pathname: '/routes/properties/WithSideBar',
  //       query: { item: 'right' }
  //     },
  //     text: "Blog Grid Right Side Bar"
  //   },    
  //   { key: "8", text: "Properties list left side bar", href: "/routes/properties/propertiesList",label:'Properties list left side bar' },
  //   { 
  //     href: {
  //       pathname: '/routes/properties/propertiesList',
  //       query: { item: 'right' }
  //     },
  //     text: "Properties list Right side bar"
  //   }  ],
  [
    // { key: "11", text: "Property Details", href: "/routes/properties/propertDetails/",label:'pk' },
    { key: "12", text: "Add properties", href: "/routes/AddProperty",label:'pk' },
    { key: "13", text: "Properties details", href: "/routes/properties/propertDetails/",label:'pk' },
  ],
];

export const customMenu = (
  <Menu className={styles.customMenu}>
    <div className={styles.lists}>
      {customMenuItems.map((menuGroup, index) => (
          <ul>
            {menuGroup.map((menuItem) => (
              <li>
                <Link href={menuItem?.href}>{menuItem?.text}</Link>
              </li>
            ))}
          </ul>
      ))}
    </div>
  </Menu>
);

const mergedCustomMenuItems = customMenuItems.flat()

export const menuItems = [
  {
    label: 'Home',
    key: 'home',
    children: items,
  },
  // {
  //   label: 'About',
  //   key: 'about',
  //   children: about,
  // },
  {
    label: 'Agencies',
    key: 'agency',
    children: agency,
  },
  {
    label: 'Search',
    key: 'search',
    children: search,
  },
  {
    label: 'Resources',
    key: 'resources',
    children: resources,
  },
  {
    label: 'Properties',
    key: 'properties',
    children: mergedCustomMenuItems,
  },
]