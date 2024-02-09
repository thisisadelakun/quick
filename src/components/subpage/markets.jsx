import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import goalss from '../../assets/Chart-Content-Marketing.001.jpeg.001.jpeg.001-768x576.jpeg'
import Seo from '../../hooks/seo/Seo'

const Markets = () => {
    return (
        <div className='brand'>
            <Seo
                title="Contact Marketing - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader2">
                <div className="container">
                    <h1>UTAH CONTENT MARKETING</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    Looking to increase your search engine rankings? Content marketing is the ONLY way to do it.
                </p>
                <p>
                    Fusion 360’s content marketing department was built specifically to produce the content that makes digital marketing work. Our 100% in-house
                    team consists of digital strategists and content producers. We write, edit, produce, manage, moderate and measure your social media, blogging,
                    on-line video and every other form of digital media.
                </p>

                <p>
                    To us content marketing is about telling the story of your brand and how your service / product can help your target audience. Content isn’t
                    only about creating blog posts, it’s an all encompassing marketing strategy creating content for your owned, earned and paid media channels
                    targeting your primary and secondary audiences.
                </p>

                <p>
                    How do we do this? We embed our brand reporters within your organization and then offer your customers a multi-media experience full of the
                    informative content they are seeking. We listen and engage customers, all in real time. Our content is not only written but also visual,
                    telling the story and providing useful information that your audience is craving in the way they want to consume it, all the time bringing
                    more people to your website and most importantly increasing your rankings on Google.
                </p>

                <div className="brand-image">
                    <div className='brand-image-img'>
                        <img src={goalss} alt="" className='img-fluid' />
                    </div>

                    <div>
                        <p>
                            Now is the time to start your content marketing campaign. Did you know that according to DemandMetric content marketing costs 62% less
                            than traditional marketing AND generates on average 3 times more leads? There is no better time to start generating content for
                            your brand. 57% of marketers says that producing custom content for their brand was their top priority (Altimeter) and 60% of marketers
                            create at least one piece of branded content each day (eMarketer).
                        </p>

                        <p>
                            The branded content reporters at Fusion 360 are capable of understanding your brand, it’s message and story, identify your primary
                            and secondary target, produce the amount of content needed to achieve your sales goals and deploy the content to all the relevant
                            channels while increasing your Google organic rankings.
                        </p>

                        <p>
                            Good content marketing can achieve incredible results and achieve company goals. These can include brand awareness, lead
                            generation, engagement, sales etc…
                        </p>
                    </div>

                </div>
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

export default Markets