export default{
    breadCrumbWrapper: {
        display: 'flex',
        margin: 0,
    },

    breadCrumb: {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
    },

    breadCrumbList: {
        borderRight: '1px solid #fff',

        '&:last-child': {
            borderRight: 0
        },

        '& a': {
            margin: '5px 10px',
            textDecoration: 'none',
            color: 'white',
        },
    },

    breadCrumbTitle: {
        fontSize: 15,
        margin: '5px 20px 0',
        color: 'white',
    },
}
