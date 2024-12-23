'use client';

import React from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    React.useState(false);

  return (
    <NextUINavbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      maxWidth='2xl'
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Brand Section */}
      <NavbarContent
        className='basis-1/5 sm:basis-full'
        justify='start'
      >
        <NavbarBrand
          as='li'
          className='gap-3 max-w-fit'
        >
          <NextLink
            className='flex justify-start items-center gap-1'
            href='/'
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={'/logo.svg'}
              alt='logo'
              width={40}
              height={40}
            />
            <p className='font-bold text-inherit'>
              AHMAD
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Links Section */}
      <NavbarContent
        className='sm:basis-full'
        justify='end'
      >
        <ul className='hidden sm:flex gap-4  ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({
                    color: 'foreground',
                  }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className=' flex items-center gap-4'
        justify='end'
      >
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={
            isMenuOpen
              ? 'Close menue'
              : 'Open menu'
          }
          className='sm:hidden'
        />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map(
            (item, index) => (
              <NavbarMenuItem
                key={`${item}-${index}`}
              >
                <Link
                  color='foreground'
                  href={item.href}
                  size='lg'
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
