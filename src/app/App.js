import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';
import {
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom';
import { Media } from '../utils/StyleUtils';
import Home from '../screens/Home'
import ProjectSPR from '../screens/Price'
import Contact from '../screens/Contact'
import Portfolio from '../screens/Portfolio'
import DashBoard from '../components/Admin/DashBoard'
import SinglePortfolio from '../screens/SinglePortfolio'
import NotFound from '../screens/NotFound'
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import NavToggle from '../components/NavToggle';
import EnterPage from '../components/EnterPage';
import Theme from '../utils/Theme';
import GothamBook from '../fonts/gotham-book.woff2';
import GothamMedium from '../fonts/gotham-medium.woff2';

//const Home = asyncComponent(props => import("../screens/Home"));
// const Contact = asyncComponent(props => import("../screens/Contact"));
// const ProjectSPR = asyncComponent(props => import("../screens/ProjectSPR"));
// const Portfolio = asyncComponent(props => import("../screens/Portfolio"));
// const SinglePortfolio = asyncComponent(props => import("../screens/SinglePortfolio"));
// const NotFound = asyncComponent(props => import("../screens/NotFound"));

const consoleMessage = `
__  __  __
\u005C \u005C \u005C \u005C \u005C\u2215
 \u005C \u005C\u2215\u005C \u005C
  \u005C\u2215  \u005C\u2215

Taking a peek huh? Check out the source code: https://github.com/mihalskiy/commerce-project

`;

const fontStyles = `
  @font-face {
    font-family: 'Gotham';
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
  }
`;

class App extends Component {
    state = {
        menuOpen: false,
        formOpen: false,
    }

    componentDidMount() {
        console.info(consoleMessage);
        window.history.scrollRestoration = 'manual';
    }

    toggleMenu = () => {
        const { menuOpen } = this.state;
        this.setState({ menuOpen: !menuOpen });
    }

    toggleForm = () => {
        const { formOpen } = this.state;
        this.setState({ formOpen: !formOpen });
    }

    setBodyOverflow = state => {
        document.body.style.overflow = state;
    }

  render() {
    const { menuOpen, formOpen } = this.state;
    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <BrowserRouter>
                    <Route render={({ location }) => (
                        <React.Fragment>
                            <Helmet>
                                <link rel="preload" href={`${GothamBook}`} as="font" crossorigin="crossorigin" />
                                <link rel="preload" href={`${GothamMedium}`} as="font" crossorigin="crossorigin" />
                                <style>{fontStyles}</style>
                            </Helmet>
                            <GlobalStyles />
                            <SkipToMain href="#MainContent">Skip to main content</SkipToMain>
                            <TopItem>
                                <Header toggleMenu={this.toggleMenu} menuOpen={menuOpen} />
                                <NavToggle onClick={this.toggleMenu} menuOpen={menuOpen} />
                                <AuthForm toggleMenu={this.toggleMenu} formOpen={formOpen} />
                                <EnterPage onClick={this.toggleForm} formOpen={formOpen} />
                            </TopItem>

                            <TransitionGroup component={React.Fragment} >
                                <Transition
                                    key={location.pathname}
                                    timeout={500}
                                    onEnter={this.setBodyOverflow('hidden')}
                                    onExited={this.setBodyOverflow('')}
                                >
                                    {status => (
                                        <MainContent status={status} id="MainContent" role="main">
                                            <Helmet>
                                                <link rel="canonical" href={`${location.pathname}`} />
                                            </Helmet>
                                            <Switch location={location}>
                                                <ThemeProvider theme={Theme}>
                                                    <BrowserRouter>
                                                        <Route render={({ location }) => (
                                                            <React.Fragment>
                                                                <Helmet>
                                                                    <link rel="preload" href={`${GothamBook}`} as="font" crossorigin="crossorigin" />
                                                                    <link rel="preload" href={`${GothamMedium}`} as="font" crossorigin="crossorigin" />
                                                                    <style>{fontStyles}</style>
                                                                </Helmet>
                                                                <GlobalStyles />
                                                                <SkipToMain href="#MainContent">Skip to main content</SkipToMain>
                                                                <Header toggleMenu={this.toggleMenu} menuOpen={menuOpen} />
                                                                <NavToggle onClick={this.toggleMenu} menuOpen={menuOpen} />
                                                                <TransitionGroup component={React.Fragment} >
                                                                    <Transition
                                                                        key={location.pathname}
                                                                        timeout={500}
                                                                        onEnter={this.setBodyOverflow('hidden')}
                                                                        onExited={this.setBodyOverflow('')}
                                                                    >
                                                                        {status => (
                                                                            <MainContent status={status} id="MainContent" role="main">
                                                                                <Helmet>
                                                                                    <link rel="canonical" href={`${location.pathname}`} />
                                                                                </Helmet>
                                                                                <Switch location={location}>
                                                                                    <Route exact path="/" render={props => <Home {...props} status={status} />} />
                                                                                    <Route path="/contact" render={props => <Contact {...props} status={status} />} />
                                                                                    <Route path="/price" render={props => <ProjectSPR {...props} status={status} />} />
                                                                                    <Route path="/dashboard" render={props => <DashBoard {...props} status={status} />} />
                                                                                    <Route exact path="/portfolio" render={props => <Portfolio {...props} status={status} />} />
                                                                                    <Route exact path="/portfolio/:id/:name" render={props => <SinglePortfolio {...props} status={status} />} />
                                                                                    <Route render={props => <NotFound {...props} status={status} />} />
                                                                                </Switch>
                                                                            </MainContent>
                                                                        )}
                                                                    </Transition>
                                                                </TransitionGroup>
                                                            </React.Fragment>
                                                        )} />
                                                    </BrowserRouter>
                                                </ThemeProvider>

                                            </Switch>
                                        </MainContent>
                                    )}
                                </Transition>
                            </TransitionGroup>
                        </React.Fragment>
                    )} />
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>

    );
  }
}

const GlobalStyles = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: ${Theme.fontStack};
    background: ${Theme.colorBackground(1)};
    color: ${Theme.colorText(1)};
    border: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ::selection {
    background: ${Theme.colorPrimary(1)};
  }
`;

const MainContent = styled.main`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${props => props.status === 'exiting' && `
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entering' && `
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entered' && `
    transition-duration: 0.5s;
    opacity: 1;
  `}
`;

const TopItem = styled.div`
@media (max-width: ${Media.tablet}) {
    background: #000;
    opacity: 0.89;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 100;
  }

`

const SkipToMain = styled.a`
  position: fixed;
  clip: rect(1px,1px,1px,1px);
  top: 16px;
  left: 50%;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: ${props => props.theme.colorBackground(1)};
  z-index: 99;
  transform: translate3d(-50%, -40px, 0);
  transition: transform 0.4s ${props => props.theme.curveFastoutSlowin};
  background: ${props => props.theme.colorPrimary(1)};
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  clip-path: ${props => props.theme.clipPath(8)};

  &:focus {
    clip: auto;
    width: auto;
    height: auto;
    outline: none;
    transform: translate3d(-50%, 0, 0);
  }
`;

export default App;
