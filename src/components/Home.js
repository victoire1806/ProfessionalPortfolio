import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { pageComponents } from '../pages';
import { pages } from '../assets/data/porforlioData';

export default function PortfolioSite() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gray-50 md:shadow-2xl">
      <BrowserRouter basename="/portfolio-react">
        <Header pages={pages} />
        <main className="flex-grow flex mt-16">
          <Switch>
            {/*Default to About page*/}
            <Route path="/" exact component={pageComponents['About']} />
            {pages.map((pageName, index) => (
              <Route
                key={index}
                exact
                path={`/${pageName.toLowerCase()}`}
                component={pageComponents[pageName]}
              />
            ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}