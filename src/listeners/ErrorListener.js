export default {
  label: 'error',
  execute: function execute(client, error) {
    console.error(error.name)
  }
}
