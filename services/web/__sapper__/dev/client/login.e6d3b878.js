import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, X as onMount, Y as goto, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, k as add_location, l as insert_dev, m as append_dev, O as listen_dev, n as noop, a as space, c as claim_space, j as attr_dev } from './client.9006220b.js';

/* src/routes/auth/login.svelte generated by Svelte v3.32.1 */
const file = "src/routes/auth/login.svelte";

// (29:0) {#if !isSignInUiShown}
function create_if_block(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Sign In");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Sign In");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 29, 0, 722);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*signIn*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(29:0) {#if !isSignInUiShown}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let if_block = !/*isSignInUiShown*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "firebaseui-auth-container");
			add_location(div, file, 31, 0, 771);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (!/*isSignInUiShown*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Login", slots, []);
	let { firebaseAuthUiConfig = {} } = $$props;
	let isSignInUiShown = false;

	onMount(() => {
		$$invalidate(2, firebaseAuthUiConfig = {
			callbacks: {
				signInSuccessWithAuthResult: () => {
					goto("/admin");
					return false;
				},
				uiShown: () => {
					$$invalidate(0, isSignInUiShown = true);
				}
			},
			credentialHelper: firebaseui.auth.CredentialHelper.NONE,
			signInFlow: "popup",
			signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
		});
	});

	const signIn = () => {
		firebaseAuthUi.start("#firebaseui-auth-container", firebaseAuthUiConfig);
	};

	const writable_props = ["firebaseAuthUiConfig"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("firebaseAuthUiConfig" in $$props) $$invalidate(2, firebaseAuthUiConfig = $$props.firebaseAuthUiConfig);
	};

	$$self.$capture_state = () => ({
		goto,
		onMount,
		firebaseAuthUiConfig,
		isSignInUiShown,
		signIn
	});

	$$self.$inject_state = $$props => {
		if ("firebaseAuthUiConfig" in $$props) $$invalidate(2, firebaseAuthUiConfig = $$props.firebaseAuthUiConfig);
		if ("isSignInUiShown" in $$props) $$invalidate(0, isSignInUiShown = $$props.isSignInUiShown);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [isSignInUiShown, signIn, firebaseAuthUiConfig];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { firebaseAuthUiConfig: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}

	get firebaseAuthUiConfig() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set firebaseAuthUiConfig(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZTZkM2I4NzguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXV0aC9sb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ290byB9IGZyb20gJ0BzYXBwZXIvYXBwJztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbiAgXG4gIGV4cG9ydCBsZXQgZmlyZWJhc2VBdXRoVWlDb25maWcgPSB7fTtcbiAgbGV0IGlzU2lnbkluVWlTaG93biA9IGZhbHNlO1xuICBvbk1vdW50KCgpID0+IHtcbiAgICBmaXJlYmFzZUF1dGhVaUNvbmZpZyA9IHtcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6ICgpID0+IHtcbiAgICAgICAgICBnb3RvKFwiL2FkbWluXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdWlTaG93bjogKCkgPT4ge1xuICAgICAgICAgICAgaXNTaWduSW5VaVNob3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWRlbnRpYWxIZWxwZXI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkUsXG4gICAgICBzaWduSW5GbG93OiBcInBvcHVwXCIsXG4gICAgICBzaWduSW5PcHRpb25zOiBbZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRF1cbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBzaWduSW4gPSAoKSA9PiB7XG4gICAgZmlyZWJhc2VBdXRoVWkuc3RhcnQoXCIjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiLCBmaXJlYmFzZUF1dGhVaUNvbmZpZyk7XG4gIH07XG48L3NjcmlwdD5cblxueyNpZiAhaXNTaWduSW5VaVNob3dufVxuPGJ1dHRvbiBvbjpjbGljaz17c2lnbklufT5TaWduIEluPC9idXR0b24+XG57L2lmfVxuPGRpdiBpZD1cImZpcmViYXNldWktYXV0aC1jb250YWluZXJcIj48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBNkJrQixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FEbEIsR0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQWYsR0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeEJSLG9CQUFvQjtLQUMzQixlQUFlLEdBQUcsS0FBSzs7Q0FDM0IsT0FBTztrQkFDTCxvQkFBb0I7R0FDbEIsU0FBUztJQUNQLDJCQUEyQjtLQUN6QixJQUFJLENBQUMsUUFBUTtZQUNOLEtBQUs7O0lBRWQsT0FBTztxQkFDSCxlQUFlLEdBQUcsSUFBSTs7O0dBRzVCLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTtHQUN2RCxVQUFVLEVBQUUsT0FBTztHQUNuQixhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXOzs7O09BSXpELE1BQU07RUFDVixjQUFjLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9