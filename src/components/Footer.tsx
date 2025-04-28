const Footer = () => {
  return (
    <footer className="p-30 border-base-200">
        <h1>Ableton</h1>
        <div id="foot-ctn" className="grid grid-cols-3 grid-rows-2">
        <div id="social">
            <ul>
                <li>Register Live or Push</li>
                <li>About Ableton</li>
                <li>Jobs</li>
                <li>Social icons</li>
            </ul>
        </div>
        <div id="education">
            <ul>
                <li>Education</li>
                <li>Offers for students and teachers</li>
                <li>Offers for institutions</li>
                <li>Push 1 trade-in initiative</li>
            </ul>
        </div>
        <div id="newsletter">
            <li>Sign up to our newsletter</li>
            <li>Enter your email address to stay up to date with the latest offers, tutorials, downloads and more.</li>
            <li><input type="email" /><button>Sign up</button></li>
        </div>
        <div id="Community">
            <ul>
                <li>Community</li>
                <li>Find Ableton User Groups</li>
                <li>Find Certified Training</li>
                <li>Become a Certified Trainer</li>
            </ul>
        </div>
        <div id="distributors">
            <ul>
                <li>Distributor</li>
                <li>Find Distributors</li>
                <li>Try Push in-store</li>
            </ul>
        </div>
        <div id="language-selector">
            
        </div>

        </div>
    </footer>
  )
}
export default Footer