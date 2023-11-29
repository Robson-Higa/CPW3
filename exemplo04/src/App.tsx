import { useState } from "react";
import { Container } from "./styles";
import SearchInput from "./components/SearchInput";

const App = () => {

    const [query, setQuery] = useState('')

    return (

        <Container>
            <SearchInput query={query} setQuery={setQuery} />
        </Container>
    )
}

export default App;
