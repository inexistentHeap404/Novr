import "./Layout.css";
export default function Layout(){
    return(
        <div className="parent">
            <nav>
                    <div>novr</div>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>novrVision</li>
                    </ul>
            </nav>
            <section className="quoteSect">
                <div className="quote">
                    Blend in? <i>Nah</i>. Be the one.
                </div>
            </section>
            <section className="showcase">
                <div className="showcaseGrid">
                </div>
            </section>
        </div>
    )
}