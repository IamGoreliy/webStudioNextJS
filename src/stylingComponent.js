import styled from "@emotion/styled";
import {Box, Button, Typography} from "@mui/material";

export const Logo = styled(props => {
    const {href, style, ...other} = props;
    return <a href={href} {...other}/>
})(({style}) => {
    return {
        fontSize: '24px',
        color: 'black',
        textDecoration: 'none',
        ...style,
    }
});

export const SpanForLogo = styled(props => {
    const {style, ...other} = props;
    return <span {...other}/>
})(({style}) => {
    return {
        color: 'orange',
        ...style,
    }
});

export const NavigationBtn = styled(props => {
    const {href, style, ...other} = props;
    return <a href={href} {...other}/>
})(({style}) => {
    return {
        color: 'blueviolet',
        textDecoration: 'none',
        ...style,
    }
});

export const HeaderButton = styled(props => {
    const {sx, variant, ...other} = props;
    return <Button variant={variant} {...other}/>
})(({sx}) => {
    return {
        color: 'yellow',
        ...sx,
    }
});

export const TextDecoration = styled(props => {
    const {sx, variant, paragraph, ...other} = props;
    return <Typography variant={variant} paragraph={paragraph} {...other} />
})(({sx}) => {
    return {
        ...sx,
    }
});

export const ListSocial = styled(props => {
    const {sx, component, ...other} = props;
    return <Box component={component} {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
})

export const CustomLink = styled(props => {
    const {style, href, ...other} = props;
    return <a href={href} {...other}/>
})(({style}) => {
    return {
        display: 'flex',
        textDecoration: 'none',
        ...style,
    }
});

export const CustomButton = styled(props => {
    const {sx, variant, ...other} = props;
    return <Button variant={variant} {...other} />
})(({sx}) => {
    return {
        ...sx
    }
});

export const CustomList = styled(props => {
    const {sx, component, ...other} = props;
    return <Box component={component} {...other}/>
})(({sx}) => {
    return {
        '&:hover': {
            backgroundColor: '#2196F3',
        },
        ...sx,
    }
});


export const CustomInput = styled(props => {
    const {sx, ...other} = props;
    return <Box component={'input'} {...other}/>
})(({sx}) => {
    return {
        width: '338px',
        height: '50px',
        borderRadius: '5px',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: '16px',
        color: 'white',
        paddingLeft: '20px',
        '&:placeholder': {
            paddingLeft: '20px'
        },
        ...sx,
    }
})

