//
// wrapper around axios to include Rails CSRF token
// https://github.com/rails/webpacker/issues/1015
//
import axios from 'axios'

const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
const ax = axios.create({
  headers: {
    common: {
      'X-CSRF-Token': token.content
    }
  }
});

export default ax
