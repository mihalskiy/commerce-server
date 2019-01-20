import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { secondaryListItems } from './listItems';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LayersIcon from '@material-ui/icons/Layers';
import Porfolios from './Portfolios'
import Home from './Home';
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import {getPortfolioList, getPortfolioSuccess} from "../../redux/portfolio/portfolio.action";
import {compose, withProps} from 'recompose'
const drawerWidth = 240;

const menu = [
    {
        id: 1,
        title: 'Главная',
        icon: (<DashboardIcon />)
    },
    {
        id: 2,
        title: 'Заказы',
        icon: (<ShoppingCartIcon />)
    },
    {
        id: 3,
        title: 'Портфолио',
        icon: (<BarChartIcon />)
    },
    {
        id: 4,
        title: 'Цены',
        icon: (<LayersIcon />)
    },
    {
        id: 5,
        title: 'Новости',
        icon: (<PeopleIcon />)
    }];

const divStyle = {
    color: 'blue',
    backgroundColor: '#ccc',
};

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPortfolioList,
    getPortfolioSuccess

}, dispatch);

class Dashboard extends React.Component {
    state = {
        open: true,
        type: '',
        activeIndex: 0
    };

    UNSAFE_componentWillMount() {
        this.props.getPortfolioList();
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleClick(index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        const { classes, portfolio } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                this.state.open && classes.menuButtonHidden,
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menu.map((val, index) => (
                            <ListItem
                                key={index}
                                tabindex={index}
                                value={index}
                                style={this.state.activeIndex === index ? divStyle : null}
                                onClick={this.handleClick.bind(this, index)}
                                button>
                                <ListItemIcon>
                                    {val.icon}
                                </ListItemIcon>
                                <ListItemText primary={val.title}/>
                            </ListItem>
                        ))
                        }
                    </List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
                { this.state.activeIndex === 0 && portfolio &&

                        <Porfolios portfolios={portfolio.payload.result} />
                }
                { this.state.activeIndex === 1 &&
                <Home clases={classes} />
                }
                { this.state.activeIndex === 2 &&
                    <Home clases={classes} />
                }


            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        portfolio: state.portfolio.payload,
        loading: state.portfolio.loading,
        totalPages: state.portfolio.payload
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps)
)(Dashboard);
