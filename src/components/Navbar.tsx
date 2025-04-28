const Navbar = () => {
  return (
    <nav className="w-screen fixed flex justify-between items-center z-20">
        <div id="menu" className="w-1/2 ">
            <ul className="w-full flex flex-row justify-around">
                <a href="#home">
                    <li id="logo"></li>
                </a>
                <a href="#"><li id="" className="links">Live</li></a>
                <a href="#"><li id="" className="links">Push</li></a>
                <a href="#"><li id="" className="links">Link</li></a>
                <a href="#"><li id="" className="links">Shop</li></a>
                <a href="#"><li id="" className="links">Packs</li></a>
                <a href="#"><li id="" className="links">Help</li></a>
                <a href="#"><li id="" className="links">More +</li></a>
            </ul>
        </div>
        <div id="login" className="flex items-center">
            <ul className="flex justify-between">
                <a href="#"><li className="accent">Try Live for free</li></a>
                <a href="#"><li>Account</li></a>
                <a href="#"><li>Log out</li></a>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar