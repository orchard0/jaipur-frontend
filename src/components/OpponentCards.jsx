const OpponentCards = ({ opponentHand }) => {
	return (
		<div className="opponentCardArea">
			{Array.from({ length: opponentHand }, (_, i) => (
				<div className="opponentCardBack" key={i}>
					<p className="cardBackText">Jaipur</p>
				</div>
			))}
		</div>
	);
};

export default OpponentCards;
