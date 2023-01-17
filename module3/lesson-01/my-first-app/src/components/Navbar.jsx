function NavBar(props){
    console.log(props.links)
    return(
        <nav>
            <ul>
                {props.links.map(link => {
                    return <li>{link}</li>
                })}
            </ul>
        </nav>
    )
}

export default NavBar;