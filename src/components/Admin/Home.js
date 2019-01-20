import React from "react";
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

const Home = ({classes={}}) => (

    <React.Fragment>
        <div className={classes.appBarSpacer} />
        <Typography variant="h4" gutterBottom component="h2">
            Orders
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
            Products
        </Typography>
        <div className={classes.tableContainer}>
            <SimpleTable />
        </div>
    </React.Fragment>


);
export default Home;
