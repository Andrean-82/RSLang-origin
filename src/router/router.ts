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
    constructor(routes: { main: Main; team: Team; games: Games; dictionary: Dictionary; statistics: Statistics; }) {
        this.routes = routes;
        this.currentPage = 'main';
        loadUser();
        this.routes.main.openPage();
    }
    init(): void {
        document.addEventListener('click', this.openPage.bind(this));
        navigationFunc();
    }
    openPage(event: Event): void {
        const element = event.target as HTMLElement;
        const selectedPage = element.dataset.page as Pages;
        if (selectedPage) {
            window.history.pushState('', '', `/${selectedPage}`);
            this.routes[selectedPage].openPage();
            this.currentPage = selectedPage;
        }
    }
    openSelectedPage(page: string): void {
        window.history.pushState('', '', `/${page}`);
        this.routes[page as Pages].openPage();
        this.currentPage = page as Pages;
    }
    refreshCurrentPage(): void {
        this.routes[this.currentPage].openPage();
    }
}
export default Router;
