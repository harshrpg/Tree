import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import styles from './poc.module.css'


const POC = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className={styles.grid}>
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <Typography variant="h1" component="h2" gutterBottom>
                        Applying Personal Knowledge Graphs to Health
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                        Sola Shirai, Oshani Seneviratne, and Deborah L. McGuinness
Rensselaer Polytechnic Institute, Troy, New York, USA
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Introduction
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Knowledge-driven systems for decision-making in health care applications are powerful tools to
                            help provide actionable and explainable insights to patients and practitioners. In such systems,
                            knowledge about the particular patient - current condition, historical ailments, etc. - is central to
                            enable personalized health care.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <InteractiveScatterChart /> */}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default POC;