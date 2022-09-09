import styled from 'styled-components'

export const ChatContainer = styled.div`
	position: fixed;
	bottom: 0;
	height: 60%;
	max-height: 60;
	width: 100%;
	background: hsl(237deg 53% 9%);
	border-top-left-radius: 64px;
	border-top-right-radius: 64px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ChatHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 48px;
	background: hsl(237deg 53% 9%);
	color: var(--white);

	span {
		font-weight: 600;
		font-size: 1.25em;
	}

	button {
		color: var(--white);
		background: transparent;
		font-size: 3em;
		border: none;
	}
`

export const Messages = styled.div`
	overflow-y: scroll;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 16px 0;
	padding: 1em 1.5em;
	height: 100%;

	.message:nth-child(odd) {
		align-self: flex-start;
		border-color: #ff4757;
		color: #ff4757;
	}

	.message:nth-child(even) {
		align-self: flex-end;
		border-color: #5352ed;
		color: #5352ed;
	}
`

export const FormChat = styled.form`
	display: flex;
	justify-content: space-between;
	padding: 12px;
`

export const ChatInput = styled.input`
	border: 2px solid var(--white);
	padding: 16px;
	border-radius: var(--b-radius);
	color: #fff;
	width: 90%;
	background: transparent;
	font-size: 1em;
	outline: 0px solid var(--white);
	font-weight: 600;
	align-self: flex-end;
`

export const Message = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px 0;
	width: 300px;
	border-radius: var(--b-radius);
	border: 2px solid;
	word-break: break-all;
	height: auto;
	padding: 8px 12px;

	.author {
		color: inherit;
	}

	.content {
		color: #fff;
	}
`