/*const prefix = "http://www.google.com/s2/favicons?domain="*/
const prefix = "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="

const defaultSize = "32"

const submitButton = document.querySelector("#submit-button")

function isValidURL(urlToPass) {
  /* return Boolean(urlToPass.match(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/gi).length) */
  /*const urlRegex = new RegExp("^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$", "gi")*/
  const urlRegex = new RegExp("^https?:\/\/(?:www\.)?[a-zA-Z0-9_\-]+[\.a-zA-Z0-9]{1,6}$", "g");
  /*console.log(urlToPass + " = Valid? " + urlRegex.test(urlToPass))*/
  return urlRegex.test(urlToPass)
}

function parseDNS(urlToPass) {
  const dnsRegex = new RegExp("");
  return urlToPass.match(dnsRegex)[0]
}

submitButton.addEventListener('click', () => {
  
  const inputEl = document.querySelector('input#url')
  inputEl.classList.remove("wrong-field")
  const errorMessage = document.querySelector(".error-message")
  errorMessage.innerText = ""
  
  const output = document.querySelector(".favicon-output")
  output.setAttribute("src", "")
  output.setAttribute("alt", "")
  
  let input = document.querySelector('#url').value
  
  const sizeSelect = document.querySelector("#size-select").value
  
  let sizeSelected = sizeSelect === "" ? defaultSize : sizeSelect
  
  if(input === "") {
    inputEl.classList.add("wrong-field")
    return errorMessage.innerText = `You didn't specify any URL. Please provide one and retry.`
  } 
  
  if(isValidURL(input) === false) {
    inputEl.classList.add("wrong-field")
    return errorMessage.innerText = `The provided URL does not seem to be valid.
    Please provide a valid one.
    
    Example: https://google.com`
  }
  
  let url = prefix + input + `&size=${sizeSelected}`
  
  console.log(`Clicked the button.\nInput is: ${input}\nOutput is: ${url}`)
  
  
  output.setAttribute("src", url)
  output.setAttribute("alt", input)
})