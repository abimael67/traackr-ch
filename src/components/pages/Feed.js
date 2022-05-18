import { useState, useEffect } from 'react'
import Header from '../common/Header'
import NavBar from '../common/NavBar'
import InfluencerCard from '../common/InfluencerCard'
import getInfluencer from '../../api/handler'
import Pagination from '../common/Pagination'

const PAGINATION_SIZE = 10
const Feed = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [data, setData] = useState(null)
    const [keyword, setKeyword] = useState("")
    useEffect(() => setData(getInfluencer(currentPage*PAGINATION_SIZE, PAGINATION_SIZE, keyword)), [currentPage, keyword])

    const handleChange = (element) => {
        setKeyword(element.target.value)
        setCurrentPage(0)
    }
    const nextPage = () => {
        if(currentPage + 1 < Math.ceil(data.total / PAGINATION_SIZE))
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage > 0)
            setCurrentPage(currentPage - 1)
    }

    const gotoPage = (page) => {
        setCurrentPage(page)
    }
    
    return (
        <div className="container">
            <Header />
            <NavBar handleChange={handleChange} />
            <div className="columns is-multiline">
                {data && data.data.map(influencer => <div key={influencer.uid} className="column is-half"> <InfluencerCard influencer={influencer} /></div>)}
            </div>
            <Pagination nextPage={nextPage} prevPage={prevPage} gotoPage={gotoPage} currentPage={currentPage} pagesCount={data ? Math.ceil(data.total / PAGINATION_SIZE) : 0} />
            <br/>
        </div>
    )
}

export default Feed