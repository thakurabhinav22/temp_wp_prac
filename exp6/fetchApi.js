async function fetchData(){

	let response = await fetch("https://dummyjson.com/products")

	if(response.ok){
	   console.log("Data Fetch")
	   let data = await response.json();
	   console.log(data);
	}else{
	   console.log("Something went wrong");
	}
}
	fetchData();
