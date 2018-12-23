import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Intro from './Intro';
import ProjectItem from './ProjectItem';
import Profile from './Profile';
import Footer from '../components/Footer';
import sprProject from '../assets/spr-project.png';
import sprProjectLarge from '../assets/spr-project-large.png';
import sprProjectPlaceholder from '../assets/spr-project-placeholder.png';
import gamestackLogin from '../assets/chart_forex.jpg';
import gamestackLoginLarge from '../assets/gamestack-login-large.jpg';
import gamestackLoginPlaceholder from '../assets/gamestack-login-placeholder.jpg';
import gamestackList from '../assets/gamestack-list.jpg';
import gamestackListLarge from '../assets/system-security.jpg';
import gamestackListPlaceholder from '../assets/system-security.jpg';
import sliceProject from '../assets/380534.png';
import sliceProjectLarge from '../assets/slice-project-large.png';
import sliceProjectPlaceholder from '../assets/slice-project-placeholder.png';

const disciplines = ['Лендинг пейдж', 'Сайт-визитка компании', 'Интернет-магазин'];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disciplineIndex: 0,
      hideScrollIndicator: false,
      backgroundLoaded: false,
      visibleSections: [],
    }

    this.scheduledAnimationFrame = false;
    this.lastScrollY = 0;
  }

  componentDidMount() {
    const threeCanvas = this.threeCanvas;

    this.revealSections = [
      this.intro,
      this.projectOne,
      this.projectTwo,
      this.projectThree,
      this.details,
    ];

    import('../components/DisplacementSphere').then(DisplacementSphere => {
      this.setState({ backgroundLoaded: true });
      this.sphere = new DisplacementSphere.default(threeCanvas);
      requestAnimationFrame(() => this.sphere.init());
    });

    window.addEventListener('scroll', this.handleScroll);
    this.setState({ visibleSections: [this.intro] });
    this.switchDiscipline();
    this.initScroll();
  }

  initScroll = () => {
    const { status, location } = this.props;
    const { hash } = location;

    if (status !== 'entered') {
      requestAnimationFrame(this.initScroll);
    } else if (hash && status === 'entered') {
      this.handleHashchange(hash, false);
    } else if (status === 'entered') {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.sphere.remove();
    clearInterval(this.disciplineInterval);
  }

  componentDidUpdate(prevProps) {
    const { key: currentKey } = prevProps.location;
    const { key: nextKey, hash: nextHash } = this.props.location;

    if (currentKey !== nextKey && prevProps.status === 'entered') {
      this.handleHashchange(nextHash, true);
    }
  }

  handleScroll = () => {
    this.lastScrollY = window.scrollY;
    if (this.scheduledAnimationFrame) return;
    this.scheduledAnimationFrame = true;

    requestAnimationFrame(() => {
      const { visibleSections } = this.state;

      const revealableSections = this.revealSections.filter(section => {
        if (visibleSections.includes(section)) return false;
        return this.isInViewport(section, this.lastScrollY);
      });

      this.setState({
        visibleSections: [...visibleSections, ...revealableSections],
        hideScrollIndicator: this.lastScrollY >= 50,
      });

      this.scheduledAnimationFrame = false;
    });
  }

  handleHashchange = (hash, scroll) => {

    const hashSections = [this.intro, this.projectOne, this.projectTwo, this.projectThree, this.details];
    const hashString = hash.replace('#', '');
    const element = hashSections.filter(item => item.id === hashString)[0];

    if (element) {
      element.scrollIntoView({
        behavior: scroll ? 'smooth' : 'instant',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  isInViewport = (elem, scrollY) => {
    const rect = elem.getBoundingClientRect();
    const offsetY = window.pageYOffset;
    const revealOffset = window.innerHeight - 100;
    const top = rect.top + offsetY;
    return top - revealOffset <= scrollY;
  }

  switchDiscipline = () => {
    this.disciplineInterval = setInterval(() => {
      const { disciplineIndex } = this.state;
      const index = disciplineIndex >= disciplines.length - 1 ? 0 : disciplineIndex + 1;

      this.setState({
        disciplineIndex: index,
      });
    }, 5000);
  }

  render() {
    const { disciplineIndex, hideScrollIndicator,
      visibleSections, backgroundLoaded } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title>Веб студия Nurmaget | Розработка сайтов Любой сложности</title>
          <meta
            name="description"
            content="a digital designer working on web &amp; mobile apps with a focus on motion and user experience design."
          />
        </Helmet>
        <Intro
          id="intro"
          sectionRef={section => this.intro = section}
          threeCanvas={canvas => this.threeCanvas = canvas}
          disciplines={disciplines}
          disciplineIndex={disciplineIndex}
          hideScrollIndicator={hideScrollIndicator}
          backgroundLoaded={backgroundLoaded}
        />
        <ProjectItem
          id="portfolio"
          tabIndex={0}
          sectionRef={section => this.projectOne = section}
          visible={visibleSections.includes(this.projectOne)}
          index="01"
          title="ПРИМЕРЫ НАШИХ РАБОТ"
          description="За время своей работы мы разработали более 600 лендингов работающих во всех странах мира и генерирующих своим заказчикам тысячи обращений в сутки. Большинство клиентов заказали у нас по несколько лендингов на каждое направление своего бизнеса"
          buttonText="Посмотреть все роботы"
          buttonTo="/portfolio"
          imageSrc={[`${sprProject} 980w, ${sprProjectLarge} 1376w`]}
          imageAlt={['Smart Sparrow lesson builder']}
          imagePlaceholder={[sprProjectPlaceholder]}
          imageType="laptop"
        />
        <ProjectItem
          id="price"
          tabIndex={0}
          sectionRef={section => this.projectTwo = section}
          visible={visibleSections.includes(this.projectTwo)}
          index="02"
          title="СКОЛЬКО СТОИТ?"
          description="Наши цены вас приятно удивят, оплата поэтапная любым удобным способом"
          buttonText="Посмотреть росценки"
          buttonLink="/price"
          imageSrc={[
            `${gamestackLogin} 254w, ${gamestackLoginLarge} 508w`,
            `${gamestackList} 254w, ${gamestackListLarge} 508w`,
          ]}
          imageAlt={[
            'App login screen',
            'List of games being tracked',
          ]}
          imagePlaceholder={[
            gamestackLoginPlaceholder,
            gamestackListPlaceholder,
          ]}
          imageType="phone"
        />
        <ProjectItem
          tabIndex={0}
          sectionRef={section => this.projectThree = section}
          visible={visibleSections.includes(this.projectThree)}
          index="03"
          title="Блог"
          id="news"
          description="Выбор технологий для большого и не очень большого веб-проекта"
          buttonText="Перейти к блогу"
          buttonTo="/slice"
          imageSrc={[`${sliceProject} 980w, ${sliceProjectLarge} 1376w`]}
          imageAlt={['Annotating a biomedical image in the Slice app']}
          imagePlaceholder={[sliceProjectPlaceholder]}
          imageType="laptop"
        />
        <Profile
          tabIndex={0}
          sectionRef={section => this.details = section}
          visible={visibleSections.includes(this.details)}
          id="details"
        />
        <Footer />
      </React.Fragment>
    );
  }
}
