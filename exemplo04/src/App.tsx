import { useEffect, useState } from "react";

import { Container } from "./styles";
import SearchInput from "./components/SearchInput";
import data from './data/trabalhos.json'
import { work, getWork } from './models/work'
import WorkCard from './components/WorkCard'

const App = () => {

    const [query, setQuery] = useState('')
    const [worksList, setWorksList] = useState<work[]>([])
    const [worksToBeShow, setWorksToBeShow] = useState<work[]>([])

    useEffect(() => { 
        const { works } = data
        const allWorks = works.map((w) => getWork(w))
        setWorksList(allWorks)
        setWorksToBeShow(allWorks)

    }, [])

    useEffect (() => { 
        if(query) {
            const lowerCaseQuery = query.toLowerCase().trim()
            const filterWorks = worksList.filter((w) => w.title.toLowerCase().includes(lowerCaseQuery)|| w.authors.join().toLowerCase().includes(lowerCaseQuery))
            setWorksToBeShow(filterWorks)
        } else{

            setWorksToBeShow(worksList)
        }

    }, [query])

    return (

        <Container>
            <SearchInput query={query} setQuery={setQuery} />

            {(worksToBeShow.length > 0) && (
                worksToBeShow.map((w , index )=> <WorkCard key={index} title={w.title} authors={w.authors} />)
            )}
        </Container>
    )
}

export default App;
