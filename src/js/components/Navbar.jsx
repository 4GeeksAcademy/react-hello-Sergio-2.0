export const Navbar= () => {

    return (

        <section>
            <div class= "container-fluid m-0">
                <nav class="navbar navbar-expand-lg bg-dark text-light">
                    <div class="container">
                        <a class=" ms-3 text-light text-decoration-none" href="#">Start Bootstrapp</a>
                        <ul class="nav justify-content-end ">
                            <li class="nav-item text-light text-decoration-none">
                                <a class="nav-link text-light " href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light " href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled text-light " aria-disabled="true">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled text-light " aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}