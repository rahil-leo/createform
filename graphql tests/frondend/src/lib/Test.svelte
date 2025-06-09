<script>
	let name = "";
	let instagram = "";
    let facebook = ''
	let username

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

		const data = { name, instagram,facebook };

		try {
			const req = await fetch("http://localhost:5000/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: mutation,
					variables: data
				}),
			});

			const res = await req.json();
			console.log("data from backed", res.data.createUser);
            if(req.ok){
                username=res.data.createUser.name
            }
		} catch (err) {
			console.error("Error submitting user:", err);
		}
	}
</script>

<div class="page">
	<form on:submit={createUser}>
	     <h1>User Details</h1>
		<input type="text" bind:value={name} placeholder="Name" required />
		<input type="text" bind:value={facebook} placeholder="facebook" required />
		<input type="text" bind:value={instagram} placeholder="instagram" required />
		<button type="submit">Submit</button>
	</form>
</div>

<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
	.page {
		height: 100vh;
		width: 100%;
		background-color: aliceblue;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	form {
		display: flex;
		flex-direction: column;
	}

	input {
		padding: 8px 20px;
        margin-top: 5px;

	}
	button {
		background-color: black;
		color: white;
        margin-top: 5px;
		padding: 8px 20px;

	}
	button:hover {
		background-color: green;
		transition: 0.2s linear;
	}
</style>
