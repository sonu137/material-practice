export default {
    breadCrumbWrapper: {
        display: 'flex',
        margin: 0,
        padding: '0 20px',
    },

    breadCrumb: {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
    },

    breadCrumbList: {
        borderRight: '1px solid #fff',
        margin: '10px 0 0',
        padding: 0,
        cursor: 'pointer',

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
        fontSize: 11,
        margin: '10px 0',
        color: 'white',
    },
}
