let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
function clicker(){
  axios.get(url)
.then(function(res){
  document.getElementById('quote').innerHTML = res.data[0];
})
.catch(function(){
  console.log('err')
}) 
}