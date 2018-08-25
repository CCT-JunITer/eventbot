export function createMessage(text, price, date){
	return {
	    "text": `Ich habe einen neuen Vorschlag! \n *Beschreibung:* ${text} \n *Preis:* ${price} \n *Datum:* ${date}`,
	    "attachments": [
	        {
	            "text": "Kommst du mit?",
	            "fallback": "Sorry, es ist wohl etwas schiefgelaufen. Wenn du mitkommen willst, kannst du gerne HR eine Nachricht schreiben!",
	            "callback_id": "proposal",
	            "color": "#3AA3E3",
	            "attachment_type": "default",
	            "actions": [
	                {
	                    "name": "response",
	                    "text": "Ja, ich bin dabei!",
	                    "type": "button",
	                    "value": "yes"
	                },
	                {
	                    "name": "response",
	                    "text": "Nein, ich kann leider nicht mit :(",
	                    "type": "button",
	                    "value": "no"
	                }
	            ]
	        }
	    ]
	}
}