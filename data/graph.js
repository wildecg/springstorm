var nodes = [
		{"id": "risorse limitate", "label": "risorse limitate"},
		{"id": "mutazioni", "label": "mutazioni"},
		{"id": "poteri", "label": "poteri"},
		{"id": "supremazia", "label": "supremazia"},

		{"id": "mancanza di potere", "label": "mancanza di potere"},
		{"id": "mancanza di magia", "label": "mancanza di magia"},
		{"id": "ottenere le mutazioni migliori", "label": "ottenere le mutazioni migliori"},
		{"id": "collezionismo", "label": "collezionismo"},
		{"id": "collezionare parti del corpo", "label": "collezionare parti del corpo"},
		{"id": "agire sulla genetica", "label": "agire sulla genetica"},
		{"id": "vettori", "label": "vettori"},
		{"id": "virus", "label": "virus"},
		{"id": "cambiare gli obiettivi", "label": "cambiare gli obiettivi"},
		{"id": "scacco matto", "label": "scacco matto"}
]
var edges = [
		{"from": "risorse limitate", "to": "mancanza di potere"},
		{"from": "mancanza di potere", "to": "mancanza di magia"},
		{"from": "mutazioni", "to": "ottenere le mutazioni migliori"},
		{"from": "ottenere le mutazioni migliori", "to": "collezionismo"},
		{"from": "collezionismo", "to": "collezionare parti del corpo"},
		{"from": "mutazioni", "to": "agire sulla genetica"},
		{"from": "agire sulla genetica", "to": "vettori"},
		{"from": "vettori", "to": "virus"},
		{"from": "poteri", "to": "cambiare gli obiettivi"},
		{"from": "supremazia", "to": "scacco matto"}
]
