import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DropzoneComponent from 'react-dropzone-component';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    modalAdmin: {
        display: 'flex',
        flexWrap: 'wrap',
        background: '#fff',
        padding: '0 15px',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    Dropzone: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '100%',
        margin: '10px 0',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class AdminModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            currency: 'EUR',
            labelWidth: 0,
        };
        this.djsConfig = {
            acceptedFiles: "image/jpeg,image/png,image/gif",
            addRemoveLinks: true,
            params: {
                myParam: 'Hello from a parameter!',
                anotherParam: 43
            }
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/uploadHandler'
        };

        // If you want to attach multiple callbacks, simply
        // create an array filled with all your callbacks.
        this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

        // Simple callbacks work too, of course
        this.callback = () => console.log('Hello!');
    }


    /*componentDidMount() {
        this.state({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }*/

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        const djsConfig = { autoProcessQueue: false }
        const eventHandlers = { addedfile: (file) => console.log(file) }

        return (
            <form className={classes.root} autoComplete="off" className={classes.modalAdmin}>
                <div className={classes.Dropzone}>
                    <DropzoneComponent config={componentConfig}
                                       eventHandlers={eventHandlers}
                                       djsConfig={djsConfig} />
                </div>

                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                     id="filled-helperText"
                     label="Title"
                     defaultValue="Default Title"
                     className={classes.textField}
                     helperText="Some important text"
                     margin="normal"
                     variant="filled"
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            Age
                        </InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="age"
                                    id="outlined-age-simple"
                                />
                            }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                     id="description"
                     label="description"
                     style={{ margin: 8 }}
                     placeholder="Description"
                     helperText="description"
                     fullWidth
                     margin="normal"
                     variant="filled"
                     InputLabelProps={{
                         shrink: true,
                     }}
                    />
                </form>
            </form>

        );
    }
}

AdminModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ModalWrapped = withStyles(styles)(AdminModal);

export default ModalWrapped;
