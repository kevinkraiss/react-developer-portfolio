const Header = props => {
    return (
        <header>
            <h1>Kevin Kraiss</h1>
            {props.children}
        </header>
    )
}

export default Header