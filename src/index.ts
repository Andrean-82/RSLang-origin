import Games from './pages/games';
import Main from './pages/main';
import Router from './router/router';
import Team from './pages/team';
import './style.scss';

export const router = new Router({
    main: new Main(),
    team: new Team(),
    games: new Games(),
});

router.init();
