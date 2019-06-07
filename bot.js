// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { CardFactory } = require('botbuilder');

// Import AdaptiveCard content.
const AccidentsCard = require('./resources/Siniestro.json');
const InsuranceCard = require('./resources/CreacionSeguro.json');
const InsuranceCard2 = require('./resources/CreacionSeguro2.json');

const MenuCard = require('./resources/MenuCard.json');
const App1Card = require('./resources/App1Card.json');
const App1ItemCard = require('./resources/App1ItemCard.json');

const CARDS = [
	AccidentsCard,
	InsuranceCard,
	InsuranceCard2,
	MenuCard
];

const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.5;
const nlpManager = new NlpManager({ languages: ['es', 'en'] });
////
var initCount = 0;
var onMenu = false;
////
function say(message) {
	// eslint-disable-next-line no-console
	console.log(message);
}

trainnlp(nlpManager, say);

class AdaptiveCardsBot {
	/**
	 * Every conversation turn for our AdaptiveCardsBot will call this method.
	 * There are no dialogs used, since it's "single turn" processing, meaning a single
	 * request and response, with no stateful conversation.
	 * @param turnContext A TurnContext instance containing all the data needed for processing this conversation turn.
	 */

	async onTurn(context) {
		// console.log(context.activity);
		// See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
		if (context.activity.type === 'message') {
			if (context.activity.text === '/menu') {
				// console.log('ID:',context.activity.from.id);
				await context.sendActivity({
					attachments: [CardFactory.adaptiveCard(MenuCard)]
				});
			}
			else if (context.activity.value) {
				let app = context.activity.value;
				if (context.activity.value.child) {
  	  				await context.sendActivity({
						attachments: [CardFactory.adaptiveCard(App1ItemCard)]
					});
				}
				else if (app === 1) {
	  				await context.sendActivity({
						attachments: [CardFactory.adaptiveCard(App1Card)]
					});
				}
				else if (app === 2) {
	  				await context.sendActivity("App en desarrollo " + String.fromCodePoint(0x1F477));				  
				}
				else if (app === 3) {
	  				await context.sendActivity("App en desarrollo " + String.fromCodePoint(0x1F477));
				}
			}
			else {
				const result = await nlpManager.process(context.activity.text);
				const answer = result.score > threshold && result.answer ? result.answer : "El chatbot no ha entendido la petición. Prueba de nuevo " + String.fromCodePoint(0x1F630);
				await context.sendActivity ({
					text: answer
				});
			}
		} else {
			initCount++;
			if (initCount === 2) {
				await context.sendActivity("¡Bienvenido al chatbot del reto Sándoz: Medicamentos sin Bulos!");
				await context.sendActivity("Aquí podrás informarte acerca de varios medicamentos, así como cosas relacionadas a estos. Si tienes alguna consulta, tan sola introdúcela. Envía el comando **/menu** para desplegar el menú interactivo. Gracias por usar nuestro servicio " + String.fromCodePoint(0x1F604));
				initCount = 0;
			}
		}
	}
}

exports.AdaptiveCardsBot = AdaptiveCardsBot;
