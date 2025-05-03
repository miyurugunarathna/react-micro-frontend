import { lazy } from 'react';

const Header = lazy(() => import('core/header'));

function App() {
  return (
    <div>
      <Header />
      <p>Hello! shell app</p>
    </div>
  );
}

export default App;
