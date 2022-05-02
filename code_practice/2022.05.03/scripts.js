const button = document.querySelector('#button');

button.addEventListener('click', () => {
  const getAddress = (inputData) => {
    console.log(inputData);
  };

  const addressSearch = new daum.Postcode({
    oncomplete: getAddress,
  });

  addressSearch.open();
});
