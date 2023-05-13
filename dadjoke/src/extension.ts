import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.tellDadJoke', () => {
        axios.get('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'text/plain'
            }
        }).then(response => {
            vscode.window.showInformationMessage(response.data);
        }).catch(error => {
            console.error(error);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
