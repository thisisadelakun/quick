import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const SocialM = () => {
    return (
        <div className='brand'>
            <Seo
                title="Social Media Marketing- Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader4">
                <div className="container">
                    <h1>SOCIAL MEDIA MARKETING</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    The days of “interrupting” a target market with a marketing message are over. The world today is in the middle of an ongoing conversation.
                    An organization’s challenge is to join that conversation and add value. <br />
                    Social Media is moving at a staggering pace. New networks, services and social media platforms launch every day. Our Social Media team
                    tracks technology and consumer behavior trends for our clients. We then provide content for these social media platforms that connects the brand with customers.
                </p>
                <p>
                    The Fusion 360 Social Media Marketing approach leads to consistent, integrated campaigns that go way beyond the superficial,
                    resulting in content the consumers want to engage with and share with others.
                </p>

                <p>
                    Social media impacts all ages and genders, in particular adults 18-34 are most likely to follow a brands social media platform. As our
                    social media marketing is part of our content marketing offering our team can develop highly engaging written and visual content for each
                    of the brands social media channels. Not only can social media create more brand awareness and more sales, people who have had a good
                    experience with a brand via social media are 71% more likely to recommend the product or service (Ambassador).
                </p>

                <p>
                    When it comes to social media visual content is key. Visual content is 40 times more likely to be shared than other forms of
                    content (Hubspot). For this reason the majority of our team at Fusion 360 create and produce video, infographics and other
                    forms of visual content each month.
                </p>
                <p>
                    Our social media team at Fusion 360 uses advanced tools and algorithms to post on your social media platforms at the optimal time.
                    One day and time may work best for one client, it doesn’t mean it will for another. Out posting strategy is customized for your
                    brand and your brand alone.
                </p>
                <p>
                    We work with clients of various sizes, from small local businesses to worldwide organizations, the social media needs of each for our
                    clients varies. In some cases we completely take control or your social media from A-Z, in other cases our clients already have
                    a social media team in place. When our clients already have social media team we work along side that team in any capacity
                    that we are needed, from creating content, posting content, measuring engagement etc… We do not believe in a “one size fits
                    all” we know that every organization is different.
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

export default SocialM