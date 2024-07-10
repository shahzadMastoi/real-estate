'use client'
import { Drawer, Dropdown, Menu } from 'antd'
import Link from 'next/link'
import { MdOutlineViewHeadline } from 'react-icons/md'
import { VscAdd } from 'react-icons/vsc'
import styles from './style.module.scss'
import { items, customMenu, agency, login, createMenu, menuItems, search, properties, resources } from './Dropdown'
import { useEffect, useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'

interface SubMenuItem {
  key: string;
  text: string;
  href: string;
  label: string;
}

const Navbar = ()=> {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { SubMenu } = Menu;

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handle = () => {
    setDrawerVisible(true);
    setTimeout(() => {
      setDrawerVisible(false);
    }, 3000);
  };

  return (
    <main className={`${styles.navbar}`}>
    <nav className={`container ${styles.nav}`}>
      <div className={styles.imageStyle}>
        <img src="/logo/logo.svg" alt=''></img>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          {/* <Dropdown overlay={createMenu(items)} placement="bottom" className={styles.dropdown}> */}
            <Link href="/"> Home</Link>
          {/* </Dropdown> */}
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(agency)} placement="bottom" className={styles.dropdown}>
            <Link href="/routes/Agency"><p>Agencies</p></Link>
          </Dropdown>
        </li>
        <li className={`${styles.navItem} ${styles.antddropdown} `}>
          {/* <Dropdown overlay={customMenu} trigger={['hover']} placement="bottomCenter" className={styles.dropdown}> */}
          <Dropdown overlay={createMenu(search)} placement="bottom" className={styles.dropdown}>
            <Link href="/routes/Home/Home3"> Search+</Link>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(resources)} placement="bottom" className={styles.dropdown}>
            <Link href='/routes/Resources/HomeValuation'>Resources+</Link>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(properties)} placement="bottom" className={styles.dropdown}>
            <Link href="/routes/properties">properties</Link>
          </Dropdown>
        </li>
        {/* <li className={styles.navItem}>
          <Dropdown overlay={createMenu(blog)} placement="bottom" className={styles.dropdown}>
            <Link href="/routes/Blogs/BlogGrid">Blog</Link>
          </Dropdown>
        </li> */}
        <li className={styles.navItem}>
          <Link href="/routes/Contact">Contact</Link>
        </li>
        <li className={styles.navImage}>
          <Dropdown overlay={createMenu(login)} placement='bottom' className={styles.dropdown}>
            <img src="/logo/avater.webp" alt=''></img>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <button><Link href="/routes/AddProperty">Add Property </Link></button>
        </li>
      </ul>
      <div className={styles.navMobile}>
        <ul className='d-flex align-items-center'>
          <li>
            <img src="/logo/avater.webp" alt='Avetarlogo'></img>
          </li>
          <li className={styles.navItem}>
            <button><Link href="/routes/AddProperty">Add Property</Link></button>
          </li>
          <li>
            <MdOutlineViewHeadline onClick={showDrawer} />
          </li>
        </ul>
      </div>
      <Drawer
        className={styles.drawer}
        placement="left"
        closable={true}
        onClose={onCloseDrawer}
        visible={drawerVisible}>
        <div className={styles.navMenu}>
          <Menu mode="inline"  expandIcon={(({isOpen})=> isOpen ?<AiOutlineMinus/> : <VscAdd/>) }>
            {menuItems.map((menuItem) => (
              <SubMenu key={menuItem.key} title={menuItem.label}>
                {menuItem.children.map((subItem) => (
                  <Menu.Item>
                    <Link className='' href={subItem.href} onClick={handle}>{subItem.text}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
          <div className={styles.contact}>
            <Link href="/routes/Contact">Contact</Link>
          </div>
        </div>
      </Drawer>
    </nav>
     </main>
  )
}

export default Navbar