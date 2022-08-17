  window.addEventListener("load", function(event) {
  event.preventDefault();

  const flavors = ['cookie dough', 'chocolate', 'banana split', 'rocky road', 'strawberry'];

  ul = document.createElement("ul");

  // flavors.forEach(function(flavor) {
  //   const li = document.createElement("li");
  //   li.append(flavor);
  //   ul.append(li);
  // });


for (let i = 0; i < flavors.length; i +=1) {
  li = document.createElement("li");
  li.append(flavors[i]);
  ul.append(li);
}

  const bodyElement = document.querySelector("body");
    bodyElement.append(ul);
    bodyElement.append(li);

});