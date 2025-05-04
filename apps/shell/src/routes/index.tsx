import Banners from '@/modules/home/banners';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Banners />
    </>
  );
}
