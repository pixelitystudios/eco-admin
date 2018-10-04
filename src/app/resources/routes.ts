import { RouteManager } from './services/route-manager'
import { LoginComponent } from './pages/auth/login/login.component';
export const router = new RouteManager();


/**
 * Login Route
 * @type {Route}
 */
router.add('', LoginComponent);
