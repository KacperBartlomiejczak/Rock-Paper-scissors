import Wrapper from "../UI/Wrapper"
import { useState, useRef } from "react"

import "./User.scss"
export default function User({ name }) {
	const [user, setUser] = useState(name)
	const [isClicked, setIsClicked] = useState(false)
	const inputRef = useRef()

	const handleClick = () => {
		setIsClicked(!isClicked)
	}
	const handleChange = () => {
		setUser(inputRef.current.value)
	}
	if (user === "" && !isClicked) {
		setUser(name)
	}
	return (
		<div className='user'>
			<Wrapper>
				{isClicked ? (
					<input
						ref={inputRef}
						onChange={handleChange}
						placeholder='Name'
						value={user}
					></input>
				) : (
					<h3 className='user__text'>{user}</h3>
				)}

				<button onClick={handleClick}>Change name</button>
			</Wrapper>
		</div>
	)
}
