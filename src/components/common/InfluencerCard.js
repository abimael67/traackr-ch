import './InfluencerCard.css'
import '../../style/tooltip.css'
import { amountFormatter } from '../../utils/amounts'
import { getSocialIcon } from '../../utils/icons'
const InfluencerCard = ({ influencer }) => {
    return (
        <div aria-label="influencer-card" className="card">
            <div className="card-content">
                <div className="columns">
                    <div className="column is-2">
                        <div className="image">
                            <img className='is-rounded' src={influencer.avatar} />
                            {influencer.is_aligned && <div className="checkmark-container">
                               <ion-icon name="checkmark-circle"></ion-icon>
                            </div>}
                        </div>
                        <div className="columns is-vcentered is-mobile">
                            <div className="column is-1"><ion-icon name="person"></ion-icon></div>
                            <div className="column"><p style={{ fontSize: 10 }}> {amountFormatter(influencer.audience)}</p></div>
                        </div>
                    </div>
                    <div className="column">
                        <p className="title is-4">
                            {influencer.name}
                        </p>
                        <div id='social-networks' className="columns is-mobile">
                           {influencer.channels.map((social, ind) => <div key={social.handle + ind}  data-tooltip={`@${social.handle}`} className="column is-0 has-tooltip-bottom"><ion-icon name={getSocialIcon(social.platform)}></ion-icon></div>)} 
                            
                        </div>
                        <p className="subtitle is-7">
                           {influencer.description}
                        </p>
                        <div className="columns">
                            <div className="column">
                                <p><strong>Reach:</strong> {influencer.reach}</p>
                            </div>
                            <div className="column">
                                <p><strong>Resonance:</strong> {influencer.resonance}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfluencerCard