/**
 * 
 * Main homepage
 */

import routes from '@/lib/routes';
import { redirect } from 'next/navigation';

const Home = () => {
	// we will redirect to login page by default
	// till we don't have homepage
	redirect(routes.login.path);
}

export default Home;
