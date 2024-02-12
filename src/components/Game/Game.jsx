import User from "../User/User"
import Buttons from "./Buttons"
import { useState, useRef, useEffect } from "react"
import Enemy from "./Enemy"

const gameChoice = ["rock", "paper", "scissors"]
export default function Game() {
	const timerExpired = useRef()
	const [enemyChoice, setEnemyChoice] = useState("")
	const [gameData, setGameData] = useState({
		paper: false,
		rock: false,
		scissors: false,
	})
	const [clickArray, setClickArray] = useState([false, false, false])
	const [isClicked, setIsClicked] = useState(false)

	const handleClick = index => {
		const newArray = [...clickArray]
		newArray[index] = true
		setClickArray(newArray)
		setIsClicked(true)
		setGameData(prevGameData => ({
			...prevGameData,
			paper: newArray[0],
			rock: newArray[1],
			scissors: newArray[2],
		}))
	}

	useEffect(() => {
		if (isClicked) {
			// Update enemyChoice after gameData is updated

			const newEnemyChoice = gameChoice[Math.floor(Math.random() * 3)]
			setEnemyChoice(newEnemyChoice)
			console.log(newEnemyChoice)
		}
	}, [isClicked])

	return (
		<div className='game'>
			<User name='You'></User>
			<Buttons onHandleClick={handleClick} isClicked={isClicked}></Buttons>
			<Enemy enemyChoice={enemyChoice} isClicked={isClicked}></Enemy>
		</div>
	)
}
