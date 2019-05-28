() => {
  // stub
console.log('fired!');
  //variables at the top
  let headline = document.querySelector('h1'),
      subheand = document.querySelector('h3'),
      theButton = document.querySelector('button');
//functions in the middle
  function changetext(){
    headline.textContent = "Now I'm different!";
    sunhead.textContent = "hey me too. but that's ok"
  }

 theButton.adEventListener("click",changetext);
})();
