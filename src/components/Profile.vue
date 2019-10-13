<template>
	<div>
		<img :src="profile.avatar_url" alt="profile image">
		<h2>@{{ profile.login }}</h2>
		<h1>{{ profile.name }}</h1>
		<p>{{ profile.bio }}</p>
		<h3><i class="fa fa-map-marker"></i> {{ profile.location }}</h3>
	</div>
</template>

<script>
  export default {
    name: 'profile',
    props: ['profile']
  }
</script>

<style>
	img {
		border-radius: 50%;
		width: 250px;
		max-width: 80vw;
		-moz-box-shadow: 0px 0px 5px whitesmoke;
		-webkit-box-shadow: 0px 0px 5px whitesmoke;
		box-shadow: 0px 0px 5px whitesmoke;
	}

	h1, h2, h3 {
	  margin: 0.35em;
	}

	p {
		font-size: 1.2em; /* 18px */
	}

</style>