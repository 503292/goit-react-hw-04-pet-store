import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import AboutPage from './pages/AboutPage';
import PetPage from './pages/PetPage';
import ErrorPage from './pages/ErrorPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/pets/:idPets',
    exact: false,
    component: PetPage,
  },
  {
    path: '/pets',
    exact: false,
    component: PetsPage,
  },
  {
    path: '/about',
    exact: false,
    component: AboutPage,
  },
  {
    path: '/',
    exact: false,
    component: ErrorPage,
  },
];
