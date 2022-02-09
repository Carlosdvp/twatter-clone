<template>
	<div class="word-item">
		<section class="user-profile_word">
			<p class="word-item_user">
				<strong>{{ username }}</strong>
			</p>
			<p class="word-item_content">
				"{{ word.content }}"
			</p>
		</section>
	</div>
</template>

<script>
	export default {
		name: "WordItem",
		props: {
			username: {
				type: String,
				required: true
			},
			word: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style scoped>

.word-item {
	padding: 0.1rem;
	background-color: whitesmoke;
	border-radius: 2px;
	border: 1px solid lightsteelblue;
	box-sizing: border-box;
	cursor: pointer;
	transition: all 0.27s ease-in;
	margin: 0.5rem auto;
	width: 80%;
}

.word-item:hover {
	transform: scale(1.1, 1.2);
}

.word-item_user {

}

</style>