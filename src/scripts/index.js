import moment from 'moment'

const rightNow = moment().format('MMMM Do YYYY, h:mm:ss a')

console.log('Greetings from Webpack')
console.log(`Current time: ${rightNow}`)
