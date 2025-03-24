import styles from "./app.module.css"
import { useEffect, useState } from "react"
import { WORDS, Challenge } from "./utils/words"

import { Tip } from "./components/Tip"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"
import { LettersUsed } from "./components/LettersUsed"

export function App() {
  const [ attempts, setAttempts ] = useState(0)
  const [ letter, setLetter ] = useState("")
  const [ challenge, setChallenge ] = useState<Challenge | null>(null)

  function handleRestartGame(){
    alert("Reiniciar o Jogo!")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  if(!challenge){
    return
  }
  
  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame}/>
        <Tip tip="Dynamic Programmer Language"/>
        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (
              <Letter value=""/>
            ))
          }        
        
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input maxLength={1} placeholder="?"/>
          <Button title="Confirmar"/>
        </div>

        <LettersUsed />
      </main>
    </div>
  )
}