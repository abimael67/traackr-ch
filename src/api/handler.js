import Data from './data.json'
//simple backend simulated endpoint
const getInfluencer = (from, count, keyword = '') => {
    const toReturn = {}
    let tempData = []
    if (keyword) {
        tempData = Data.influencers.filter(
            inf => inf.name.toLowerCase().includes(keyword.toLowerCase()) ||
            inf.description.toLowerCase().includes(keyword.toLowerCase())
        )
        toReturn.total = tempData.length
        tempData = tempData.slice(from, from + count)
    }
    else{
        tempData = Data.influencers.slice(from, from + count)
        toReturn.total = Data.influencers.length
    }
    toReturn.data = tempData
    return toReturn
}

export default getInfluencer