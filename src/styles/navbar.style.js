export default (theme) => ({
    navbar: {
      backgroundColor: '#283e4a',
      position: 'fixed',
      minWidth: '1200px',

      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        minWidth: '1096px',
      },
    },

    button: {
      padding: '8px 15px',
      color: '#fff',
      borderColor: 'black !important',
      borderRadius: 5,
      fontSize: '12px',
      marginBottom: '13px',
      backgroundColor: '#283e4a',
      display: 'inlineBlock',
      cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'white',
          color: 'black',
        },
    },

    subheading:{
      margin: 25,
      color: '#cdcfd2',
      fontSize: 15,
      cursor: 'pointer',
      display: 'inline-block',  

        '&:hover': {
        textdecoration: 'underline',
        color: 'white',
      },
    },

    input: {
      display: 'none',
    },

    title: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '20rem',
      [theme.breakpoints.up('md')]: {
        left: '0',
        right: '0',
      },
    },

    margin: {
      margin: theme.spacing.unit,
    },

    bootstrapInput: {
      display: 'flex',
      borderRadius: 2,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 12,
      padding: '8px 10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },

    bootstrapFormLabel: {
      fontSize: 15,
    },
  })
