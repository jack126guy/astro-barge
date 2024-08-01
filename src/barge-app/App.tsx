import { h, Component } from 'preact';

export class App extends Component<{}, { userName: string }> {
	render() {
		const { userName } = this.state;
		const text = userName ? `Hello, ${userName}!` : 'Hello!';
		return (
			<div>
				<label>
					Name:{' '}
					<input
						type="text"
						value={userName}
						onInput={(e) => this.updateName(e)}
					/>
				</label>
				<p>{text}</p>
			</div>
		);
	}
	updateName(e: Event) {
		this.setState({ userName: (e.target as HTMLInputElement).value });
	}
}
