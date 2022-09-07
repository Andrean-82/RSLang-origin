/* eslint-disable import/no-cycle */
import navigationFunc from '../components/navigation';
import Main from '../pages/main';
import Team from '../pages/team';
import Games from '../pages/games';
import Dictionary from '../pages/dictionary';
import Statistics from '../pages/stats';
import { loadUser } from '../components/loginUtils';
type Routes = {
    main: Main;
    team: Team;
    games: Games;
    dictionary: Dictionary;
    statistics: Statistics;
};
type Pages = 'main' | 'team' | 'games' | 'dictionary' | 'statistics';
class Router {
    routes: Routes;
    currentPage: Pages;
    lastPage: Pages;
    constructor(routes: { main: Main; team: Team; games: Games; dictionary: Dictionary; statistics: Statistics }) {
        this.routes = routes;
        this.lastPage = localStorage.getItem('page') as Pages;
        this.currentPage = this.lastPage || 'main';
        loadUser();
        this.routes[this.currentPage].openPage();
    }
    init(): void {
        document.addEventListener('click', this.openPage.bind(this));
        navigationFunc();
    }
    openPage(event: Event): void {
        const element = event.target as HTMLElement;
        const selectedPage = element.dataset.page as Pages;
        if (selectedPage) {
            this.routes[selectedPage].openPage();
            this.currentPage = selectedPage;
            localStorage.setItem('page', `${selectedPage}`);
        }
    }
}
export default Router;
