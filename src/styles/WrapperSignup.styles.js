export default (theme) => ({
    card: {
      width: '400px',
      // minWidth: '1128px',
      margin: '0 auto',
      borderRadius: '2px',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'left',
      resize: 'both',
      overflow: 'auto',
      position: 'absolute',
      zIndex: '1',
      top: '5%',
      left: '25%',
      transform: 'translateX(50%)',

      [theme.breakpoints.up('xs')]: {
        width:'300px',
        marginTop: '5rem',
      },
      [theme.breakpoints.up('sm')]: {
        width:'300px',
        marginTop: '5rem',
      },
      [theme.breakpoints.up('lg')]: {
        width:'400px',
        marginTop: '5rem',
      },
    },

    content: {
      margin: '0',
      padding: '0',
      marginTop: '1rem',
    },

    title: {
      fontSize: 24,
      color: 'black',
      fontWeight: '400',
      textAlign: 'center',
      marginTop: '5px',
    },

    subtitle: {
      color: 'black',
      fontWeight: '400',
      textAlign: 'center',
      margin: '10px 0 12px',
    },

    pos: {
      marginBottom: 12,
    },

    header: {
        backgroundColor: 'none',
        marginBottom: '1rem',
        textAlign: 'center',
    },

    bootstrapFormLabel: {
      color: 'black',
      margin: '8px 0 4px',
    },

    formsdata: {
      backgroundColor: '#EDF0F3',
      display: 'flex',
      flexFlow: 'row wrap',
      padding: '0 25px',
      flex: '1',
      minWidth: '0',
      // justifyContent: 'center',
    },

    forms: {
      border: '1px solid grey',
      marginBottom: '10px',
      backgroundColor: 'white',
    },

    policy:{
      fontSize: '11.5px',
      color: 'black',
      marginBottom: '1rem',
    },

    divider: {
      backgroundColor: '#7d7878',
    },

    button: {
      backgroundColor: '#0073b1',
      textTransform: 'initial',
      fontSize: '16px',
      fontWeight: '500',
    },

    Input: {
      marginLeft: '10px',
    },
  });
