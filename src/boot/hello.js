import hello from 'hellojs'

export default ({ app }) => {
  hello.init({
    facebook: 'your-facebook-app-id-here',
    google: 'your-facebook-app-id-here'
  })
  app.use.$hello = hello
}
