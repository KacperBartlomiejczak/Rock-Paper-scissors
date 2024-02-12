import "./Enemy.scss"

export default function Enemy({ enemyChoice, isClicked }) {
	let text = <p className='enemy__choosing'>Enemy is choosing...</p>
	if (isClicked) {
		text = <p>Enemy choose {enemyChoice}</p>
	}
	console.log(enemyChoice)
	return (
		<div className='enemy'>
			<h3>Enemy</h3>
			<div className='enemy__choice'>{text}</div>
		</div>
	)
}
