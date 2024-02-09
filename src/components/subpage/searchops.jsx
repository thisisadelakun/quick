import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const Searchops = () => {
    return (
        <div className='brand'>
              <Seo
                title="Search Engine Optimization - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />
            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader3">
                <div className="container">
                    <h1>SEARCH ENGINE OPTIMIZATION</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    At Fusion 360, Search Engine Optimization is part of our Content Marketing offering. How a brand performs in the digital world is
                    based largely upon it’s ability to be found by potential customers. Our SEO efforts go way beyond simply optimizing your website.
                    SEO is about producing relevant content that customers not only want to interact with, but share with their friends. This content
                    could be editorial content, sharing data through an info-graphic, branded entertainment or something entirely new.
                    All of this content is produced 100% in-house, by our team of journalists, writers, designers and producers.
                </p>

                <p>
                    We only accept (1) SEO client per industry so our clients don’t ever compete with each other. Our SEO results are unsurpassed and guaranteed.
                </p>

                <p>
                    When we are talking search engine rankings we are talking Google. In 2017 Google accounted for over 79% of all global desktop search
                    engine traffic, second placed Bing accounted for only 7.27% (NetMarketShare).
                </p>

                <p>
                    Each SECOND Google receives over 63,000 search queries (HubSpot), that’s A LOT of searches per day. Through research we can find
                    the top keywords for your industry along with the number of monthly searches for each keyword. This gives us the ability to
                    show you using Google’s numbers how many people are likely to visit your website. With this information and your current
                    organic conversion rate we can calculate increase in sales and increase in revenue.
                </p>

                <p>
                    In the United States more Google searches are performed on mobile devices than any other computer. This has impacted the way
                    people search and 50% of search queries are now 4 words or more (HubSpot). Our SEO and content marketing efforts take this
                    into account, optimizing the search queries to improve rankings on keywords people are actually looking for.
                </p>

                <p>
                    In 2018 companies are expected to spend 41% of their marketing budget on online advertising, including SEO (Web Strategies).
                    This is expected to grow over the coming years to 45% in 2020 as more marketing dollars are moved away from traditional
                    advertising avenues to precision targeted online advertising.
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

export default Searchops