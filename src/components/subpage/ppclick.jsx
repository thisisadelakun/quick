import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const PpClick = () => {
    return (
        <div className='brand'>
            <Seo
                title="Pay Per Click Advertising - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader5">
                <div className="container">
                    <h1>PAY PER CLICK</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    The Fusion 360 Outbound Media Department offers strategic thinking for our clients. Extensive research and planning goes into every
                    outbound media campaign. <br />
                    Whether it is a Pay Per Click (PPC) campaign, through Google’s Adwords platform, an online video campaign through YouTube or a remarketing
                    campaign, all campaigns are thoroughly researched and analyzed daily to ensure they are meeting delivery goals.
                </p>
                <p>
                    Our outbound media strategies are unmatched. Each member of our outbound media team is Google Adwords Certified and receives
                    extensive on-going training.
                </p>

                <p>
                    But what does pay per click success look like? PPC success depends on the expected outcome of the campaign. Various outcomes maybe:
                </p>

                <ul>
                    <li>• Awareness</li>
                    <li>• Interest</li>
                    <li>• Consideration</li>
                    <li>• Intent</li>
                    <li>
                        • Evaluation
                    </li>
                    <li>
                        • Sale
                    </li>
                </ul>

                <p>
                    Each campaign we create is cerated with the end goal in mind, if you’re looking for an increase in brand awareness this will be a
                    very different campaign to a campaign targeting an increase in sales. At the very beginning we sit with each of our clients to
                    establish what their needs are for the PPC campaign and then plan and build the campaign around those needs while showing the
                    client exactly what to expect.
                </p>
                <p>
                    Being the number 1 pay per click listing on Google is important, the average click through rate for the first position is 7.94%
                    compared with an average of 2% for all other positions (AccuraCast). Many firms try and achieve the top result by bidding a
                    higher dollar amount, this wastes money. Our team of experts focus on all aspects of the campaign to achieve the top results
                    while keeping the costs as low as possible. One of the many areas we focus on is the quality score for each keyword, the
                    better quality score the lower the bid needs to be. We want our clients dollars to stretch further.
                </p>
                <p>
                    Many online marketing firms focus 100% of their efforts on Google Adwords as 71% of searches are completed on Google. While this
                    is a large percentage of the searches taking place there are also 29% of people who are being missed, most of which are
                    searching on Bing and Yahoo. At Fusion 360 we do not neglect people searching on these sites, in fact our campaigns on
                    Bing and Yahoo often cost less per click, have a higher click through rate and a higher conversion rate.
                </p>
            </div>

            <div className="contacts">
                <Contact />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default PpClick