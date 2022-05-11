<script>
	import { onMount } from "svelte";
	import { apiData, datatable} from "./api.js";
	import { Router, Route, Link } from "svelte-navigator";

	onMount(async () => {
	  const link1 = "http://192.168.1.24:5000/1"
	  fetch(link1)
	  .then(response => response.json())
	  .then(data => {
			console.log(data);
		apiData.set(data);
	  }).catch(error => {
		console.log(error);
		return [];
	  });
	});


</script>


<Router>
<header>
<h1>History</h1>
<nav><table>
	<th><Link to="/">HOME</Link></th>
	<th><Link to="data">data</Link></th>
	<th><Link to="about">about</Link></th>
</table></nav>
</header>
<main>

<Route path="/">
<h3>HOME</h3>

</Route>

<Route path="data">
	<h3>Data</h3>
	<table>
        <tr>
            <h1>Table</h1>
        </tr>
        <th>Id</th>
        <th>user</th>
        <th>password</th>
        <th>age</th>
        <th>contact</th>
            {#each $datatable as data}
            <tr class="table_data">
                <th>{data.id}</th>
                <th>{data.user}</th>
                <th>{data.password}</th>
                <th>{data.age}</th>
                <th class="contact">{data.contact}</th>
            </tr>
            {/each}
    </table>
</Route>

<Route path="about">
	<h3>about</h3>
	
</Route>

</main>
</Router>

<style>
	main {
		text-align: center;
		max-width: 30%;
		margin: 0 auto;
		font-family: Verdana;
	}
	table,tr,th{
	border: 2px solid #000000;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 6px;
	padding-bottom: 6px;
	
	}
	.table_data{
		padding: 20px;
	}
	.contact{
		text-align: left;
	}
</style>