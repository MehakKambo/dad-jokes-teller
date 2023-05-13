"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
var axios_1 = require("axios");
function activate(context) {
    var disposable = vscode.commands.registerCommand('extension.tellDadJoke', function () {
        axios_1.default.get('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'text/plain'
            }
        }).then(function (response) {
            vscode.window.showInformationMessage(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
