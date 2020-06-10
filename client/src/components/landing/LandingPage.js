import React from 'react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(4),
    minHeight: 1000
  }
})

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Typography variant="h3" align='center'>
          DND Web App
        </Typography>
        <Typography variant="body2" align='center'>
          ARHGHTHASJDHSOAD
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
