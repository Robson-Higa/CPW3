import { useEffect, useState } from 'react'

const Home = () => {
  
  const [sentence, setSentence] = useState('')
  const [numberOfChars, setNumberOfChars] = useState(0)


  useEffect(() => {
    //const wordCount = sentence.split(/\s+/).filter((word) => word !== '').length;
    const charCount = sentence.replace(/[\s/.,:;!?]/g, '').length
    //const size = sentence.length
    setNumberOfChars(charCount)
  }, [sentence])

  // Área de renderização
  return (
    <div>
     

      <div>
        
        <textarea placeholder='Insira seu texo aqui...'  value={sentence}   onChange={(e) => setSentence(e.target.value)}
        />
        <span>Quantidade de {numberOfChars} caracteres!</span>
      </div>
    </div>
  )
}

export default Home
