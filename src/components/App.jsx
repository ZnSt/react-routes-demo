import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Mission } from './Missions';
import { Reviews } from './Reviews';
import { Team } from './Team';
import { Products } from 'pages/Products';
import { ProductDetails } from './ProductDetails';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
