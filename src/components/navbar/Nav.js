import React, { useRef } from 'react';

// import * as styles from '../../styles/nav.mod.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faChevronDown, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const Nav = () => {
	const sidebar = useRef();
	const shopDropdown = useRef();
	const shopDropButton = useRef();

	// OPEN AND CLOSE SIDEBAR
	const toggleSidebar = () => {
		// sidebar.current.style.transform = (sidebar.current.style.transform === "translateX(-100%)") ? "translateX(0%)" : "translateX(-100%)";
	}

	// SHOP SIDEBAR DROPDOWN
	const toggleShopDropdown = () => {
		// shopDropdown.current.classList.toggle(styles.sidebarDropdownOpen);
		// shopDropButton.current.classList.toggle(styles.sidebarDropdownBtnOpen);
	}

	return (
		<div>
			<div className={'hidden ' + 'styles.navSidebar'} ref={sidebar} style={{ transform: 'translateX(-100%)' }}>
				<div className={'styles.navSidebarItem' + ' ' + 'styles.navSidebarHeader'}>
					<div className={'styles.navSidebarCloseBtn'} onClick={toggleSidebar}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
				<div className={'styles.navSidebarItem'}>
					<Link className={'styles.navSidebarShop'} to='/products'>Shop</Link>
					<button className={'styles.sidebarDropdownBtn'} ref={shopDropButton} onClick={toggleShopDropdown}>
						<FontAwesomeIcon icon={faChevronDown} className={'styles.dropdownBtnIcon'} />
					</button>
				</div>
				<div className={'styles.sidebarDropdown'} ref={shopDropdown}>
					<a className={'styles.sidebarDropdownItem'}>Cleaning</a>
					<a className={'styles.sidebarDropdownItem'}>Treats</a>
					<a className={'styles.sidebarDropdownItem'}>Training</a>
					<a className={'styles.sidebarDropdownItem'}>Health & Wellnes</a>
					<a className={'styles.sidebarDropdownItem'}>Grooming</a>
				</div>
				<div className={'styles.navSidebarItem'}><a>About Us</a></div>
				<div className={'styles.navSidebarItem'}><a>FAQ</a></div>
				<div className={'styles.navSidebarItem'}><a>Log in</a></div>
			</div>

			<nav className='fixed top-0 z-40 w-full h-[60px] lg:h-24 px-4 lg:px-8 text-nightsky-500 flex items-center justify-between bg-white border-b border-nightsky-500'>
				{/* LEFT SECTION */}
				<div className={'hidden lg:flex w-[40%] items-center'}>
					<Link className={'nav-item text-[1.1rem] flex group relative z-40'} to='/products'>Shop
						<div className={'hidden group-hover:block absolute top-[42px] left-[-10px] min-w-[180px] bg-white shadow z-40 transition-all ease-in-out duration-500'}>
							<div className='py-0 px-4'>Cleaning</div>
							<div className='py-0 px-4'>Treats</div>
							<div className='py-0 px-4'>Training</div>
							<div className='py-0 px-4'>Health & Wellnes</div>
							<div className='py-0 px-4'>Grooming</div>
						</div>
					</Link>
					<a className={'nav-item text-[1.1rem] flex'}>About Us</a>
					<a className={'nav-item text-[1.1rem] flex'}>FAQ</a>
				</div>
				{/* SIDEBAR BUTTON */}
				<div className='lg:hidden w-[40%] flex text-2xl' onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></div>
				{/* LOGO */}
				<Link to='/products' className={'flex-[0_0_130px] lg:flex-[0_0_185px] w-[10%] object-contain'}>
					<img className='m-0' src="https://roccoandroxie.com/cdn/shop/files/namelogoblue.png?v=1614790117" />
				</Link>
				{/* RIGHT SECTION */}
				<div className={'w-[40%] flex items-center justify-end'} >
					<a className='hidden lg:flex nav-item text-2xl lg:text-xl'><FontAwesomeIcon icon={faUser} /></a>
					<a className='nav-item flex text-2xl lg:text-xl'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
					<Link className='nav-item flex text-2xl lg:text-xl' to='/mycart' >
						<FontAwesomeIcon icon={faBagShopping} />
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default Nav;
