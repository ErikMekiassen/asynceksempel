const resolveAfter2Seconds = require("./resolveAfter2Seconds") // returnerer "resolved" etter 2 sekunder

async function asyncCall() {
console.log('calling');
const result = await resolveAfter2Seconds();
console.log(result);
}
const notAsync = () => {console.log("Jeg var først!!!!")}
asyncCall();
notAsync()