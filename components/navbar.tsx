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
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from '@/components/icons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    React.useState(false);

  return (
    <NextUINavbar
      maxWidth='2xl'
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
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
            <img
              src='/logo.svg'
              alt='logo'
              className='w-10 h-10 dark:invert'
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

      {/* Social Links Section */}
      {/* <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden md:flex gap-2'>
          <Link
            isExternal
            aria-label='Twitter'
            href={siteConfig.links.twitter}
          >
            <TwitterIcon className='text-default-500' />
          </Link>
          <Link
            isExternal
            aria-label='Discord'
            href={siteConfig.links.discord}
          >
            <DiscordIcon className='text-default-500' />
          </Link>
          <Link
            isExternal
            aria-label='Github'
            href={siteConfig.links.github}
          >
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden sm:flex'>
          <Button
            isExternal
            as={Link}
            className='text-sm font-normal text-default-600 bg-default-100'
            href={siteConfig.links.buyMeACoffee}
            startContent={
              <HeartFilledIcon className='text-danger' />
            }
            variant='flat'
          >
            Hire Me
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent
        className=' flex items-center gap-4'
        justify='end'
      >
        {/* <Link
          isExternal
          aria-label='Github'
          href={siteConfig.links.github}
        >
          <GithubIcon className='text-default-500' />
        </Link> */}
        <ThemeSwitch />
        <NavbarMenuToggle
          className='sm:hidden'
          aria-label={
            isMenuOpen
              ? 'Close menue'
              : 'Open menu'
          }
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
