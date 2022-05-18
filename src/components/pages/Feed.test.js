import renderer from 'react-test-renderer'
import Feed from './Feed'
import { render, fireEvent } from '@testing-library/react'
const test_influencers =
{
    "influencers": [
        {
            "audience": 2439571,
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg",
            "description": "Test description 1",
            "location": "Nampa, MS Dominican Republic",
            "name": "Test Name 1",
            "reach": 4.333,
            "resonance": 35.538,
            "uid": "036caeb1-0d56-46aa-b0ff-6a261a8d1239",
            "is_aligned": false,
            "channels": [
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "INSTAGRAM"
                },
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "TIKTOK"
                },
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "GITHUB"
                },
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "TWITCH"
                },
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "FACEBOOK"
                },
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "TWITTER"
                },
                {
                    "handle": "Giuseppe.Hickle54",
                    "platform": "REDDIT"
                }
            ]
        },
        {
            "audience": 268321,
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/657.jpg",
            "description": "Test description 2",
            "location": "Federal Way, DE Uganda",
            "name": "Test Name 2",
            "reach": 96.75,
            "resonance": 57.816,
            "uid": "70d2ffe6-23cc-44b5-bec8-f822386710d5",
            "is_aligned": true,
            "channels": [
                {
                    "handle": "Herman_Dietrich70",
                    "platform": "TWITCH"
                },
                {
                    "handle": "Herman_Dietrich70",
                    "platform": "TIKTOK"
                },
                {
                    "handle": "Herman_Dietrich70",
                    "platform": "GITHUB"
                },
                {
                    "handle": "Herman_Dietrich70",
                    "platform": "TWITTER"
                },
                {
                    "handle": "Herman_Dietrich70",
                    "platform": "REDDIT"
                }
            ]
        },
    ]
}
//mock two sample influencers for consistency
jest.mock('../../api/data.json', () => test_influencers)

describe('Feed page tests', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Feed />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('check search by name is working', () => {
        const feed = render(<Feed />)
        let influencerCards = feed.getAllByLabelText('influencer-card')
        expect(influencerCards).toHaveLength(2)
        const input = feed.getByLabelText('search-input')
        fireEvent.change(input, { target: { value: 'Test name 1' } })
        influencerCards = feed.getAllByLabelText('influencer-card')
        expect(influencerCards).toHaveLength(1)
    })

    it('check search by description is working', () => {
        const feed = render(<Feed />)
        let influencerCards = feed.getAllByLabelText('influencer-card')
        expect(influencerCards).toHaveLength(2)
        const input = feed.getByLabelText('search-input')
        fireEvent.change(input, { target: { value: 'Test description 2' } })
        influencerCards = feed.getAllByLabelText('influencer-card')
        expect(influencerCards).toHaveLength(1)
    })

})
