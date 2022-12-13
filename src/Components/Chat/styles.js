import styled from 'styled-components'

export const ChatContainer = styled.div`
	position: fixed;
	bottom: -32rem;
	height: 60%;
	width: 100%;
	background: hsl(237deg 53% 9%);
	border-top-left-radius: 48px;
	border-top-right-radius: 48px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		right: -20px;
		width: 400px;
		height: 70%;
		border-top-right-radius: 0;
	}
`

export const ChatHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2.25rem;
	background: hsl(237deg 53% 9%);
	color: var(--white);

	span {
		font-weight: 600;
		font-size: 1.25rem;
	}

	button {
		color: var(--white);
		background: transparent;
		font-size: 3rem;
		border: none;
	}
`

export const Messages = styled.div`
	overflow-y: scroll;
	height: auto;
	display: grid;
	grid-template-colums: repeat(1, fr);
	align-content: flex-start;
	align-items: center;
	gap: 1rem;
	padding: 0.25rem 2.25rem;
	height: 100%;

	.author-m {
		justify-self: flex-end;
	}
`

export const Message = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 0.15rem;
	border-radius: var(--b-radius);
	border: 2px solid;
	word-break: break-all;
	height: auto;
	padding: 0.75rem;
	border-color: var(--white);

	.author-m {
		color: var(--blue);
	}

	.guest-m {
		color: var(--red);
	}

	.content {
		color: #fff;
	}

	@media screen and (min-width: 768px) {
		width: 200px;
	}
`

export const FormChat = styled.form`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2.25rem;
	gap: 0.5rem;

	@media screen and (min-width: 768px) {
		padding: 1rem 2.25rem;
	}
`

export const ChatInput = styled.input`
	border: 2px solid var(--white);
	padding: 0 1rem;
	border-radius: var(--b-radius);
	color: #fff;
	width: 90%;
	background: transparent;
	font-size: 1rem;
	outline: 0px solid var(--white);
	font-weight: 500;
`