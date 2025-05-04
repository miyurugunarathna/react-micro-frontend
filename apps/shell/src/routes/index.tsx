import Banners from '@/modules/home/banners';
import Categories from '@/modules/home/categories';
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
const Header = lazy(() => import('core/header'));
const Footer = lazy(() => import('core/footer'));

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <Banners />
      <Categories />
      <Footer />
    </>
  );
}
