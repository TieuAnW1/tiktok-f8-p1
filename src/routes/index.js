import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/upload';

const publicRoutes = [
	{ path: '/', page: Home },
	{ path: '/following', page: Following },
	{ path: '/upload', page: Upload, layout: null },
];

export { publicRoutes };
