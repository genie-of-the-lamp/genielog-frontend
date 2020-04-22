const palette = {
    gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
    red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', 'c92a2a'],
    violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
    cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
    yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
}

export const colorSet = {
    gray: {
        color: "white",
        background: palette.gray[5],
        hover: palette.gray[5],
        active: palette.gray[6]
    },
    red: {
        color: "white",
        background: palette.red[8],
        hover: palette.red[7],
        active: palette.red[9]
    },
    violet: {
        color: "white",
        background: palette.violet[4],
        hover: palette.violet[3],
        active: palette.violet[5]
    },
    violetInverse: {
        color: palette.violet[5],
        background: "none",
        hover: palette.violet[3],
        active: palette.violet[6]
    },
    cyan: {
        color: "white",
        background: palette.cyan[5],
        hover: palette.cyan[4],
        active: palette.cyan[6]
    },
    cyanInverse: {
        color: palette.cyan[6],
        background: "none",
        hover: palette.cyan[0],
        active: palette.cyan[1]
    },
    yellow: {
        color: "white",
        background: palette.yellow[5],
        hover: palette.yellow[4],
        active: palette.yellow[6]
    },
    yellowInverse: {
        color: palette.yellow[6],
        background: "none",
        hover: palette.yellow[5],
        active: palette.yellow[7]
    }
}

export default palette;