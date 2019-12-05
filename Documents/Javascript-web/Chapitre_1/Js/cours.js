var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
  console.log("Body est un noeud élément");
}
else {
  console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);

// Affiche les noeuds enfant du noeoud body
for (var i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}

