import { Metadata } from "next"

export const metadata: Metadata = {
    title: "prototype.com",
}

import styles from './main.module.css'
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
})

export default function Page() {
    return <div className={`${styles.body} ${ubuntu.className}`}>
        <header className={styles.Mainnav}>
            <div className={styles.title}>
                <b className={styles.bold}>PROTOTYPE</b>
            </div>
            <div className={styles.Inputs1}>
                <input type="search" placeholder="Search..." className={styles.Searchbar} /><div className={styles.mg}><i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i></div>
                <ul className={styles.ul1}>
                    <li>
                        <a href="#" className={styles.license}>License</a>
                        <a href="#" className={styles.pricing}>Pricing</a>
                        <input type="button" value="Get Unlimited Tutorials" className={styles.GUD} /><div className={styles.Menubar}><i className="fa-solid fa-bars" aria-hidden="true"></i></div>
                        <div className={styles.profileIcon}><a href="#"><i className="fa-solid fa-user" aria-hidden="true"></i></a></div>
                    </li>
                </ul>
            </div>
            <nav className={styles.Subnav}>
                <div className="hover-trigger">
                    <ul className={styles.SN}>
                        <li className={styles.Sublists}>
                            <div className={styles.SVC}><a href="#" className={`${styles.lefts} ${styles.left1}`}>Business</a>
                                <ul className={styles.Dropdown1}>
                                    <li><a href="#">Entrepreneurship</a></li>
                                    <li><a href="#">Communication</a></li>
                                    <li><a href="#">Management</a></li>
                                    <li><a href="#">Sales</a></li>
                                    <li><a href="#">Business Strategy</a></li>
                                    <li><a href="#"><em className={styles.em}>Visit Department...</em></a></li>
                                </ul></div>


                            <div className={styles.VTC}><a href="#" className={`${styles.lefts} ${styles.left2}`}>Finance &amp; Accounting</a>
                                <ul className={styles.Dropdown2}>
                                    <li><a href="#">Accounting and Bookkeeping</a></li>
                                    <li><a href="#">Cryptocurrency and Blockchain</a></li>
                                    <li><a href="#">Finance</a></li>
                                    <li><a href="#">Financial Modelling and Analysis</a></li>
                                    <li><a href="#">Investing and Trading</a></li>
                                    {/* <li><a href="#" className={styles.CVT}>Create with Video Templates</a> <p><em className={styles.em}>Find useful resources and learn more about creating with Video Templates</em></p></li> */}
                                    <li><a href="#"><em className={styles.em}>Visit  Department...</em></a></li>
                                </ul></div>

                            <div className={styles.MC}><a href="#" className={`${styles.lefts} ${styles.left3}`}>Music</a>
                                <ul className={styles.Dropdown3}>
                                    <li><a href="#">Insruments</a></li>
                                    <li><a href="#">Music Production</a></li>
                                    <li><a href="#"></a>Music Fundamentals</li>
                                    <li><a href="#">All Music</a></li>
                                    <li><a href="#"></a>Vocal</li>
                                    <li><a href="#">Music Production</a></li>
                                    <li><a href="#"></a>Music Software</li>
                                    <li><a href="#"><em className={styles.em}>Visit Department...</em></a></li>
                                </ul></div>

                            <div className={styles.SEC}><a href="#" className={`${styles.lefts} ${styles.left4}`}>School Subjects</a>
                                <ul className={styles.Dropdown4}>
                                    <li><a href="#">Mathematics</a><a href="#" className="Dropdown4_sider1">Literature</a><a href="#">Computer Science</a></li>
                                    <li><a href="#">Foreign Languages</a> <a href="#" className="Dropdown4_sider2">Economics</a><a href="#">English Studies</a></li>
                                    <li><a href="#">Geography</a> <a href="#" className="Dropdown4_sider3">Religious Studies</a><a href="#">Health Education</a></li>
                                    <li><a href="#">Sciences</a><a href="#" className="Dropdown4_sider4">Technical Drawing</a><a href="#">Technology</a></li>
                                    <li><a href="#">Art &amp; Design</a><a href="#" className="Dropdown4_sider5"></a><a href="#">Agricultural Science</a></li>
                                    <li><a href="#">Business Studies</a><a href="#" className="Dropdown4_sider6">Social Studies</a><a href="#">Marketing</a></li>
                                    <li><a href="#"><em className={styles.em}>More Subjects...</em></a></li>
                                </ul></div>

                            <div className={styles.GT}><a href="#" className={`${styles.lefts} ${styles.left5}`}>Design</a>
                                <ul className={styles.Dropdown5}>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Graphicn Design and Illustration</a></li>
                                    <li><a href="#">Design Tools</a></li>
                                    <li><a href="#">User Experience Design</a></li>
                                    <li><a href="#">Game Design</a></li>
                                    <li><a href="#">3D and Animation</a></li>
                                    <li><a href="#"><em className={styles.em}>All Graphic Templates</em></a></li>
                                </ul></div>

                            <div className={styles.GR}><a href="#" className={`${styles.lefts} ${styles.left6}`}>Development</a>
                                <ul className={styles.Dropdown6}>
                                    <li><a href="#">Web Development</a><a href="#">Excel</a></li>
                                    <li><a href="#">Mobile Development</a><a href="#">Networking</a></li>
                                    <li><a href="#">Programming Languages</a></li>
                                    <li><a href="#">Game Development</a></li>
                                    <li><a href="#">Database Design and Development</a></li>
                                    <li><a href="#">Software Testing</a></li>
                                    <li><a href="#"><em className={styles.em}>Visit Department...</em></a></li>
                                </ul></div>

                            <div className={styles.PT}><a href="#" className={`${styles.lefts} ${styles.left7}`}>Office Productivity</a>
                                <ul className={styles.Dropdown7}>
                                    <li><a href="#">Microsoft</a></li>
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Google</a></li>
                                    <li><a href="#">SAP</a></li>
                                    <li><a href="#">Oracle</a></li>
                                    <li><a href="#">Other Office Productivity</a></li>
                                    <li><a href="#"><em className={styles.em}>All Presentation Templates</em></a></li>
                                </ul></div>

                            <div className={styles.FC}><a href="#" className={`${styles.lefts} ${styles.left8}`}>Marketing</a>
                                <ul className={styles.Dropdown8}>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Search Engine Optimization</a></li>
                                    <li><a href="#">Social Media Marketing</a></li>
                                    <li><a href="#">Branding</a></li>
                                    <li><a href="#">Marketing Fundamentaks</a></li>
                                    <li><a href="#">Marketing Analytics &amp; Automation</a></li>
                                    <li><a href="#"><em className={styles.em}>Visit Department...</em></a></li>
                                </ul></div>

                            <div className={styles.LC}>
                                <a href="#" className={`${styles.learnN} ${styles.left9}`}>Learn</a>
                                <ul className={styles.Dropdown10}>
                                    <li><span className=".LC_blog">BLOG</span><span className="USk">UP SKILL</span></li>
                                    <li><a href="#">Video &amp; Music</a><a href="#" className={styles.Dropdown10_sider1}>Tuts + Tutorials</a></li>
                                    <li><a href="#">Design</a><a href="#" className={styles.Dropdown10_sider2}>Tuts + Youtube</a></li>
                                    <li><a href="#">Marketing</a><a href="#" className={styles.Dropdown10_sider3}>Tuts &amp; Resources</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#"><em className={styles.em}>Explore Blog</em></a></li>
                                </ul>
                            </div>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div className={styles.hero}>
            <h1><p><b className={styles.bold}>The unlimited tutorial subscription</b></p></h1>
            <p className={styles.subhero}>Unlimited downloads of 18+ million creative assets. From just $16.50/month.</p>
        </div>
        <div className={styles.Herosampleimages}>
            <div className={styles.businessmainimg}><a href="#"><img src="business.jpeg" alt="businessmainimg" /></a><h4>Business</h4><a href="#">110,000+</a></div>
            <div className={styles.Financeaccounting}><a href="#"><img src="Financeaccounting.jpg" alt="Finance&amp;accounting" /></a><h4>Finance &amp; Accounting</h4><a href="#">310,000+</a></div>
            <div className={styles.musicmainimg}><a href="PTimg"><img src="musicmain.jpg" alt="musicmainimg" /></a><h4>Music</h4><a href="#">130,000+</a></div>
            <div className={styles.schoolsubjectsmain}><a href="#"><img src="schoolsubjects.jpg" alt="schoolsubjectmain" /></a><h4>Academics</h4><a href="#">10.6M+</a></div>
            <div className={styles.designmainimg}><a href="#"><img src="designmainimg.jpg" alt="designmainimg" /></a><h4>Design</h4><a href="#">52,000+</a></div>
            <div className={styles.developmentmainimg}><a href="#"><img src="developmentmain.jpeg" alt="developmentmainimg" /></a><h4>Development</h4><a href="#">7,500+</a></div>
            <div className={styles.officeproductivitymainimg}><a href="#"><img src="officeproductivity.webp" alt="officeproductivitymainimg" /></a><h4>Office Productivity</h4><a href="#">260,000+</a></div>
            <div className={styles.marketingmainimg}><a href="#" className="RfMmain"><img src="marketing.jpg" alt="marketingmainimg" /></a><h4>Royalty-free Music</h4><a href="#">160,000+</a></div>

            <div className={styles.Imgcategory_button}><a href="#"><button type="button">See all Category</button></a></div>
        </div>
        <section><div className={styles.Reason_Why_hero}>
            <p></p><h2>Why Creators Choose Elements</h2><p></p>
            <div className={styles.Hero2_img1}><img src="gallery.png" alt="#" /><h4>18+ Million Assets</h4><h5>Be inspired &amp; get everything you need for any project.</h5></div>
            <div className={styles.Hero2_img2}><img src="arrow.png" alt="#" /><h4>Unlimited Downloads</h4><h5>Freedom to play, experiment and create.</h5></div>
            <div className={styles.Hero2_img3}><img src="licensing.png" alt="#" /><h4>Commecial License</h4><h5>All assets are covered by our simple lifetime commercial license.</h5></div>
            <div className={styles.Hero2_img4}><img src="unlocking.png" alt="#" /><h4>Cancel any time</h4><h5>We believe in creative freedom - canceling is quick &amp; free.</h5></div>
        </div></section>
        <section><div className={styles.planspricing}>
            <p></p><h2>Plans and Pricing</h2><p></p>
            <div className={styles.Individualsplan}><span><p>Individuals</p><samp>The Ultimate creative subscription</samp><p className="p2">From <b className={styles.bold}>$16.50</b>/m</p></span></div>
            <div className={styles.Studentsplan}><span><p>Individuals</p><samp>The Ultimate creative subscription</samp><p className="p2">From <b className={styles.bold}>$16.50</b>/m</p></span></div>
        </div></section>
    </div>
}
