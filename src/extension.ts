// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "center-of-row" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('center-of-row.goToCenter', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from center-of-row!');
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			// Get the current selection
			const selection = editor.selection;

			// Get the position of the cursor in the active selection
			const cursorPosition = selection.active;

			// Get the line content
			const line = editor.document.lineAt(cursorPosition.line).text;

			// Calculate the new column position (half of the line length)
			const newColumn = Math.floor(line.length / 2);

			// Set the new cursor position
			const newPosition = new vscode.Position(cursorPosition.line, newColumn);

			// Move the cursor to the new position
			editor.selection = new vscode.Selection(newPosition, newPosition);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
