import Wrapper from "../UI/Wrapper"
import { useState } from "react"
import "./Buttons.scss"

export default function Buttons({ onHandleClick, isClicked }) {
	return (
		<div className='container'>
			<button
				onClick={() => onHandleClick(0)}
				className='game__button game__button--paper'
				disabled={isClicked}
			>
				Paper
			</button>
			<button
				onClick={() => onHandleClick(1)}
				className='game__button game__button--rock'
				disabled={isClicked}
			>
				Rock
			</button>
			<button
				onClick={() => onHandleClick(2)}
				className='game__button game__button--scissors'
				disabled={isClicked}
			>
				Scissors
			</button>
		</div>
	)
}
