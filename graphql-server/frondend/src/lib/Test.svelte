<script>
	// create one
	let name = "";
	let instagram = "";
	let facebook = "";
	let message1='';

	// here is fetched user

	let nameToSearch = "";
	let fetchedUser = "";
	let message = "";

	// this for update user 

	let editName = ''
	let newFacebook = ''
	let newInstagram = ''
	let message2 = ''
	

	async function createUser(event) {
		event.preventDefault();
		const mutation = `
			mutation CreateUser($name: String!, $facebook: String!,$instagram: String!) {
				createUser(name: $name, facebook: $facebook,instagram:$instagram) {
					name
					facebook
					instagram
				}
			}
		`;
		const data = { name, instagram, facebook };

		try {
			const req = await fetch("http://localhost:5000/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: mutation,
					variables: data,
				}),
			});

			const res = await req.json();
			console.log("data from backed", res.data.createUser);
			if(res.data.createUser){
				message1='user created'
			}
			name = ''
			facebook = ''
			instagram = ''
		} catch (err) {
			console.error("Error submitting user:", err);
		}
	}

	async function fetchUser(event) {
		event.preventDefault();

		const query = `
      query GetUser($name: String!) {
        getUser(name: $name) {
          name
          facebook
          instagram
        }
      }
    `;
		const variables = { name: nameToSearch };

		try {
			const res = await fetch("http://localhost:5000/graphql", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query, variables }),
			});

			const result = await res.json();
			fetchedUser = result.data.getUser;
			if (!result.data.getUser) {
				message = "no user found";
			}
			console.log("here is the fetched user from backend :", fetchedUser);
			nameToSearch = ''
		} catch (err) {
			console.error("Error fetching user:", err);
		}
	}

	async function updateUser(event) {
		event.preventDefault();
		const mutation = `
			mutation EditUser($name: String!, $facebook: String, $instagram: String) {
				editUser(name: $name, facebook: $facebook, instagram: $instagram) {
					name
					facebook
					instagram
				}
			}
		`;
		const variables = { name: editName, facebook: newFacebook, instagram: newInstagram };

		try {
			const res = await fetch("http://localhost:5000/graphql", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query: mutation, variables }),
			});
			const result = await res.json();
			console.log("Updated user:", result.data.editUser);
			if(result.data.editUser){
				message2 ='edit done'
			}
			editName = ''
			newFacebook = ''
			newInstagram =''
		} catch (err) {
			console.error("Error updating user:", err);
		}
	}



	function popup() {
		let popup = document.getElementById("popup");
		popup.style.display = "flex";
	}
	function back(){
		let popup = document.getElementById("popup");
		popup.style.display = "none";
	}
</script>

<div class="main-page">
	<div class="page">
		<form on:submit={createUser}>
			<h3>Create New User</h3>
			<input type="text" bind:value={name} placeholder="Name" id="input1" required />
			<input
				type="text"
				bind:value={facebook}
				placeholder="facebook"
				id="input2"
				required
			/>
			<input
				type="text"
				bind:value={instagram}
				placeholder="instagram"
				id="input3"
				required
			/>
			<button type="submit">Create User</button>
		</form>
		<button on:click={popup}>edit user</button>
		<p>{message1}</p>
	</div>
	<div class="search-div">
		<h3>Here Fetched User</h3>
		<form on:submit={fetchUser}>
			<input
				type="text"
				bind:value={nameToSearch}
				placeholder="Enter name to search"
				required
			/>
			<button type="submit">Search User</button>
		</form>

		{#if fetchedUser}
			<div class="fetched-div">
				<h3>User Details</h3>
				<p>Name: {fetchedUser.name}</p>
				<p>Facebook: {fetchedUser.facebook}</p>
				<p>Instagram: {fetchedUser.instagram}</p>
			</div>
		{:else}
			<p style="color: red;">{message}</p>
		{/if}
	</div>
</div>

<div class="popup" id="popup">
	<div on:submit={updateUser} class="popup-div">
		<form >
		<input type="text" bind:value={editName} placeholder="existing name">
		<input type="text" bind:value={newFacebook} placeholder="new facebook">
		<input type="text" bind:value={newInstagram} placeholder="new instagram">
		<button type="submit">edit</button>
		<p>{message2}</p>
		</form>
	</div>
	<p class="back" on:click={back}>x</p>
</div>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Arial, sans-serif;
	}
	.main-page {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.page {
		height: 300px;
		width: 100%;
		max-width: 400px;
		background-color: #e8f0fe;
		padding: 20px;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	input {
		padding: 10px 15px;
		margin-top: 10px;
		border: 1.5px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
	}
	input:hover {
		border: 1.5px solid #ccc;
	}

	button {
		margin-top: 15px;
		padding: 12px;
		background-color: black;
		color: white;
		border: none;
		transition: 0.2s linear;
	}

	button:hover {
		background-color: green;
	}

	.search-div {
		width: 100%;
		max-width: 400px;
		margin: 20px auto;
		padding: 15px 20px;
		background-color: #f5faff;
	}

	.fetched-div p {
		margin-bottom: 8px;
		font-size: 1rem;
	}
	.popup{
		height: 100vh;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.247);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		display: none;
		justify-content: center;
		align-items: center;
	}
	.popup-div{
		height: 300px;
		width: 100%;
		max-width: 400px;
		background-color: #e8f0fe;
		padding: 20px;
		
	}
	.back{
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: black;
		color: red;
		position: absolute;
		top: 10px;
		right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
</style>
