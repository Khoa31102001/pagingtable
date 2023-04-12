const selector = document.querySelector.bind(document);
const selectors = document.querySelectorAll.bind(document);
function getData() {
  axios.get('https://jsonplaceholder.typicode.com/posts?fbclid=IwAR2C5GxM6J31eKvmjcriOkYAdI10mZf53SlW3hO5DesM3vlCqXuq79cthpA')
    .then(function (response) {
      $(document).ready(function () {
        $('#dtBasicExample').DataTable({
          data: response.data,
          columns: [
            { data: 'userId' },
            { data: 'id' },
            { data: 'title' },
            { data: 'body' }
          ],
        });
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
getData();





