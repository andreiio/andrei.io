<template class="logo">
	<div
		class="logo"
		:class="classObject"
		@mouseover="hover = true"
		@mouseleave="hover = false"
		v-html="svg"
	/>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';

	export default {
		props: {
			draw: {
				type: Boolean,
				default: false,
			},
			bounceOnHover: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				hover: false,
			};
		},
		computed: {
			...mapState({
				shouldAnimate: state => state.animations.logo,
			}),
			showClipPath() {
				return this.shouldAnimate || !this.fill;
			},
			classObject() {
				return {
					draw: this.shouldAnimate && this.draw,
					bounce: this.hover,
				};
			},
			svg() {
				return require('!svg-inline-loader!~/assets/svg/logo.svg').replace(
					/logoClipPath/g,
					`logoClipPath${this._uid}`
				);
			},
		},
		methods: {
			...mapMutations({
				disableAnimation: 'animations/disable',
			}),
		},
		mounted() {
			this.$nextTick(() => {
				setTimeout(() => this.disableAnimation('logo'), 2000);
			});
		},
	};
</script>

<style lang="postcss" scoped>
	.logo {
		>>> {
			.a,
			.dot {
				stroke: currentColor;
				fill: currentColor;
				stroke-width: 8px;
			}
		}

		&.draw >>> {
			.dot,
			.a {
				stroke-dasharray: 1260;
				stroke-linejoin: round;
				stroke-linecap: round;
				stroke-width: 8px;

				animation-direction: reverse;
				animation-duration: 1.75s;
				animation-name: drawIn;
			}
		}

		&.bounce,
		&:hover {
			&:not(.draw) >>> .dot {
				animation-duration: 0.55s;
				animation-fill-mode: both;
				animation-name: bounce;
			}
		}
	}

	@keyframes drawIn {
		0% {
			stroke-opacity: 0;
			fill-opacity: 1;
		}

		10% {
			stroke-dashoffset: 0;
			stroke-opacity: 1;
			fill-opacity: 0;
		}

		100% {
			stroke-dashoffset: 1260;
			stroke-opacity: 1;
			fill-opacity: 0;
		}
	}

	@keyframes bounce {
		0%,
		20%,
		53%,
		80%,
		100% {
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			transform: translate3d(0, 0, 0);
		}

		40%,
		43% {
			animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			transform: translate3d(0, -2em, 0);
		}

		70% {
			animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			transform: translate3d(0, -1em, 0);
		}

		90% {
			transform: translate3d(0, -0.25em, 0);
		}
	}
</style>
