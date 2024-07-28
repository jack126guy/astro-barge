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
						onInput={this.updateName.bind(this)}
					/>
				</label>
				<p>{text}</p>
			</div>
		);
	}
	// Don't make this an arrow function because the generated code
	// would trigger a polyfill for Array.prototype.concat.
	// You must use .bind(this) when passing this function as an event handler.
	updateName(e: Event) {
		this.setState({ userName: (e.target as HTMLInputElement).value });
	}
}
