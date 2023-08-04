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
		sidebar.current.style.transform = (sidebar.current.style.transform === "translateX(-100%)") ? "translateX(0%)" : "translateX(-100%)";
	}

	// SHOP SIDEBAR DROPDOWN
	const toggleShopDropdown = () => {
		shopDropdown.current.classList.toggle('shop-dropdown-open');
		shopDropButton.current.classList.toggle('shop-dropdown-btn-open');
	}

	return (
		<div>
			<div className='sidebar' ref={sidebar} style={{ transform: 'translateX(-100%)' }}>
				<div className='h-16 p-2 flex items-center justify-end text-[1.1rem]' >
					<div className='h-10 w-10 text-2xl flex items-center justify-center cursor-pointer' onClick={toggleSidebar}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
				<div className='h-16 flex items-center justify-between text-[1.1rem] border-t border-nightsky-500'>
					<Link className='no-underline text-nightsky-500 p-6' to='/products'>Shop</Link>
					<button className='h-full w-[20%] text-base flex items-center justify-center border-l border-nightsky-500 cursor-pointer' ref={shopDropButton} onClick={toggleShopDropdown}>
						<FontAwesomeIcon icon={faChevronDown} className='shop-btn transition-all ease-out duration-200' />
					</button>
				</div>
				<div className='shop-dropdown hidden' ref={shopDropdown}>
					<a>Cleaning</a>
					<a>Treats</a>
					<a>Training</a>
					<a>Health & Wellnes</a>
					<a>Grooming</a>
				</div>
				<div className='sidebar-item'>About Us</div>
				<div className='sidebar-item'>FAQ</div>
				<div className='sidebar-item'>Log in</div>
			</div>

			<nav className='nav'>
				{/* LEFT SECTION */}
				<div className='hidden lg:flex w-[40%] items-center'>
					<Link className='nav-item text-[1.1rem] flex group relative z-40' to='/products'>Shop
						<div className='hidden group-hover:block absolute top-[42px] left-[-10px] min-w-[180px] bg-white shadow z-40 transition-all ease-in-out duration-500'>
							<div className='py-0 px-4'>Cleaning</div>
							<div className='py-0 px-4'>Treats</div>
							<div className='py-0 px-4'>Training</div>
							<div className='py-0 px-4'>Health & Wellnes</div>
							<div className='py-0 px-4'>Grooming</div>
						</div>
					</Link>
					<a className='nav-item text-[1.1rem] flex'>About Us</a>
					<a className='nav-item text-[1.1rem] flex'>FAQ</a>
				</div>
				{/* SIDEBAR BUTTON */}
				<div className='lg:hidden w-[40%] flex text-2xl' onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></div>
				{/* LOGO */}
				<Link to='/products' className='flex-[0_0_130px] lg:flex-[0_0_185px] w-[10%] object-contain'>
					<img className='m-0' src="https://roccoandroxie.com/cdn/shop/files/namelogoblue.png?v=1614790117" />
				</Link>
				{/* RIGHT SECTION */}
				<div className='w-[40%] flex items-center justify-end' >
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
